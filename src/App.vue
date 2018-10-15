<template>
  <div id="app">
     <div id="banner">
      <div id="bannerL" class="bannerContainer">
<!--        <img id="bannerLogo" 
             src="./assets/blackLogo.png">-->
        <p class="banner-link" id="kheTitle"
           @click="scrollTo('/', '#mainContainer')">KENT HACK ENOUGH</p>
        
        <div id="hamburgMenu">
          <img id="hamburgIcon" src="../static/Hamburger_icon.svg.png"
               width="50"
             @click="togMenu()">
        </div>
      </div>
      
      <div id="bannerR" class="bannerContainer"
           :class="{'hidden': expandMenu}">
        
        
        <p class="banner-link pink"
            @click="scrollTo('/', '#info')">
          About
        </p>
        
        <p class="banner-link green"
            @click="scrollTo('/', '#faq')">
          FAQ
        </p>
        
        <p class="banner-link blue"
           @click="scrollTo('/sponsor', 'body')">
          Sponsors
        </p>
        
        <p class="banner-link yellow"
           @click="navTo('/contact')">Contact</p>

        <p class="banner-link green"
           @click="navTo('/schedule')">Schedule</p>
        
        <p class="banner-link blue"
           @click="scrollTo('/', '#map')">Map</p>
        
        <p class="banner-link pink" @click="dispRegister()"
           v-if="user._id == ''">
          Register/Login
        </p>
        
        <p class="banner-link pink" @click='logout()'
           v-if="user._id != ''">
          Log out
        </p>
        
        <div class="padding" style="width: 50px"></div>
      </div>
      
    </div>
    
    <div class="darken" v-if="showLogin"
         @click="showLogin = !showLogin;"></div>
    <login v-if="showLogin"></login>
    
    <div class="darken" v-if="showRegister"
         @click="showRegister = !showRegister;"></div>
    <register v-if="showRegister"></register> 
    <div class="darken" v-if="showPasswordReset"
         @click="showPasswordReset = !showPasswordReset;"></div>
    <password-reset v-if="showPasswordReset"></password-reset>
    
    
    <router-view/>
    
  </div>
</template>

<script>
import Router from 'vue-router';
import scrollto from "vue-scrollto";
import { ApiWrapper } from "khe-frontend-lib";
import apiConfig from "./config/config";

import login from "./components/Login";
import register from "./components/Register";
import passwordReset from "./components/PasswordReset";
import rsvp from "./components/RSVP";

