<template>
  <div id="dialog" class="vines">
    <span class="x-out-white" @click="$parent.dispRegister()">X</span>
    
    <h4 id="dialog-title">Register</h4>
    <h6 id="dialog-subtitle">We've been waiting for you!</h6>
    
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
           @keyup.enter="register()"
           />
    <br>
    <br>
      
    <button id="dialog-button" @click="register()">
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
  .vines {
    box-sizing: border-box;
    border: 30px solid rgba(0,0,0,0.5);
    border-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/795933/vine-border-image.svg);
    border-image-repeat: round;
    border-image-slice: 97;
    border-image-width: 1;
    border-image-outset: .4;
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

  #dialog {
    padding-bottom: 25px;
  }
</style>

