<template>
<div id="map">
  <div id="directions">
    <h1>Where to Go:</h1>
    <p>Kent Hack Enough is graciously hosted in the Kent State Library, at: </p>
    <p>1125 Risman Dr, Kent, OH 44242</p>
    <h3>Parking</h3>
    <p>KSU will not be ticketing over the weekend. The two parking lots closest to the library are the Vistor Lot right by the bus stop, and the R lot by Eastway.</p>
  </div>
  <iframe id="mapIframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.4427201307603!2d-81.34461668458171!3d41.14668997928703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88313accb4555555%3A0x3e830cbda94e6469!2sKent+State+University+Library!5e0!3m2!1sen!2sus!4v1510788212698" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  
  
  </div>




</template>

<style scoped>
  #directions {
    text-align: left;
    flex-grow: .5;
    width: 50%;
    padding-right: 40px;
  }
  
  #map {
    background: black;
    color: white;
    display: flex;
    align-content: center;
/*    align-items: center;*/
    justify-content: space-around;
    padding: 100px;
  }
  
  #mapIframe {
    border-radius: 2%;
  }

</style>

<script>


export default {
  name: 'Map',
  data() {
    return {
    };
  },
};
</script>