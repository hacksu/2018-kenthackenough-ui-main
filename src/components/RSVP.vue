<template>
  <div>
    <h1 class="message-text bg-message" v-if="message != ''">{{ message }}</h1>
    <div v-if="!$parent.wrapper.userManager.getLocalUser()">
      <div id="contact" class="widget">
          <h2 id="rsvpTitle">Please login to RSVP</h2>
          <div class="formField">
            <span id="subjectTitle">Email:</span>
            <input type="text" 
                  placeholder="jdoe@example.com" 
                  name="subject"
                  v-model= "email"
                  class="rsvpTextField">
          </div>
          <div class="formField">
            <span id="subjectTitle">Password:</span>
            <input type="password" 
                  placeholder="Password" 
                  name="email"
                  v-model= "password"
                  class="rsvpTextField">
          </div>
          <button @click="login()">
            Login!
          </button>
      </div>
    </div>
    <div v-else class="logged-in">
      <h2 class="heading-text">Hi {{ application.name.split(' ')[0] || 'there' }}!</h2>
      <h3 class="status-text">Your RSVP status is</h3>
      <h1 class="status">{{ application.going ? 'Going' : 'Not Going' || 'undetermined' }}</h1>
      <button @click="changeRSVP(!application.going)">
        Change Status
      </button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default ({
    name: 'rsvp',
    data() {
      return {
        message: '',
        email: '',
        password: '',
        application: '',
      };
    },
    mounted: function() {
      setTimeout(() => {
        if (this.$parent.wrapper.userManager.getLocalUser()){
          this.$parent.wrapper.applicationManager.getApplication()
          .then((response) => {
            this.application = response;
            this.checkRSVP();
          });        
        }
        else {
          console.log('not logged in. Log in to rsvp');
        }
      }, 500);
    },
    methods: {
      changeRSVP(newValue) {
        if (this.application) {
          this.application.going = newValue;
          this.$parent.wrapper.applicationManager.saveApplication(this.application)
          .then(() => {
            this.message = 'Thanks for RSVPing to Kent Hack Enough!';
          })
          .catch((err) => {
            console.log(err);
            this.application.going = !newValue;
            this.message = 'There was an error updating your RSVP status. Please try again later.';
          });
        }
      },
      checkRSVP() {
        if (this.$route.query.going) {
          if (this.$route.query.going === 'true') {
            this.changeRSVP(true);
            console.log('Going to KHE');
          } else {
            this.changeRSVP(false);
            console.log('Not Going to KHE');
          }
        }
      },
      login() {
        console.log('logged in');
        this.err = '';
        this.$parent.wrapper.userManager.login(this.email, this.password)
        .then((data) => {
          this.$parent.user._id = data.key;
          this.$parent.user.email = data.email;
          this.$parent.user.role = data.role;
          this.$parent.showLogin = false;

          window.location.reload();

        })
        .catch((err) => {
            this.message='Your email or password is incorrect';
        });
      }
    }
  });
</script>

<style>
  #rsvpTitle {
    color: var(--orange);
    font-size: 30px;
  }

  #subjectTitle {
    color: var(--orange);
    font-size: 18px;
  }

  .rsvpTextField {
    display: block;
    color: white;
    background: none;
    border: none;
    outline: none;
    font-size: 20px;
    width: 100%;
    border-bottom: 2px solid white;
    margin-bottom:15px;
    padding-top: 5px;
  }

  button {
    position: relative;
    /* text-align: center;
    display: inline-block; */
    position: relative;
    border: 2px solid var(--orange);
    color: var(--white);
    background-color: Transparent;
    width: 200px;
    height: 50px;
    font-size: 20px;
    margin-top: 20px;
    transition: all 0.5s;
  }

  .status {
    color: var(--orange);
    font-size: 24px;
    text-align: center;
  }

  .logged-in {
    text-align: center;
  }

  .heading-text {
    color: var(--orange);
    font-size: 30px;
    text-align: center;
  }

  .status-text {
    color: var(--orange);
	  font-size: 2rem;
    text-align: center;
  }

  .message-text {
    color: black;
	  font-size: 2rem;
    text-align: center;
  }

  .bg-message {
    padding: 4rem 20px;
    background-color: var(--orange);
    background-image: radial-gradient(var(--dark-orange) 15%, transparent 16%),
    radial-gradient(var(--dark-orange) 15%, transparent 16%);
    background-size: 60px 60px;
    background-position: 0 0, 30px 30px;
    margin-bottom: 25px;
  }
</style>