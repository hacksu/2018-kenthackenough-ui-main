<template>
  <div id="dialog">
    <span class="x-out-white" @click="$parent.dispLogin">X</span>
    
    <h4 id="dialog-title">Log in</h4>
    <h6 id="dialog-subtitle">...if you dare!!!</h6>
    
    <input id="login-username" 
           class="text-input"
           type="text" 
           placeholder="you@website.com"
           v-model="email"
           />
    <br>
      
    <input id="login-password" 
           class="text-input" 
           type="password" 
           placeholder="Your password here!!"
           v-model="password"
           @keyup.enter="login()"
           />
    <br>
    <br>
      
    <button id="dialog-button" @click="login()">
      Log in!
    </button>
    <br>
    <br>

    <span id="login-create-account"
            @click="$parent.switchLoginRegister()">
      No Account? Register!
    </span>
    <br>
    <br>

    <div id="forgot-password-button"
            @click="$parent.switchPasswordReset()">
      Forgot your password?
    </div>
  </div>
</template>

<style scoped>
  #login-create-account {
    cursor: pointer;
    width: 150px;
    padding-right: 20px;
    padding-left: 20px;
    border-top-right-radius: 10% 50%;
    border-bottom-right-radius: 10% 50%;
  }

  #forgot-password-button {
    cursor: pointer;
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
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
    // Verify that both 
      console.log(this.email)
      console.log(this.password)
      this.$parent.wrapper.userManager.login(this.email, this.password)
      .then((data) => {
        
//        console.log('Data: ', data);
        this.$parent.user._id = data.key;
        this.$parent.user.email = data.email;
        this.$parent.user.role = data.role;
        this.$parent.showLogin = false;
      })
      .catch((err) => {
        // TODO: Sign up Failed.
        throw err;
      });
    }
  }
};
</script>
