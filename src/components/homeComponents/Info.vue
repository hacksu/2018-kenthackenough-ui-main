<template>
  <div id="info" class="widget">
    <div class="info-container">
      <h2 id="infoTitle">Event Info</h2>
      <p v-if="0">Kent Hack Enough brings hackers from all over the nation together to learn something new, party hard, and create something awesome. With more than 300 highly motivated, creative, and talented participants, Kent Hack Enough is a weekend-long event where students from all areas of interest come together to make something awesome, like an app, website or hardware hack. The entire event is free for students, including food, energy drinks, and swag. In between all the coding, designing, and water pong, our sponsors are available as mentors to provide help and expertise throughout the hacking process.</p>
      <h5>
        <img src="../../../static/laptop.svg" class="icon">
        <div>Find a team and build an awesome tech project in 36 hours!</div>
      </h5>
      <h5 class="right">
        Collaborate with 300+ creative participants from all areas of study
        <img src="../../../static/pals.svg" class="icon">
      </h5>
      <h5>
        <img src="../../../static/candy.svg" class="icon">
        100% free - including food, energy drinks, and swag - thanks to our sponsors!
      </h5>
      <h5 class="right">
        This year's theme - Halloween Party!
        <img src="../../../static/ghosts.svg" class="icon">
      </h5>
    </div>
  </div>
</template>

<style scoped>
  
  #infoTitle {
    font-size: 50px;
    text-align: center;
  }
  
  .info-container {
    width: 100%;
    max-width: 1000px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  
  .icon {
    height: 70px;
    width: 70px;
    margin: 0px 10px 0px 10px;
  }
  .right {
    justify-content: flex-end;
  }
  h5 {
    display: flex;
    align-items: center;
    font-size: 1.2em;
    margin-bottom: 50px;
  }
  
  @media only screen and (max-width: 850px) {
    h5 {
      font-size: .9em;
    }
  }
  
  #info {
    background-color: var(--darker-green);
    background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.02) 35px, rgba(255,255,255,.02) 70px);    font-size: 20px;
    line-height: 30px;
    color: white;
    min-height: 80vh;
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