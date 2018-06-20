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
        
        <p class="banner-link blue">
          Sponsors
        </p>
        
        <p class="banner-link yellow"
           @click="navTo('/contact')">Contact</p>
        
        <p class="banner-link pink"
           @click="scrollTo('/', '#map')">Map</p>
        
        <p class="banner-link green" @click="dispRegister()"
           v-if="user._id == ''">
          Register/Login
        </p>
        
        <p class="banner-link blue" @click='logout()'
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
// import apiConfig from './config/config';


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
      
      expandMenu: false,
      
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
      
      // wrapper: new ApiWrapper(apiConfig)
    };
  },

  mounted() {

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
    switchLoginRegister: function() {
      this.showRegister = !this.showRegister;
      this.showLogin = !this.showLogin;
    },
    
    logout: function() {
      alert('Not implemented');
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
  
  #banner {
    display: flex;
    justify-content: space-between;
    color: white;
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
    --blue: #64CDF6;
    --yellow: #effc6a;
    --moon: #fcfede;
    --light-brown: #af6c56;
    --dark-brown: #663c2e;
    --blue: #66daff;
    
    --breakpoint: 900px;
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
      justify-content: space-between
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
    transition-duration: .2s;
  }
  .banner-link:hover {
    background: #555;
  }
</style>
