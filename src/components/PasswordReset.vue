<template>
  <div id="dialog">
    <span class="x-out-white" @click="$parent.dispPasswordReset()">X</span>

    <h4 id="dialog-title">Password Reset</h4>
    <h6 id="dialog-subtitle">Bring your account back from the dead!</h6>
    <h6 id="dialog-message">Enter your email and we will send you a temporary password.</h6>

    <input id="login-username" 
            class="text-input"
            type="text" 
            placeholder="you@website.com"
            v-model="email"
            />

    <button id="dialog-button" @click="sendPasswordResetEmail()">Send</button>  
  </div>
</template>

<style scoped>
 #dialog-button {
   margin-top: 20px;
 }
</style>

<script>
  export default {
    name: 'Password-Reset',
    data() {
      return {
        email: ""
      }
    },
    methods: {

    },
}
</script>
