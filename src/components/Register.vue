<template>
  <div id="register-dialog">
    <span class="xOutWhite" @click="$parent.dispRegister()">x</span>
    
    <h4 style="font-size:30px;">Register</h4>
    
    <input id="login-username" 
           class="textInput"
           type="text" 
           placeholder="you@website.com"
           v-model="$parent.user.email"
           />
    <br>
      
    <input id="login-password" 
           class="textInput" 
           type="password" 
           placeholder="Your password here!!"
           />
    <br>
    <input id="login-password-confirm" 
           class="textInput" 
           type="password" 
           placeholder="Confirm your password here!"
           />
    <br>
    <br>
      
    <button id="register-button" class="buttonInput" >
      Register!
    </button>

    <button id="register-create-account" class="buttonInput"
            @click="$parent.switchLoginRegister()">
      Have an account? Log in!
    </button>
    <br>
    <br>
    <button id="forgot-pass-button" class="buttonInput">Forgot your password? No problem!</button>
  </div>
</template>

<style scoped>
  #register-dialog {
    position: fixed;
    background-color: black;
    border: white 5px solid;
    color: white;
    text-align: center;
    
    border-radius: 10px;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    right: auto 0;
    min-width: 300px;
    width: 50%;
    min-height: 200px;
    z-index: 1000;
    
    padding: 30px;
    padding-bottom: 100px;
  }
  
  .textInput {
    width: 200px;
    height: 30px;
    margin-bottom: 10px;
    
    outline: none;
    border: none;
    box-shadow: inset rgba(0,0,0,.5) 2px 2px 5px;
    
    border-bottom-left-radius: 10% 50%;
    border-bottom-right-radius: 10% 50%;
    border-top-left-radius: 10% 50%;
    border-top-right-radius: 10% 50%;
    padding-right: 10px;
    padding-left: 10px;
  }
  
  .buttonInput {
    transition-duration: .5s;
    height: 30px;
    
    padding-right: 10px;
    padding-left: 10px;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .buttonInput:hover {
    border: solid white 1px;
    background: black;
    color: white;
  }
  #register-button {
    width: 120px;
    
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
  }
  #register-create-account {
    width: 170px;
    border-top-right-radius: 10% 50%;
    border-bottom-right-radius: 10% 50%;
  }
  #forgot-pass-button {
    padding-right: 20px;
    padding-left: 20px;
    border-bottom-left-radius: 10% 50%;
    border-bottom-right-radius: 10% 50%;
    border-top-left-radius: 10% 50%;
    border-top-right-radius: 10% 50%;
  }
</style>

<script>
export default {
  name: 'Login',
  data() {
    return {
    };
  },
};
</script>