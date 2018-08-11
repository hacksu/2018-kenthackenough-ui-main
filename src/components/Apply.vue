<template>
  <div id="application">
    <div id="appHeader">
      <h3>>KHE Application</h3>
    </div>

    <div id="questionHolder"
          v-on:submit.prevent>
      <div class="question" v-for="(question, index) in appQuestions"
            >
        
        <div id="displayedQuestion" v-if="currentQuestion == index">
        
          <p>{{index + 1}}. 
            <span class="err"
                  v-if="question.required">*</span>
            {{ question.label }}</p>
          <input type="text" v-if="question.type == 'text'"
                 class="question"
                 @keyup.enter="next()"
               v-bind:placeholder="question.placeholder"
               v-model="$parent.user.application[question.appField]">
        
          <div v-if="question.type == 'phone'">
            <vue-tel-input v-model="$parent.user.application.phone" 
                  @onInput="onInput"
                  @keyup.enter="next()"
                  class="front">
                  </vue-tel-input>
            
          </div>
          
          <div class="optHolder" 
               v-if="question.type == 'radio'">
<!--            The following input is used to allow users to type their selection, 
                instead of clicking on the buttons.
                
                You can find it's handler in the watched functions.
-->
            <input class="hidden question" 
                   v-model="radioInput"
                   @keyup.enter="next()"
                   >
            <div class="opt" 
                 v-for="(option, optIndex) in question.options"
                 v-bind:class="{
                                    selected: $parent.user.application[question.appField] == option[1],
                                    selectable: $parent.user.application[question.appField] != option[1]
                                           }"
                 @click="$parent.user.application[question.appField] = option[1]">
              [{{optIndex + 1}}.] &nbsp; {{option[0]}}
            </div>
            <input class="stringOpt" 
                   v-if="question.stringInputLabel != undefined"
                   type="text" 
                   @keyup.enter="next()"
                   v-bind:placeholder="question.stringInputLabel">
          </div>
          
          <div class="optHolder" 
               v-if="question.type == 'bool'">
            <input class="hidden question" 
                   v-model="boolInput"
                   @keyup.enter="next()"
                   >
            <div class="opt"
                 v-bind:class="{
                                    selected: $parent.user.application[question.appField] == true,
                                    selectable: $parent.user.application[question.appField] == false
                                           }"
                 @click="$parent.user.application[question.appField] = true">
              1. Yes!
            </div>
            <div class="opt"
                 v-bind:class="{
                                    selected: $parent.user.application[question.appField] == false,
                                    selectable: $parent.user.application[question.appField] == true
                                           }"
                 @click="$parent.user.application[question.appField] = false">
              2. Nope!
            </div>
          </div>
          
          <div v-if="question.type == 'number'">
            <input type="number" class="numInput"
                   v-model="$parent.user.application[question.appField]"
                   v-bind:placeholder="question.placeholder">
          </div>
        </div>
        
      </div>
      <div class="nav-buttons">
        <button @click="previous()" class="spooky-button"
                v-if="currentQuestion != 0">
          Previous
        </button>
        <button style="opacity: 0" v-else></button>
        <button @click="next()" class="spooky-button"
                :class="{
                        disabled: !valid(currentQuestion)
                        }">
            
          Next
          <p>or press Enter</p>
        </button>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
//import phoneFilter from '../filters/phoneFilter';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

  
Vue.use(VueTelInput);

