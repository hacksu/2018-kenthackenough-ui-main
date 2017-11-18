<template>
  <div id="app">
    <div id="banner">
      <div id="bannerR" class="bannerContainer">
        <img id="bannerLogo" 
             src="./assets/blackLogo.png"><router-link to="/">
        <p class="bannerText" id="kheTitle">KENT HACK ENOUGH</p></router-link>
      </div>
      <div id="bannerL" class="bannerContainer">
        
        <p class="bannerText bannerLink"
           v-scroll-to="'#info'">About</p>
        <p class="bannerText bannerLink">FAQ</p>
        <p class="bannerText bannerLink">Sponsors</p>
        <p class="bannerText bannerLink">Contact</p>
        <p class="bannerText bannerLink">Map</p>
        <div class="padding" style="width: 50px"></div>
      </div>
    </div>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
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
    height: 60px;
    background: black;
    padding: 0;
    overflow: hidden;
    transform: translateZ(100px);
  }
  
  .bannerContainer {
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
  
  #kheTitle {
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
  }
  
  #bannerLogo {
    filter: invert(100%);
    height: 40px;
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 30px;
  }
</style>
