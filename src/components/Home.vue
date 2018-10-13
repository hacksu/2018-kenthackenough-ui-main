<template>
  <div id="home-container">
    <main-landing></main-landing>
     <info></info> 
     <faq></faq> 
     <schedule :events="$parent.events"></schedule>
     <kentmap></kentmap> 
  </div>
</template>

<script>
import scrollto from 'vue-scrollto';
  
import mainLanding from './homeComponents/Main';
import info from './homeComponents/Info';
import faq from './homeComponents/FAQ';
import kentmap from './homeComponents/Map';
import schedule from './homeComponents/Schedule';

export default {
  name: 'Home',
  components: {
    mainLanding,
    info,
    faq,
    schedule,
    kentmap
  },
  data() {
    return {

    };
  },
  
  mounted: function() {
    if (this.$parent.scrollToEl !== '') {
      scrollto.scrollTo(this.$parent.scrollToEl, 300);
      this.$parent.scrollToEl = '';
    }
  }
};
</script>