export default {
  name: "app",

  components: {
    login,
    register,
    passwordReset,
    rsvp
  },
  data() {
    return {
      showLogin: false,
      showRegister: false,
      showPasswordReset: false,
      
      hasApp: false,
      hasCheckedForApp: false,

      scrollToEl: "",

      expandMenu: false,

      user: this.userInitialState(),

      wrapper: new ApiWrapper(apiConfig),

      liveUpdates: {},
      events: [],

      messages: []
    };
  },

  mounted() {
    // Checking if a user is saved as logged in
    var user = this.wrapper.userManager.getLocalUser();
    if (user && user.key) {
      console.log("You've been logged in from a previous session!");
      this.user._id = user.key;
      this.user.email = user.email;
      this.user.role = user.role;
      
      // Checks if the user has an application
      this.wrapper.applicationManager.getApplication()
      .then((app) => {
        console.log("Hey you have an app: ", app);
        this.hasApp = app._onServer;
        this.hasCheckedForApp = true;
      }).catch((err) => {
        console.error("Problem getting your app!!");
        this.hasCheckedForApp = true;
      })
    }

    // LOADING IN SCHEDULE
    let vm = this;
        this.liveUpdates = this.wrapper.liveManager;
        this.liveUpdates.exisitingEvents().then((msgs) => {
            for (let i = 0; i < msgs.length; i++)
                vm.events.push(msgs[i])
        });
        this.liveUpdates.SubscribeToEvents({
            onCreate(event) {
                vm.events.unshift(event);
            },
            onUpdate: function(event) {
                var index = vm.events.findIndex(function(o){
                    return o._id === event._id;
                });
                vm.events.splice(index, 1);
                vm.events.push(event);
            },
            onDelete: function(event) {
                var index = vm.events.findIndex(function(o){
                    return o._id === event._id;
                });
                if (index !== -1) vm.events.splice(index, 1);
            }
        });

    // LOADING IN UPDATES
    this.liveUpdates.exisitingMessages().then((msgs) => {
      for (let i = 0; i < msgs.length; i++)
        vm.messages.push(msgs[i])
      });
      this.liveUpdates.SubscribeToMessages({
            onCreate(msg) {
                vm.messages.unshift(msg);
            },
            onUpdate: function(event) {
                var index = vm.messages.findIndex(function(o){
                    return o._id === event._id;
                });
                vm.messages[index].text = event.text;
            },
            onDelete: function(event) {
                var index = vm.messages.findIndex(function(o){
                    return o._id === event._id;
                });
                if (index !== -1) vm.messages.splice(index, 1);
            }
        });
  },

  methods: {
    dispLogin: function() {
      // Normally we could do a one line function like this inside an @click attribute,
      // but this makes it easier to access from it's children
      this.expandMenu = false;
      this.showLogin = !this.showLogin;
    },
    dispRegister: function() {
      this.expandMenu = false;
      this.showRegister = !this.showRegister;
    },
    dispPasswordReset: function() {
      this.expandMenu = false;
      this.showPasswordReset = false
    },
    switchLoginRegister: function() {
      this.showRegister = !this.showRegister;
      this.showLogin = !this.showLogin;
    },
    switchPasswordReset: function() {
      this.showLogin = false;
      this.showPasswordReset = !this.showPasswordReset;
    },

    userInitialState() {
      this.hasApp = false;
      return {
        _id: "",
        email: "",
        //        password: '',
        key: "",
        role: "",
        application: {
          name: "", // full name                                      !
          school: "", // name of school                               !
          phone: "", // phone number                                  !
          shirt: "", // t-shirt size                                  !
          demographic: null, // allowed to use demographic info?       ?
          first: null, // is this your first hackathon?               !
          dietary: [], // food restrictions seperated by |            !
          // Vegan, vegitarian, kosher, gluten free, allergy, other
          year: "", // the year in school                             !
          age: '', // person's age                                    !
          gender: "", // gender                                       !
          major: "", // degree                                        !
          conduct: null, // agree to MLH code of conduct?              ?
          travel: null, // need travel reimbursement?                 !
          waiver: false, // agreed to waiver?                           ?
          resume: "", // the filename of their resume                   ?
          link: "", // a github/linkedin link                           ?
          extra: ""
        }
      };
    },

    logout: function() {
      this.wrapper.userManager.logout();
      //        .then(() => {
      //        console.log("Logged out!");
      //      }).catch((err) => {
      //        console.error("Error logging out: ", err);
      //      })
      this.user = this.userInitialState();
      this.$router.push({ path: "/" });
    },

    togMenu: function() {
      this.expandMenu = !this.expandMenu;
    },

    scrollTo: function(page, el) {
      this.expandMenu = false;
      if (this.$route.path !== page) {
        this.$router.push(page);
        this.scrollToEl = el;
      } else {
        scrollto.scrollTo(el, 300);
      }
    },
    navTo: function(page) {
      this.expandMenu = false;
      this.$router.push(page);
    }
  }
};
</script>

<!-- Note! This style tag is GLOBAL. -->
<style>
/* Reset */
* {
  box-sizing: border-box;
}

#dialog {
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
  padding-bottom: 50px;
}

#dialog-title {
  font-size: 60px;
  color: white;
  padding: 0px;
  margin-top: 0px;
  margin-bottom: 10px;
}

#dialog-subtitle {
  font-size: 20px;
  color: var(--orange);
  margin-top: 0px;
  margin-bottom: 30px;
  font-style: italic;
  opacity: .7;
}

#dialog-button {
  width: 50%;
  padding: 10px 0px 10px 0px;
  min-width: 120px;
  background: var(--dark-orange);
  border: 1px solid var(--dark-orange);
  color: black;
}

#dialog-message {
  font-size: 15px;
  color: white;
}
#error-message{
    font-size:15px;
    color:red;
    }
.darken {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
}

#banner {
  /*    position: fixed;*/
  display: flex;
  justify-content: space-between;
  color: white;
  z-index: 98;
}

.bannerContainer {
  display: flex;
}

.widget {
  padding: 1rem;
}

@media screen and (min-width: 768px) {
  .widget {
    padding: 100px 100px 100px 100px;
  }
}

