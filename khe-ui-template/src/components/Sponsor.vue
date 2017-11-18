<template>
<div id="SponsorForm">
  <h1>Interested in Sponsoring KHE?</h1>
  <p>We want to make sure you feel like you're getting your money's worth when you sponsor our event. We have tons of options for letting you promote your brand, recruit smart, innovative people, and giving back to the tech community!</p>
  <div id="form">
    <span>
      Company Name: 
      <input type="text" placeholder="Company Name Here"
             v-model="companyName">
    </span>
    <span>
      Contact Email: 
      <input type="text" placeholder="contact@company.com"
             v-model="companyEmail">
    </span>
  
  </div>
  <p>Select the benefits that you'd be interested in below, or click on the <b>?</b> to learn more about them.</p>
  
  <div class="benefit" v-for="benefit in benefits">
    <div class="name">
      <div class="detailsBubble" v-if="benefit.details">
        {{ benefit.description }}
      </div>
      <span class="details" 
            @mouseenter="benefit.details = true;"
            @mouseleave="benefit.details = false;">i</span>
      {{ benefit.name}}
      
    </div>
    <label class="container">${{ benefit.price }}
      <input type="checkbox" v-model="benefit.checked">
      <span class="checkmark"></span>
    </label>
  </div>
  
  <div id="total">Total: ${{ total }}</div>
  
</div>
</template>

<style scoped>
  .detailsBubble {
    position: absolute;
/*    top: -10px;*/
    padding:15px;
    font-size: 10px;
    background: #A1FD9C;
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
    border-color: #A1FD9C transparent;
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
  
  /* The container */
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
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
    background-color: #2196F3;
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
  
  #SponsorForm {
    padding: 200px;
    padding-top: 100px;
  }
  .benefit {
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
/*    margin: 10px 10% 10px 10%;*/
    padding: 20px;
    margin-top: 10px;
    font-size: 22px;
  }
  
  .benefitBox {
    width: 50px;
    height: 50px;
  }
  
  #map {
    background: black;
    color: white;
    display: flex;
    align-content: center;
/*    align-items: center;*/
    justify-content: space-between;
    padding: 100px;
  }
  
  #mapIframe {
    border-radius: 2%;
  }
  
  #total {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 20px;
    font-size: 18px;
    border-top: solid black 1px;
    border-left: solid black 1px;
    border-top-left-radius: 10px;
  }
  
  #form {
    display: flex;
    justify-content: space-between;
    
  }
  
  #form input {
    padding-top: 10px;
    font-size: 14px;
    width: 300px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: lightGray 1px solid;
    outline: none;
  }
  #form input:focus {
    
    border-bottom: lightGreen 1px solid;
  }
  
  

</style>

<script>


export default {
  name: 'Map',
  computed: {
    total: function () {
      var total = 0;
      var i = 0;
      for (i; i < this.benefits.length; i++) {
        if (this.benefits[i].checked) {
          total += this.benefits[i].price;
        }
      }
      return total;
    }
  },
  data() {
    return {
      companyName: '',
      companyEmail: '',

      benefits: [
        {
          name: 'Send Mentors',
          description: 'Description here!',
          price: 100,
          details: false,
          checked: false,
          tag: 'khe',
          catagory: ''
        },
        {
          name: 'Reserve Table',
          description: 'Description here!',
          price: 100,
          details: false,
          checked: true,
          tag: 'khe'
        },
        {
          name: 'Judge Final Hacks',
          description: 'Description here!',
          price: 50,
          details: false,
          checked: false,
          tag: 'khe'
        },
        {
          name: 'Speak at Opening Ceremony (5 minutes)',
          description: 'Description here!',
          price: 100,
          details: false,
          checked: false,
          tag: 'khe'
        },
        {
          name: 'Keynote Speaker at Opening Ceremony (up to 15 minutes)',
          description: 'Description here!',
          price: 100,
          details: false,
          checked: false,
          tag: 'khe'
        },
        {
          name: 'Reserved space in hacking area',
          description: 'Description here!',
          price: 500,
          details: false,
          checked: false,
          tag: 'khe'
        },
        {
          name: 'Logo on website',
          description: 'Description here!',
          price: 100,
          details: false,
          checked: false,
          catagory: 'marketing',
          tag: 'khe'
        },
        {
          name: 'Logo on T-shirt',
          description: 'Description here!',
          price: 100,
          details: false,
          checked: false,
          catagory: 'marketing',
          tag: 'khe'
        },
        {
          name: 'Distrubuted Swag in Swag Bags',
          description: 'Description here!',
          price: 50,
          details: false,
          checked: false,
          catagory: 'marketing',
          tag: 'khe'
        },
        {
          name: 'Send Recruiters',
          description: 'Description here!',
          price: 350,
          details: false,
          checked: false,
          catagory: 'recruiting',
          tag: 'khe'
        },
        {
          name: 'Resume Book After Event',
          description: 'Description here!',
          price: 500,
          details: false,
          checked: false,
          catagory: 'recruiting',
          tag: 'khe'
        },
        {
          name: 'Resume Book Before Event',
          description: 'Description here!',
          price: 700,
          details: false,
          checked: false,
          catagory: 'recruiting',
          tag: 'khe'
        },

        {
          name: 'Talk at the Beginning of a Hacksu Lesson',
          description: '10 minutes',
          price: 50,
          details: false,
          checked: false,
          catagory: 'general',
          tag: 'hacksu'
        },
        {
          name: 'Give a Hacksu Lesson',
          description: 'Description Here!',
          price: 100,
          details: false,
          checked: false,
          catagory: 'general',
          tag: 'hacksu'
        },
        {
          name: 'Logo on Website for 1 Year',
          description: 'Description Here!',
          price: 100,
          details: false,
          checked: false,
          catagory: 'general',
          tag: 'hacksu'
        },
        {
          name: 'Name on Website As Contributor',
          description: 'Description Here!',
          price: 50,
          details: false,
          checked: false,
          catagory: 'general',
          tag: 'hacksu'
        },
        {
          name: 'Logo on Hacksu Shirts',
          description: 'Description Here!',
          price: 50,
          details: false,
          checked: false,
          catagory: 'general',
          tag: 'hacksu'
        },
        {
          name: 'Big Logo on Hacksu Shirts',
          description: 'Description Here!',
          price: 100,
          details: false,
          checked: false,
          catagory: 'general',
          tag: 'hacksu'
        },
      ]
    };
  },

};
</script>