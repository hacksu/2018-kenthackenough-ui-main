<template>
  <div id="dialog">
    <span class="x-out-white" @click="$parent.dispPasswordReset()">X</span>

    <h4 id="dialog-title">Password Reset</h4>
    <h6 id="dialog-subtitle">Bring your account back from the dead!</h6>

    <!-- If the user wants to enter their email to get their password reset -->
    <div id="sendResetEmail" v-if=!canReset>
      <h6 id="dialog-message">Enter your email and we will send you a temporary password.</h6>

      <br>
      <i>{{ msg }}</i>
      <br>

      <input id="login-username" 
              class="text-input"
              type="text" 
              placeholder="Email"
              v-model="email"
              />
      <br>

      <button id="dialog-button" @click="sendPasswordResetEmail()">Send</button> 
      <br><br>

      <div @click="swapPrompt()">
        I'm ready to change my password!
      </div>
    </div>

    <!-- If the user has the temp. email, and now wants to change their password -->
    <div id="resetPassword" v-if=canReset>
      <br>
        <i>{{ msg }}</i>
      <br>
      
      <input id="login-username" 
              class="text-input"
              type="text" 
              placeholder="Email"
              v-model="email"
              />
      <br>

      <input id="login-password"
            v-if=canReset 
            class="text-input" 
            type="password" 
            placeholder="Password we sent you"
            v-model="password"
            />
      <br>
      <br>

      <input id="login-newPassword" 
              v-if=canReset 
              class="text-input" 
              type="password" 
              placeholder="New password"
              v-model="newPassword"
              @keyup.enter="changeUserPassword()"
              />
      <br>

      <input id="login-newPassword-confirm" 
              v-if=canReset 
              class="text-input" 
              type="password" 
              placeholder="Confirm new password"
              v-model="newPasswordConfirm"
              @keyup.enter="changeUserPassword()"
              />
      <br>

      <button id="dialog-button" @click="changeUserPassword()" v-if=canReset>
        Reset
      </button>
      <br><br>

      <div @click="swapPrompt()">
        Go back!
      </div>
    </div>
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
        email: "",
        password: "",
        newPassword: "",
        newPasswordConfirm: "",
        msg: "",
        canReset: false
      }
    },
    methods: {
      sendPasswordResetEmail() {
        this.$parent.wrapper.userManager.resetUserPassword(this.email)
          .then(() => {
            this.msg = "A new password was send to your email!"
          })
          .catch((err) => {
            this.msg = "Sorry, that's an invalid email!";
            throw err;
          });
      },

      changeUserPassword() {
        this.msg = '';

        if(this.newPassword !== this.newPasswordConfirm) {
          this.msg = "Your new password doesn't match"
        }

        else {
          this.$parent.wrapper.userManager.changeUserPassword(this.email, this.password, this.newPassword)
          .then(() => {
            this.msg = "Password successfully changed!";
          })
          .catch((err) => {
            this.msg = "Your email or password is incorrect, please try again";
            throw err;
          });
        }
      },

      swapPrompt() {
        this.canReset = !this.canReset;
      }
    },
}
</script>
