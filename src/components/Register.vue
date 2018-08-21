<template>
  <div id="register-dialog" class="-vines">
    <span class="x-out-white" @click="$parent.dispRegister()">X</span>
    
    <h4 id="register-title">Register</h4>
    <h6 id="register-subtitle">We've been waiting for you!</h6>
    
    <input id="login-username" 
           class="text-input"
           type="text" 
           placeholder="Email"
           v-model="email"
           />
    <br>

    <input id="login-password" 
           class="text-input" 
           type="password" 
           placeholder="Password"
           v-model="password"
           />
    <br>
    <input id="login-password-confirm" 
           class="text-input" 
           type="password" 
           placeholder="Confirm password"
           v-model="passwordConfirm"
           />
    <br>
    <br>
      
    <button id="register-button" @click="register()">
      Register!
    </button>
    <br>
    <br>

    <span id="register-create-account" class="buttonInput"
            @click="$parent.switchLoginRegister()">
      Have an account? Log in!
    </span>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      password: '',
      passwordConfirm: '',
      email: ''
    };
  },
  methods: {
    register() {
      // Verify that both passwords match
      if (this.password === this.passwordConfirm) {
        console.log(this.email)
        console.log(this.password)
        this.$parent.wrapper.userManager.createUser(this.email, this.password)
          .then((data) => {
//            console.log(data);
            this.$parent.user._id = data.key;
            this.$parent.user.email = data.email;
            this.$parent.user.role = data.role;
            this.$parent.showRegister = false;
          })
          .catch((err) => {
            // TODO: Sign up Failed.
            throw err;
          });
      } else {
        // TODO: Passwords don't match.
        alert("Passwords don't match!")
      }
    }
  }
};
</script>

<style scoped>
  #register-dialog {
    position: fixed;
    background-color: var(--bg-black);
    border: var(--dark-orange) 5px solid;
    color: white;
    text-align: center;
    
    border-radius: 10px;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    right: auto 0;
    min-width: 300px;
    width: 40%;
    min-height: 200px;
    z-index: 1000;
    
    padding: 30px;
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
    color: white;
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
    background: var(--dark-orange);
    border: 1px solid var(--dark-orange);
    color: black;
  }
</style>

