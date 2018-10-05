<template>
<div>
  <h1 class="status-text bg-message" v-if="message != ''">{{ message }}</h1>
    <div v-if="!$parent.wrapper.userManager.getLocalUser()">
      <div id="contact" class="widget">
          <h2 id="contactTitle">Please login to RSVP</h2>
          <div class="formField">
            <span id="subjectTitle">Email:</span>
            <input type="text" 
                  placeholder="jdoe@example.com" 
                  name="subject"
                  v-model= "email"
                  class="contactTextField">
          </div>
          <div class="formField">
            <span id="subjectTitle">Password:</span>
            <input type="password" 
                  placeholder="Password" 
                  name="email"
                  v-model= "password"
                  class="contactTextField">
          </div>
          <button id="contactButton" class="apply-link" @click="login()">
            Login!
          </button>
      </div>
    </div>
          <div v-else>
        <h2 class="heading-text">Hi {{ $parent.user.application.name.split(' ')[0] || 'there' }}!</h2>
        <h3 class="status-text">Your RSVP status is</h3>
        <h1 class="status">{{ $parent.user.application.going ? 'going' : 'not going' || 'undetermined' }}</h1>
        <button id="contactButton" class="apply-link" @click="changeRSVP(!$parent.user.application.going)">
            Change
          </button>
        
        <!--<p class="change-text" @click="changeRSVP(!$parent.user.application.going)">Change</p>-->
      </div>
</div>
</template>

<script>
import Vue from 'vue';

export default ({

  name: 'rsvp',

  data() {
    return {
      rsvpInProgress: true,
      isVisible: false,
      message: '',
      email: '',
      password: '',
      error: '',
      application: '',
    };
  },

  // mounted: function() {
  //   setTimeout(() => {
  //     if (this.$root.isLoggedIn()) {
  //       this.checkRSVP();
  //     } else {
  //       console.log('not logged in. Log in to rsvp');
  //     }
  //   }, 500);
  // },

  methods: {
    changeRSVP(newValue) {
      this.application = this.$parent.wrapper.applicationManager.getApplication()
      if (this.application) {
        this.application.going = newValue;

        this.$parent.wrapper.applicationManager.saveApplication(this.application)
        .then(() => {
          this.message = 'Thanks for RSVPing to Kent Hack Enough!';
        })
        .catch((err) => {
          console.log(err);
          this.$parent.user.application.going = !newValue;
          this.message = 'There was an error updating your RSVP status. Please try again later.';
        });
      }
    },

    checkRSVP() {
      if (this.$route.query.going) {
        this.rsvpInProgress = true;

        if (this.$route.query.going === 'true') {
          this.changeRSVP(true);
          console.log('Going to KHE');
        } else {
          this.changeRSVP(false);
          console.log('Not Going to KHE');
        }
      } else {
        console.log('RSVP Not Given');
      }
    },
     login() {
    // Verify that both 
      this.err = '';
      this.$parent.wrapper.userManager.login(this.email, this.password)
      .then((data) => {
        
//        console.log('Data: ', data);
        this.$parent.user._id = data.key;
        this.$parent.user.email = data.email;
        this.$parent.user.role = data.role;
        this.$parent.showLogin = false;
        //this.application = this.$parent.wrapper.applicationManager.getApplication()
        //console.log(this.application)
      })
      .catch((err) => {
          this.error='Your email or password is incorrect';
          //console.log(err)
      });
    }
  }

});
</script>

<style>

  #contactTitle {
    color: var(--orange);
    font-size: 30px;
  }

  #subjectTitle {
    color: var(--orange);
    font-size: 18px;
  }

    .contactTextField {
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

  #contactButton {
    position: relative;
    text-align: center;
    display: inline-block;
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

.heading-text {
    color: var(--orange);
    font-size: 30px;
    text-align: center;
}

.status-text {
    color: var(--orange);
    font-size: 24px;
    text-align: center;
}

.change-text {
    color: var(--orange);
    font-size: 24px;
    text-align: center;
}

  </style>