<template>
  <div id="register-dialog" class="vines">
    <span class="x-out-white" @click="$parent.dispRegister()">x</span>
    
    <h4 id="register-title">Register</h4>
    <h6 id="register-subtitle">We've been waiting for you!</h6>
    
    <input id="login-username" 
           class="text-input"
           type="text" 
           placeholder="Email"
           v-model="$parent.user.email"
           />
    <br>
      <br>
    <input id="login-password" 
           class="text-input" 
           type="password" 
           placeholder="Password"
           />
    <br>
    <input id="login-password-confirm" 
           class="text-input" 
           type="password" 
           placeholder="Confirm password"
           />
    <br>
    <br>
      
    <button id="register-button" >
      Register!
    </button>

    <span id="register-create-account" class="buttonInput"
            @click="$parent.switchLoginRegister()">
      Have an account? Log in!
    </span>
    <br>
    <br>
    <div style="opacity: .6;text-decoration: underline;cursor: pointer;">Forgot your password? Click here!</div>
  </div>
</template>

<style scoped>
  #register-dialog {
    position: fixed;
    background-color: #111;
/*    border: white 5px solid;*/
    color: var(--orange);
    text-align: left;
    
    border-radius: 10px;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    right: auto 0;
    min-width: 300px;
    width: 50%;
    min-height: 200px;
    z-index: 1000;
    
    padding: 0px;
    padding-bottom: 40px;
  }
  
  .vines {
    box-sizing: border-box;
    border: 30px solid rgba(0,0,0,0.5);
    border-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/795933/vine-border-image.svg);
    border-image-repeat: round;
    border-image-slice: 97;
    border-image-width: 1;
    border-image-outset: .4;
  }
  
  #register-title {
    font-size: 60px;
    color: var(--orange);
    padding: 0px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  #register-subtitle {
    font-size: 20px;
    color: var(--orange);
    margin-top: 0px;
    margin-bottom: 30px;
    font-style: italic;
    opacity: .7;
  }
  
  
  
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    opacity: .8; 
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    opacity: .8
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
  #register-button {
    width: 50%;
    padding: 10px 0px 10px 0px;
    min-width: 120px;
    background: var(--orange);
    border: 1px solid var(--orange);
    color: black;
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