export default {
  name: 'apply',
  data() {
    return {
      
      currentQuestion: 0,
      radioInput: '', // Stores the user's input as a full string
      radioChoice: -1, // The calculated choice. See radioInput's watcher for more info
      
      boolInput: '',
      boolChoice: -1,
      
      phone: {
        number: '',
        isValid: false,
        country: undefined,
      },
      
      // All appQuestion objects should have:
      //    - type: one of: 'text', 'radio', 'phone', 'bool' 'number'
      //    - label (any string)
      //    - required (bool)
      //
      // If you change these questions, make sure they still work with 
      // the requirements here:
      // https://github.com/hacksu/kenthackenough/blob/master/app/users/application/model.js
      appQuestions: [
        {
          appField: 'name',
          
          type: 'text',
          label: 'Full Name: ',
          placeholder: 'John Doe',
          
          required: true
        },
        {
          appField: 'school',
          
          type: 'text',
          label: 'Your school\'s full name:',
          placeholder: 'Kent State University',
          
          required: true
        },
        {
          appField: 'phone',
          
          type: 'phone',
          label: 'Your phone number: ',
          placeholder: '555-555-5555',
          
          required: true
        },
        {
          appField: 'shirt',
          
          type: 'radio',
          label: 'Your shirt size: ',
          options: [
            // First value of each array is a label,
            // second value is the value
            ['Small', 'S'],
            ['Medium', 'M'],
            ['Large', 'L'],
            ['X-Large', 'XL'],
            ['XX-Large', 'XXL'],
            ['XXX-Large', 'XXXL']
          ]
        },
        {
          appField: 'first',
          
          type: 'bool',
          label: 'Is this your first hackathon?'
        },
        {
          appField: 'dietary',
          
          type: 'radio',
          label: 'Do you have any dietary restrictions?',
          
          options: [
            ['Vegitarian', 'vegitarian'],
            ['Vegan', 'vegan'],
            ['Kosher', 'kosher'],
            ['Gluten Free', 'gluten']
          ],
          // stringInputLabel is optional
          stringInputLabel: 'Allergies/Other Dietary Restrictions '
        },
        {
          appField: 'year',
          
          type: 'radio',
          label: 'Where are you in school?',
          
          options: [
            ['In high school', 'high school'],
            ['Freshman', 'freshman'],
            ['Sophomore', 'sophomore'],
            ['Junior', 'junior'],
            ['Senior', 'senior'],
            ['Grad Student', 'graduate'],
          ],
          // stringInputLabel is optional
          stringInputLabel: 'Other (describe here)'
        },
        {
          appField: 'age',
          
          type: 'number',
          placeholder: 'Age',
          label: 'How old are you?'
        },
        {
          appField: 'gender',
          
          type: 'radio',
          label: 'What\'s your gender?',
          
          options: [
            ['Male', 'male'],
            ['Female', 'female'],
            ['Prefer Not to Say', 'preferNotToSay']
          ],
          // stringInputLabel is optional
          stringInputLabel: 'Other'
        },
        {
          appField: 'major',
          
          type: 'text',
          label: 'What\'s your major?',
          placeholder: 'Computer Science',
          
          required: true
        },
        {
          appField: 'travel',
          type: 'bool',
          label: 'Will you need travel reimbursment?',
          
          required: true
        },
        {
          appField: 'resume',
          type: 'upload',
          label: 'Upload your resume:'
        }
      ]
    };
  },
  watch: {
    // This function takes the latest numeric input from the hidden input,
    // & selects the corresponding radio value. 
    radioInput(newVal, oldVal) {
      
      // The hidden input holds a string, so first we grab the last character
      // of that string: 
      var newChar = newVal[newVal.length - 1];
      
      // Next we grab the question from the question array: 
      var question = this.appQuestions[this.currentQuestion];
      
      // Checking if newChar is a number in the options:
      var number = Number(newChar);
      if (number && question.options[number - 1]) {
        this.$parent.user.application[question.appField] = question.options[number - 1][1];
      }
    },
    boolInput(newVal, oldVal) {
      // The hidden input holds a string, so first we grab the last character
      // of that string: 
      var newChar = newVal[newVal.length - 1];
      
      // Next we grab the question from the question array: 
      var question = this.appQuestions[this.currentQuestion];
      
      if (newChar === '1') {
        this.$parent.user.application[question.appField] = true;
      } else if (newChar === '2') {
        this.$parent.user.application[question.appField] = false;
      }
    }
  },
  methods: {
    valid(q) {
      var app = this.$parent.user.application;
      switch(q) {
        case 0:
          return (app.name.length > 2);
          break;
        case 1:
          return (app.school.length > 3);
          break;
        case 2:
          return (this.phone.isValid);
          break;
        case 3: 
          return (app.shirt)
        default:
          return true;
      }
    },
    
    next() {
      if (this.valid(this.currentQuestion)) {
        this.currentQuestion++;
        console.log("Called");
        this.focusElement();
      }
    },
    previous() {
      this.currentQuestion--;
      console.log("CurrentQuestion: ", this.currentQuestion);
      this.focusElement();
    },
    focusElement() {
      setTimeout(() => {
//        console.log("Called");
        var input =
          document.querySelector('.question input') ||
          document.querySelector(".question-cell.is-selected textarea") ||
          document.querySelector(".question-cell.is-selected select");
//        console.log("Input: ", input);
        if (input) {
          input.focus();
        }
      }, 200);
    },
    // For phone number handling
    onInput({ number, isValid, country }) {
      console.log(number, isValid, country);
      this.phone.number = number;
      this.phone.isValid = isValid;
      this.phone.country = country && country.name;
    },
  },
  
  mounted() {
    this.focusElement()
  }
//  filters: {
//    phone: function(phone) {
//      return phone.replace(/[^0-9]/g, '')
//                .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
//    }
//  }
};
  
</script>

<style scoped>
  #application {
    color: white;
    display: flex;
    flex-direction: column;
  }
  #appHeader {
    text-align: left;
    padding-left: 15%;
    margin-top: 0px;
    padding-top: 20px;
    left: 0px;
    min-height: 100px;
    width: 100%;
    padding-bottom: 20px;
    background: var(--orange);
    box-shadow: 0px 10px 10px black;
    z-index: 99;
  }
  #questionHolder {
    margin-left: 15%;
    margin-right: 15%;
    padding-top: 100px;
    margin-bottom: 200px;
    z-index: 50;
    font-size: 20px;

  }
  .question {
    margin-top: 30px;
  }
  input {
    font-size: 20px;
    padding: 5px;
    border: none;
    border-bottom: solid black 3px;
    width: 100%;
    outline: none;
  }
  input:focus {
    opacity: 1;
    border-bottom: solid gold 3px;
  }
  input[type=text] {
    opacity: .5;
  }
  input[type=text]:focus {
    opacity: 1;
  }
  .optHolder {
    display: flex;
    flex-flow: row wrap;
  }
  
  .nav-buttons {
    display: flex;
    justify-content: space-between;
  }
  
/*  Used to facilitate the option chosen in the radio questions*/
  .hidden {
    max-height: 2px;
    opacity: 0;
  }
  .hidden:focus {
    opacity: 0;
  }
  
  .opt {
    background: #eeeeee;
    padding: 5px 10px 5px 10px;
    border: solid gray 1px;
    width: 40%;
    color: black;
    min-width: 200px;
    margin-right: 3%;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 15px;
  }
  .selectable:hover {
    filter: brightness(90%);
  }
  .selectable:active {
    filter: brightness(80%);
  }
  .selected {
    filter: brightness(80%);
    border: solid 2px var(--orange);
  }
  .stringOpt {
    width: 42%;
    min-width: 200px;
  }

  
  .err {
    color: lightcoral;
    font-weight: bold;
  }
  .is-danger {
    border-bottom: solid 3px lightcoral;
  }
  
  .numInput {
    width: 100px;
    
  }
  
  .disabled {
    opacity: .5;
  }
  

</style>

<style>
.dropdown {
  z-index: 1001 !important;
  color: black;
}
</style>