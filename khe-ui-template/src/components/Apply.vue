<template>
  <div id="application">
    <div id="appHeader">
    KHE Application    
    </div>

    <div id="questionHolder">
      <div class="question" v-for="(question, index) in appQuestions">
        <p>{{index + 1}}. 
          <span class="err"
                v-if="question.required">*</span>
          {{ question.label }}</p>
        <input type="text" v-if="question.type == 'text'"
             v-bind:placeholder="question.placeholder"
             v-model="$parent.user.application[question.appField]">
        
        <div v-if="question.type == 'phone'">
          <input name="phone" v-model="$parent.user.application[question.appField]" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
          <span class="err"
                v-show="errors.has('phone') || $parent.user.application[question.appField].length > 11">Must be a valid phone number! (No dashes, etc)</span>
        </div>
        
        <div class="optHolder" v-if="question.type == 'radio'">
          <div class="opt" 
               v-for="(option, optIndex) in question.options"
               v-bind:class="{
                                  selected: $parent.user.application[question.appField] == option,
                                  selectable: $parent.user.application[question.appField] != option
                                         }"
               @click="$parent.user.application[question.appField] = option">
            {{optIndex + 1}}. {{option}}
          </div>
          <input class="stringOpt" v-if="question.stringInputLabel != undefined"
                   type="text" v-bind:placeholder="question.stringInputLabel">
        </div>
        
        <div class="optHolder" v-if="question.type == 'bool'">
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
        
      </div>
    </div>
  </div>
</template>

<script>
// import VeeValidate from 'vee-validate';

export default {
  name: 'apply',
  data() {
    return {
      // appQuestion objects should have:
      //    - type ['text', 'radio', 'phone']
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
            'X-Small',
            'Small ',
            'Medium',
            'Large',
            'X-Large',
            'XX-Large',
            'XXX-Large'
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
            'Vegitarian',
            'Vegan',
            'Kosher',
            'Gluten Free'
          ],
          stringInputLabel: 'Allergies/Other Dietary Restrictions '
        },
        {
          appField: 'year',
          
          type: 'text',
          label: 'Where are you in school?'
        }
      ]
    };
  },
  computed: {
    phoneValidator () {
      var phoneno = /^[2-9]\d{2}-\d{3}-\d{4}$/;
      var valid = false;
      if (this.$parent.user.application.phone.match(phoneno)) {
        valid = true;
      } 
      return valid;
    }
  }
};
  
</script>

<style scoped>
  #application {
    color: black;
    display: flex;
    flex-direction: column;
  }
  #appHeader {
    text-align: center;
    margin-top: 0px;
    padding-top: 20px;
    left: 0px;
    min-height: 100px;
    width: 100%;
    padding-bottom: 20px;
    box-shadow: 0px 0px 20px black;
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
    
  }
  input {
    font-size: 20px;
    border: none;
    border-bottom: solid black 3px;
    width: 100%;
    outline: none;
  }
  input:focus {
    border-bottom: solid gold 3px;
  }
  .optHolder {
    display: flex;
    flex-flow: row wrap;
  }
  
  .opt {
    background: #eeeeee;
    padding: 5px 10px 5px 10px;
    border: solid gray 1px;
    width: 40%;
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
    filter: brightness(90%);
    border: lightgreen 1px solid;
  }
  .stringOpt {
    width: 50%;
  }

  
  .err {
    color: lightcoral;
    font-weight: bold;
  }
  .is-danger {
    border-bottom: solid 3px lightcoral;
  }

</style>