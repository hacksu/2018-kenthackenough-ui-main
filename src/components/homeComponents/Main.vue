<template>
  <div id="main-container">
    
    <img id="logo" alt="Kent Hack Enough" src="../../assets/Logo_Full_Dark.svg" />
    
    <div id="titleInfo">
      <h2 id="date">October ?th - ?th</h2>
      <h2 id="location">Kent State Library</h2>
    </div>
    
    <!-- This div is for before the application is done, just to promote your site. The focus is making sure sponsors know where to go. -->
    <div id="staticSite">
      
    </div>
    
    <!-- This div is for once the application is launched, when the user is NOT logged in -->
    <div id="applicationSite">
      <button class="mainBtn" id="apply"
              @click="$parent.$parent.dispRegister()">APPLY NOW!</button>
      <br>
      <button class="mainBtn" id="login"
              @click="$parent.$parent.dispLogin()">Login</button>
    </div>
    
    <div id="applicationSiteLoggedIn">
      <button class="mainBtn" id="apply"
              @click="$parent.$parent.dispRegister()">Fill out your application!</button>
    </div>
  
  </div>
</template>

<style>

#main-container {
  background-color: var(--bg-black);
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