<template>
  <div id="mainContainer">
    <img id="logo"
         src="../../assets/blackLogo.png">
    <h1 id="title">Kent Hack Enough</h1>
    
    <div id="titleInfo">
      <h2 id="date">October ?th - ?th</h2>
      <h2 id="location">Kent State Library</h2>
    </div>
    
    <!-- This div is for before the application is done, just to promote your site. The focus is making sure sponsors know where to go. -->
    <div id="staticSite">
      
    </div>
    
    <!-- This div is for once the application is launched-->
    <div id="applicationSite">
      <button class="mainBtn" id="apply">APPLY NOW!</button>
      <br>
      <button class="mainBtn" id="login"
              @click="$parent.$parent.dispLogin()">Login</button>
    </div>
  
  </div>
</template>

<style scoped>
  #mainContainer {
    min-height: 100vh;
  }
h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  
  
  #container {
    text-align: center;
  }
  
  #logo {
    animation: fadein 1s linear;
    margin-top: 100px;
    margin-bottom: -60px;
    /* This margin makes the logo look more centered */
    margin-right: 25px;
  }
  
  #title {
    font-size: 35px;
  }
  
  #location {
    margin-top: -10px;
  }
  
  .mainBtn {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    min-width: 300px;
    padding: 10px 40px 10px 40px;
    background: white;
    font-size: 20px;
/*    border: solid black 2px;*/
    border-top-left-radius: 10% 50%;
    border-top-right-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
    border-bottom-right-radius: 10% 50%;
    margin: 10px;
    transition-duration: .2s;
    cursor: pointer;
    outline: none;
    
    box-shadow: 3px 3px 10px rgba(0,0,0,.5);
  }
  .mainBtn:hover {
    
    background: black;
    color: white;
    border: solid gray 2px;
  }
  
  
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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