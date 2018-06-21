<template>
  <div id="info" class="widget">
    <h2 id="infoTitle">Event Info</h2>
    <p>Kent Hack Enough brings hackers from all over the nation together to learn something new, party hard, and create something awesome. With more than 300 highly motivated, creative, and talented participants, Kent Hack Enough is a weekend-long event where students from all areas of interest come together to make something awesome, like an app, website or hardware hack. The entire event is free for students, including food, energy drinks, and swag. In between all the coding, designing, and water pong, our sponsors are available as mentors to provide help and expertise throughout the hacking process.</p>
    
  </div>
</template>

<style scoped>
  
  #infoTitle {
    font-size: 50px;
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