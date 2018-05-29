<template>
  <div id="app">
     <div id="banner"
         v-bind:style="{ minHeight: mobileMenu + 'px' }">
      <div id="bannerL" class="bannerContainer">
<!--        <img id="bannerLogo" 
             src="./assets/blackLogo.png">-->
        <router-link to="/" class="routerLink">
        <p class="bannerText" id="kheTitle"
           @click="scrollTo('/', '#mainContainer')">KENT HACK ENOUGH</p>
        </router-link>
        
        <div id="hamburgMenu">
          <img id="hamburgIcon" src="../static/Hamburger_icon.svg.png"
               width="50"
             @click="togMenu()">
        </div>
      </div>
      
      
      
      <div id="bannerR" class="bannerContainer">
        
        <router-link to="/" class="routerLink">
          <p class="bannerText bannerLink"
            @click="scrollTo('/', '#info')">About</p>
        </router-link>
        
        <router-link to="/" class="routerLink">
          <p class="bannerText bannerLink"
            @click="scrollTo('/', '#faq')">FAQ</p>
        </router-link>
        <p class="bannerText bannerLink">Sponsors</p>
        <p class="bannerText bannerLink"
           @click="navTo('/contact')">Contact</p>
        <p class="bannerText bannerLink"
           @click="scrollTo('/', '#map')">Map</p>
        <p class="bannerText bannerLink" @click="dispRegister()"
           v-if="user._id == ''">
          Register/Login
        </p>
        <p class="bannerText bannerLink" @click='logout()'
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
    
    
    <router-view/>
    
  </div>
</template>

<script>
import scrollto from 'vue-scrollto';
import { ApiWrapper } from 'khe-frontend-lib';

import login from './components/Login';
import register from './components/Register';

export default {
  name: 'app',
  components: {
    login,
    register,
  },
  data() {
    return {
      showLogin: false,
      showRegister: false,
      
      scrollToEl: '',
      
      mobileMenu: 50,
      
      user: {
        _id: '',
        email: 'test@sample.com',
        password: '',
        key: '',
        role: '',
        application: {
          name: '',           // full name
          school: '',         // name of school
          phone: '',          // phone number
          shirt: '',          // t-shirt size
          demographic: false,   // allowed to use demographic info?
          first: null,         // is this your first hackathon?
          dietary: [],        // food restrictions seperated by |
                              // Vegan, vegitarian, kosher, gluten free, allergy, other
          year: '',           // the year in school
          age: '',            // person's age
          gender: '',         // gender
          major: '',          // degree
          conduct: false,       // agree to MLH code of conduct?
          travel: null,        // need travel reimbursement?
          waiver: false,        // agreed to waiver?
          resume: '',         // the filename of their resume
          link: '',            // a github/linkedin link
          extra: '',
        },
      },
    };
  },

  mounted() {

  },

  methods: {
    dispLogin: function() {
      // Normally we could do a one line function like this inside an @click attribute,
      // but this makes it easier to access from it's children
      this.mobileMenu = 50;
      this.showLogin = !this.showLogin;
    },
    dispRegister: function() {
      this.mobileMenu = 50;
      this.showRegister = !this.showRegister;
    },
    switchLoginRegister: function() {
      this.showRegister = !this.showRegister;
      this.showLogin = !this.showLogin;
    },
    
    logout: function() {
      alert('Not implemented');
    },

    togMenu: function() {
      if (this.mobileMenu === 50) {
        this.mobileMenu = 375;
      } else {
        this.mobileMenu = 50;
      }
    },
    
    scrollTo: function(page, el) {
      this.mobileMenu = 50;
      if (this.$route.path !== page) {
        this.$router.push(page);
        this.scrollToEl = el;
      } else {
        scrollto.scrollTo(el, 300);
      }
    },
    navTo: function(page) {
      this.mobileMenu = 50;
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
  
  #banner {
    display: flex;
    justify-content: space-between;
    color: white;
  }
  .routerLink {
    color: white;
    margin-right: 20px;
    margin-left: 20px;
  }
  .bannerContainer {
    display: flex;
  }
  
  .widget {
    padding: 100px 100px 100px 100px;
  }

  :root {
    --bg-black: #252830;
    --dark-grey: #595e6e;
    --grey: #7f838f;
    --light-grey: #a2a4ad;
    --white: #ffffff;

    --orange: #ff936b;
    --pink: #ff74b9;
    --green: #82fa6b;
    --yellow: #effc6a;
    --moon: #fcfede;
    --light-brown: #af6c56;
    --dark-brown: #663c2e;
    --blue: #66daff;
  }

  html, body {
    width: 100%;

    font-family: 'Merriweather', serif;
    font-size: 14px;
    font-weight: 300;

    background-color: var(--bg-black);
  }

  h1, h2, h3, h4 {
    font-family: 'Oswald', sans-serif;
  }

  @media screen and (min-width: 768px) {
    html, body {
      font-size: 16px;
    }
  }
  
</style>
