<template>
  <div id="app">
    <div id="banner"
         v-bind:style="{ minHeight: mobileMenu + 'px' }">
      <div id="bannerL" class="bannerContainer">
        <img id="bannerLogo" 
             src="./assets/blackLogo.png"><router-link to="/" class="routerLink">
        <p class="bannerText" id="kheTitle"
           v-scroll-to="'#mainContainer'">KENT HACK ENOUGH</p>
        </router-link>
        
        <div id="hamburgMenu">
          <img id="hamburgIcon" src="../static/Hamburger_icon.svg.png"
             @click="togMenu()">
        </div>
      </div>
      
      
      
      <div id="bannerR" class="bannerContainer">
        
        <router-link to="/" class="routerLink">
          <p class="bannerText bannerLink"
            v-scroll-to="'#info'">About</p>
        </router-link>
        
        <router-link to="/" class="routerLink">
          <p class="bannerText bannerLink"
            v-scroll-to="'#faq'">FAQ</p>
        </router-link>
        <p class="bannerText bannerLink">Sponsors</p>
        <p class="bannerText bannerLink">Contact</p>
        <p class="bannerText bannerLink"
           v-scroll-to="'#map'">Map</p>
        <p class="bannerText bannerLink" @click="dispLogin()">Login</p>
        <div class="padding" style="width: 50px"></div>
      </div>
      
    </div>
    <div class="darken" v-if="showLogin"
         @click="showLogin = !showLogin;"></div>
    <login v-if="showLogin"></login>
    
    <router-view/>
  </div>
</template>

<script>
import login from './components/Login';

export default {
  name: 'app',
  components: {
    login,
  },
  data() {
    return {
      showLogin: false,
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
  methods: {
    dispLogin: function() {
      // Normally we could do a one line function like this inside an @click attribute,
      // but this makes it easier to access from it's children
      this.showLogin = !this.showLogin;
    },

    togMenu: function() {
      if (this.mobileMenu === 50) {
        this.mobileMenu = 375;
      } else {
        this.mobileMenu = 50;
      }
    }
  }
};
</script>

<!-- Note! This style tag is GLOBAL. -->
<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
    color: #2c3e50;
    margin-top: 60px;
  }
  
  #banner {
    position: fixed;
    /* Display: flex; will make items align in a row by default. */
    display: flex;
    /* Space-between forces the divs to the very edge of the banner */
    /* This lets us have left/right aligned content */
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    max-height: 60px;
    background: black;
    padding: 0;

    /* Setting transition duration for mobile menu change*/
    transition-duration: .5s;
    
    z-index: 1000;
    overflow: hidden;
    transform: translateZ(100px);
  }
  
  #bannerR {
    display:flex;
  }
  #bannerL {
    display: flex;
  }
  
  .bannerText {
    color: white;
    padding-right: 20px;
    padding-left: 20px;
  }
  .bannerLink {
    height: 100%;
    margin-top: 0px;
    padding-top: 15px;
    cursor: pointer;
  }
  .bannerLink:hover {
    background: white;
    color: black;
  }
  
  .routerLink {
    text-decoration: none;
  }
  
  
  #kheTitle {
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
    text-decoration: none;
  }
  #kheTitle:visited {
    text-decoration: none;
  }
  
  #bannerLogo {
    filter: invert(100%);
    height: 40px;
    width: 70px;
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 30px;
  }
  
  .darken {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: .7;
    z-index: 990;
    cursor: pointer;
  }
  
  .xOutWhite {
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
  
/*  RESPONSIVE CSS  */
  
  #hamburgMenu {
    display: none; 
  }
  
  @media only screen and (max-width: 950px) {
    #kheTitle {
      display: none;
    }
  }
  
  @media only screen and (max-width: 800px) {
    #bannerL {
      display: block;
    }
    
    #bannerR {
      flex-direction: column;
    }
    
    #banner {
      flex-direction: column;
    }

    #hamburgMenu {
      display: block; 
      cursor: pointer;
      float: right;
    }
    #hamburgIcon {
      filter: invert(100%);
      width: 40px;
      height: 40px;
      padding: 10px;
    }
    #bannerLMobile {
      display: block;
    }
    .bannerLink {
      margin-bottom: 0px;
      padding-bottom: 10px;
      border: solid black 1px;
    }
  }
  
  
  
</style>
