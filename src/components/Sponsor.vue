<template>

<div id="sponsors">
  
  <h1>Our sponsors:</h1>
  <div v-for="(sponsor, index) in sponsors"
       class="sponsorWidget"
       :key="index">
    <a v-bind:href="sponsor.link"
        target="_blank">
    <br>
    <img v-bind:src="sponsor.imgUrl"
         class="sponsorImage"
        >
      </a>
  </div>
  
</div>
</template>

<script>
export default {
  name: 'Map',
  computed: {
    
  },
  mounted() {
    this.$parent.wrapper.sponsorSource.getSponsors()
      .then((data) => {
        this.sponsors = data;
      })
      .catch(console.error);
  },
  data() {
    return {
      sponsors: [],
      
      
    };
  },
};
</script>

<style scoped>
  
  
  #sponsors {
  background-color: var(--dark-grey);
    color: var(--white);
    padding: 200px;
    padding-top: 50px;
  }

  .sponsorImage {
    max-width: 300px;
    filter: grayscale(100%);
  }
  .sponsorImage:hover {
    filter: grayscale(0%);
  }
</style>
