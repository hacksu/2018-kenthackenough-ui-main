<template>
  <div id="home-container">
    <main-landing></main-landing>
    <info></info>
    <faq></faq>
    <kentmap></kentmap>
  </div>
</template>

<script>
import scrollto from 'vue-scrollto';
  
import mainLanding from './homeComponents/Main';
import info from './homeComponents/Info';
import faq from './homeComponents/FAQ';
import kentmap from './homeComponents/Map';

export default {
  name: 'Home',
  components: {
    mainLanding,
    info,
    faq,
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
