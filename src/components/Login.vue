<template>
  <div id="login-dialog">
    <span class="x-out-white" @click="$parent.dispLogin">x</span>
    
    <h4 id="login-title">Log in</h4>
    <h6 id="login-subtitle">...if you dare!!!</h6>
    
    <input id="login-username" 
           class="text-input"
           type="text" 
           placeholder="you@website.com"
           v-model="$parent.user.email"
           />
    <br>
      
    <input id="login-password" 
           class="text-input" 
           type="password" 
           placeholder="Your password here!!"
           />
    <br>
    <br>
      
    <button id="login-button" >
      Log in!
    </button>

    <span id="login-create-account"
            @click="$parent.switchLoginRegister()">
      No Account? Register!
    </span>
    <br>
    <br>
    <div id="forgot-pass-button">Forgot your password? No problem!</div>
  </div>
</template>

<style scoped>
  #login-dialog {
    position: fixed;
    background-color: black;
    border: white 5px solid;
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
    
    padding: 30px;
    padding-bottom: 100px;
  }
  
  #login-title {
    font-size: 60px;
    color: var(--orange);
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
    background: var(--orange);
    border: 1px solid var(--orange);
    color: black;
  }
  
  #login-create-account {
    width: 150px;
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