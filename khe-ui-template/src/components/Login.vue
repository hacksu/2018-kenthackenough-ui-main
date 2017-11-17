<template>
  <div id="login">
    <label for="login-username">Username</label>
    <input id="login-username" type="text" />

    <label for="login-password">Password</label>
    <input id="login-password" type="password" />

    <input id="login-button" type="button" value="Login"/>

    <input id="login-create-account" type="button" value="Create an Account" />

    <a href="#">Forgot Password</a>
  </div>
</template>

<style scoped>
 
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