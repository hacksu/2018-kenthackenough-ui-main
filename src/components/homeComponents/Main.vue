<template>
  <main id="main-container">
    
    <img id="logo" alt="Kent Hack Enough" src="../../assets/Logo_Full_Dark.svg" />
    
    <article id="title-info">
      <h3 id="tagline">The <span class="yellow-text">(Halloween)</span> Party Hackathon.</h3>
      <br>
      <h2 id="date">October ?th - ?th, 2018</h2>
      <h2 id="location">Kent State University Library</h2>
    </article>

    <div id="main-background">
      <img id="hill-group" src="../../assets/Hill.svg">
      <img id="trees" src="../../assets/Trees.svg">
      <img id="moon" src="../../assets/Moon.svg">
      <img id="cloud-1" src="../../assets/Cloud 1.svg">
      <img id="cloud-2" src="../../assets/Cloud 2.svg">
      <img id="cloud-3" src="../../assets/Cloud 3.svg">
    </div>
    
    <!-- This div is for once the application is launched, when the user is NOT logged in -->
    <div id="applicationSite" v-if="0">
      <button class="mainBtn" id="apply"
              @click="$parent.$parent.dispRegister()">APPLY NOW!</button>
      <br>
      <button class="mainBtn" id="login"
              @click="$parent.$parent.dispLogin()">Login</button>
    </div>
    
    <div id="applicationSiteLoggedIn" v-if="0">
      <button class="mainBtn" id="apply"
              @click="$parent.$parent.dispRegister()">Fill out your application!</button>
    </div>
  
  </main>
</template>

<style>

#main-container {
  position: relative;

  display: grid;
  grid-template-rows: 3em 1fr 2fr;
  grid-template-columns: 1fr minmax(min-content, 42em) 1fr;

  width: 100%;
  min-height: 100vh;

  background-color: var(--dark-grey);
}

#logo {
  width: 100%;
  max-width: 22em;
  margin: 0 auto;

  grid-column: 2 / span 1;
  grid-row: 2 / span 1;

  z-index: 1;
}

#title-info {
  grid-area: 3 / 2;

  text-align: center;
  z-index: 1;
}

#title-info h2, #title-info h3 {
  font-family: 'Merriweather', serif;
  font-weight: 300;
  color: var(--white);
}

#tagline {
  font-size: 1.777em;
}

#date {
  font-size: 2.369em;
}

#location {
  font-size: 1.777em;
}

.yellow-text {
  color: var(--yellow);
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
}

#cloud-2 {
  top: 44.25%;
  left: 76%;
  width: 38.3%;
}

#cloud-3 {
  top: 6.875%;
  left: 72.7%;
  width: 15.4%;
}

</style>



<script>
export default {
  name: 'Main',
  data() {
    return {
    };
  },
};
</script>