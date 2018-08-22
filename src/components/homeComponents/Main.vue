<template>
  <main id="main-container">
    
    <img id="logo" alt="Kent Hack Enough" src="../../assets/Logo_Full_Dark.svg" />
    
    <article id="title-info">
      <h3 id="tagline">The <span class="yellow-text">(Halloween)</span> Party Hackathon.</h3>
      <h2 id="date">October 19-21st, 2018</h2>
      <h2 id="location">Kent State University Library</h2>
    
      <a id="mlh-trust-badge" href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=red" target="_blank">
        <img id="banner" src="../../assets/mlh-trust-badge-2019-red.svg" alt="Major League Hacking 2019 Hackathon Season">
      </a>

      <!-- This div is for once the application is launched, when the user is NOT logged in -->
      <div id="applicationSite" 
          v-if="!$parent.$parent.user._id">
        <button class="main-btn" id="apply"
                @click="$parent.$parent.dispRegister()">Register Now!</button>
        <br>
        <button class="main-btn" id="login"
                @click="$parent.$parent.dispLogin()">Login</button>
      </div>
     
      <div id="applicationSiteLoggedIn" 
          v-else-if="!$parent.$parent.user.application.name">
        <router-link 
                    class="mainBtn" id="apply"
                    tag="button"
                    :to="{name: 'Apply'}">
          Fill out your application!
        </router-link>
      </div>
      
      <a href="https://sponsor.khe.io/" target="_blank"
          class="orange-text"
          v-if="!$parent.$parent.user._id">
        Want to sponsor KHE?
      </a>
    </article>
    
    <div id="main-background">
      <hill></hill>
      <img id="trees" src="../../assets/Trees.svg">
      <img id="moon" src="../../assets/Moon.svg">
      <img id="cloud-1" src="../../assets/Cloud 1.svg">
      <img id="cloud-2" src="../../assets/Cloud 2.svg">
      <img id="cloud-3" src="../../assets/Cloud 3.svg">
    </div>

  </main>
</template>

<style scoped>
/* We're using a mobile first approach. All of the styles above the breakpoint are for mobile */
#main-container {
  position: relative;

  display: grid;
  grid-template-rows: 3em 1fr 2fr;
  grid-template-columns: 1fr minmax(min-content, 42em) 1fr;
  justify-content: center;
  align-items: start;

  width: 100%;
  min-height: 100vh;

  background-color: var(--dark-grey);
}

a {
  display: block;
  margin-top: 20px;
}

#logo {
  width: 75%;
  max-width: 22rem;
  margin: 0 auto;
  padding: 0 1rem;

  grid-column: 2 / span 1;
  grid-row: 2 / span 1;

  z-index: 1;
}

#title-info {
  grid-area: 3 / 2;

  text-align: center;
  z-index: 1;

  margin-top: 1rem;
}

#title-info h2,
#title-info h3 {
  font-family: "Merriweather", serif;
  font-weight: 300;
  color: var(--white);
}

#applicationSite,
#applicationSiteLoggedIn {
  grid-area: 3 / 2;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  max-width: 26rem;
  margin: 0 auto;
  z-index: 1;
}

#apply,
#login {
  width: 100%;
  position: relative;

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

#apply:hover,
#login:hover {
  cursor: pointer;
  position: relative;
  background-color: var(--orange);
  color: var(--bg-black);
  transition: 0.5s;
}

#divider {
  width: 5px;
  height: auto;
  display: inline-block;
}

#tagline {
  font-size: 1.777rem;
}

#date {
  font-size: 2.369rem;
}

#location {
  font-size: 1.777rem;
}

.yellow-text {
  color: var(--yellow);
}

.mainBtn {
}

#mlh-trust-badge {
  display: block; 
  max-width: 100px; 
  min-width: 60px; 
  position: absolute; 
  left: 5px;
  top: -20px; 
  width: 10%; 
  z-index: 10000;
}

#banner {
  width: 100%
}

/*  BREAKPOINT:*/

@media screen and (min-width: 768px) {
  #main-container {
  }

  #logo {
    width: 100%;
  }

  #title-info {
    margin-top: 0rem;
  }

  #mlh-trust-badge {
    left: 50px;
  }
}

/* * * * * * * * * * *
 * Background Images *
 * * * * * * * * * * */
#main-background {
  width: 100%;
  height: 100%;
  position: relative;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  overflow: hidden;

  z-index: 0;
}

#main-background * {
  position: absolute;
}

#hill-group {
  left: 0;
  bottom: 0;

  width: 40%;
}

#house {
  width: 55.6%;
  bottom: 97px;
}

#trees {
  bottom: -5%;
  left: 31.875%;
  width: 68%;
}

#moon {
  top: -6.75%;
  left: 80.3%;
  width: 22.1%;
}

#cloud-1 {
  top: 19.25%;
  left: -18%;
  width: 44.5%;

  animation: cloudFloat 20s linear infinite;
}

#cloud-2 {
  top: 44.25%;
  left: 76%;
  width: 38.3%;

  animation: cloudFloat 17s linear infinite;
  animation-direction: reverse;
}

#cloud-3 {
  top: 6.875%;
  left: 72.7%;
  width: 15.4%;

  animation: cloudFloat 15s linear infinite;
  animation-delay: 5s;
}

@keyframes cloudFloat {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-15%);
  }
}
</style>



<script>
// import {TweenMax, Power0, Power1, Back, TimelineLite} from "gsap";
// import { TweenMax, TimelineLite } from 'gsap';

import Hill from "./Hill";

export default {
  name: "Main",
  components: { Hill },
  data() {
    return {};
  },
  mounted() {
    //    const houseEl = document.querySelector('#House');
    //    console.log(houseEl);
  }
};
</script>