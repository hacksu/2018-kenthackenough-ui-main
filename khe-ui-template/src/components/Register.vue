<template>
    <div id="login">
    <div id="darken"></div>
<div class="popup">
    
    <h3>Log In:</h3>
    
    <q-field
        icon="person"
        helper="Username"
        :error="usernameErr"
        error-label="Invalid username! Sorry!"
      >
      <q-input v-model="$parent.user.username" />
    </q-field>
    <q-field
        icon="security"
        helper="Password"
        :error="passErr"
        error-label="Invalid password! Sorry!"
      >
      <q-input v-model="$parent.user.password" />
    </q-field>
    
    <br>
    
    <br>
    <a href="./#dashboard">
    <button class="mdl-button mdl-js-button mdl-button--raised" >
  SUBMIT
</button>
    </a>
    
    </div>

    </div>

</template>




<script>

</script>

<style>
.popup {
  width: 50%;
  min-width: 500px;
  min-height: 400px;
  background-color: white;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 100px;
  margin: 0 auto;
  z-index: 200;
  box-shadow: 0px 20px 50px black;
  padding: 20px;
  padding-left: 50px;
}
</style>
