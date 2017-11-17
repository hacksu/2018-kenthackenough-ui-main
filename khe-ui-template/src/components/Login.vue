<template>
  <div id="login-dialog">
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
  #login-dialog {
    position: absolute;
    background-color: #ffffff;
    border: #cccccc 5px solid;
    border-radius: 10px;
    min-width: 200px;
    padding: 10px;
    width: 15%;
    top: 115%;
    right: 10px;
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