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
  .detailsBubble {
    position: absolute;
/*    top: -10px;*/
    padding: 15px;
    font-size: 10px;
    background: var(--orange);
    height: 100px;
    margin-top: -140px;
    width: 100px;
    margin-left: -50px;
    border-radius: 3px;
  }
  .detailsBubble:after {
    content:"";
    position:absolute;
    bottom:-15px; /* value = - border-top-width - border-bottom-width */
    left:50px; /* controls horizontal position */
    border-width:15px 15px 0; /* vary these values to change the angle of the vertex */
    border-style:solid;
    border-color: var(--orange) transparent;
    /* reduce the damage in FF3.0 */
    display:block;
    width:0;

  }
  .details {
    display: block;
    border-radius: 50%;
    text-align: center;
    height: 30px;
    width: 30px;
    margin-right: 20px;
    background:lightgray;
/*    box-shadow: 1px 1px 0px gray;*/
    border: solid gray 1px;
    box-shadow: 0px 0px 5px rgba(0,0,0,.5);
    float: left;
  }
  
  /* The text container */
.container {
    display: block;
    position: relative;
    padding-right: 35px;
    margin-bottom: 0px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  z-index: 0;
}
/* Hide the browser's default checkbox */
.container input {
    position: absolute;
    opacity: 0;
}
/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  right: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border: solid black 1px;
  border-radius: 10%;

  transition: all .5s;
}
/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
    background-color: #ccc;
    transition: .5s;
}
/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
    background-color: #2196F3;
    transition: .5s;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}
/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
    display: block;
}
/* Style the checkmark/indicator */
.container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);

}
  
  #sponsors {
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