.info-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.x-out-white {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

.text-input {
  background: none;
  color: white;
  border: none;
  border-bottom: solid 2px gray;
  width: 80%;
  padding-top: 5px;
  max-width: 350px;
  margin: 10px 0px 10px 0px;
}

:root {
  --bg-black: #252830;
  --dark-grey: #595e6e;
  --grey: #7f838f;
  --light-grey: #a2a4ad;
  --white: #ffffff;

  --orange: #ff936b;
  --dark-orange: #ee835a;
  --pink: #ff74b9;
  --green: #88BD56;
  --dark-green: #004529;
  --darker-green: #003229;
  --blue: #64cdf6;
  --yellow: #effc6a;
  --moon: #fcfede;
  --light-brown: #af6c56;
  --dark-brown: #663c2e;
  --blue: #66daff;

  --breakpoint: 900px;
}

.pink-text {
  color: var(--pink);
}
.orange-text {
  color: var(--orange);
}
.blue-text {
  color: var(--blue);
}

html,
body {
  width: 100%;

  font-family: "Merriweather", serif;
  font-size: 14px;
  font-weight: 300;

  background-color: var(--bg-black);
}

h1,
h2,
h3,
h4 {
  font-family: "Oswald", sans-serif;
  line-height: 1em;
}

p {
  line-height: 1.5em;
}

@media screen and (min-width: 768px) {
  html,
  body {
    font-size: 16px;
  }
}
.spooky-button {
  display: inline-block;
  border: 2px solid var(--orange);
  color: var(--white);
  background-color: Transparent;
  padding: 1rem 1rem;
  z-index: 1;
  margin-top: 10px;
  background: var(--bg-black);
  font-size: 20px;

  transition: all 0.5s;
}
.spooky-button:not(.disabled):hover {
  cursor: pointer;
  position: relative;
  background-color: var(--orange);
  color: var(--bg-black);
  transition: 0.5s;
}
.spooky-button p {
  margin: 0px;
  opacity: 0.5;
  font-size: 10px;
}
</style>

<style scoped>
#hamburgMenu {
  display: none;
}

@media only screen and (min-width: 850px) {
  /*    NOTE for anyone trying to learn: this would be 1000% easier with sass!*/
  .pink {
    border-bottom: solid 3px var(--pink);
  }
  .green {
    border-bottom: solid 3px var(--green);
  }
  .blue {
    border-bottom: solid 3px var(--blue);
  }
  .yellow {
    border-bottom: solid 3px var(--yellow);
  }
  .pink:hover {
    border-bottom: solid 5px var(--pink);
    padding-bottom: 8px;
  }
  .green:hover {
    border-bottom: solid 5px var(--green);
    padding-bottom: 8px;
  }
  .blue:hover {
    border-bottom: solid 5px var(--blue);
    padding-bottom: 8px;
  }
  .yellow:hover {
    border-bottom: solid 5px var(--yellow);
    padding-bottom: 8px;
  }
}

/*  Mobile style:  */
@media only screen and (max-width: 850px) {
  #bannerL {
    display: flex;
    justify-content: space-between;
  }

  #bannerR {
    flex-direction: column;
  }
  #bannerR:not(.hidden) {
    display: none;
  }

  #banner {
    flex-direction: column;
  }
  #hamburgMenu {
    display: block;
    cursor: pointer;
  }
  #hamburgIcon {
    filter: invert(100%);
    width: 40px;
    height: 40px;
    padding: 5px;
  }
  #bannerLMobile {
    display: block;
  }
  .bannerLink {
    margin-bottom: 0px;
    padding-bottom: 10px;
    border: solid black 1px;
  }

  .pink {
    border-left: solid 3px var(--pink);
  }
  .green {
    border-left: solid 3px var(--green);
  }
  .blue {
    border-left: solid 3px var(--blue);
  }
  .yellow {
    border-left: solid 3px var(--yellow);
  }
  .pink:hover {
    border-left: solid 8px var(--pink);
    padding-left: 15px;
  }
  .green:hover {
    border-left: solid 8px var(--green);
    padding-left: 15px;
  }
  .blue:hover {
    border-left: solid 8px var(--blue);
    padding-left: 15px;
  }
  .yellow:hover {
    border-left: solid 8px var(--yellow);
    padding-left: 15px;
  }
}

.banner-link {
  color: white;
  padding: 15px 20px 10px 20px;
  margin: 0px;
  height: 100%;
  cursor: pointer;
  transition-duration: 0.2s;
}
.banner-link:hover {
  background: #555;
}
</style>
