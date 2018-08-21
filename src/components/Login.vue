<template>
  <div id="login-dialog">
    <span class="x-out-white" @click="$parent.dispLogin">X</span>
    
    <h4 id="login-title">Log in</h4>
    <h6 id="login-subtitle">...if you dare!!!</h6>
    
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
           />
    <br>
    <br>
      
    <button id="login-button" @click="login()">
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
<!--    TODO: Let them recover their pass!-->
    <div id="forgot-pass-button" v-if="false">
      Forgot your password? Click here!
    </div>
  </div>
</template>

<style scoped>
  #login-dialog {
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
    padding-bottom: 86px;
  }
  
  #login-title {
    font-size: 60px;
    color: white;
    padding: 0px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  #login-subtitle {
    font-size: 20px;
    color: var(--orange);
    margin-top: 0px;
    margin-bottom: 30px;
    font-style: italic;
    opacity: .7;
  }
  
  #login-button {
    width: 50%;
    padding: 10px 0px 10px 0px;
    min-width: 120px;
    background: var(--dark-orange);
    border: 1px solid var(--dark-orange);
    color: black;
  }
  
  #login-create-account {
    cursor: pointer;
    width: 150px;
    padding-right: 20px;
    padding-left: 20px;
    border-top-right-radius: 10% 50%;
    border-bottom-right-radius: 10% 50%;
  }
  #forgot-pass-button {
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
