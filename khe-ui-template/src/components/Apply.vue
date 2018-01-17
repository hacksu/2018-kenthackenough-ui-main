<template>
  <div id="application">
    <div id="appHeader">
    KHE Application    
    </div>

    <div id="questionHolder">
      <div class="question" v-for="(question, index) in appQuestions">
        <p>{{index + 1}}. {{ question.label }}</p>
        <input type="text" v-if="question.type == 'text'"
             v-bind:placeholder="question.placeholder">
    
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'apply',
  data() {
    return {
      // appQuestion objects should have:
      //    - type ['text', 'multiple', 'phone']
      appQuestions: [
        {
          type: 'text',
          label: 'Full Name: ',
          placeholder: 'John Doe',
          
          required: true
        },
        {
          type: 'text',
          label: 'Your school\'s full name:',
          placeholder: 'Kent State University',
          
          required: true
        },
        {
          type: 'text',
          label: 'Your phone number: ',
          placeholder: '555-555-5555',
          
          required: true
        },
        {
          type: 'multiple',
          label: 'Your shirt size: ',
          options: [
            '8  '
          ]
        }
      ]
    };
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
  


</style>