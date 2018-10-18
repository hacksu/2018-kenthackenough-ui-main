<template>
<div id="live">

  <div id="updates-container">
    <div id="ear"></div>
    <div id="ear2"></div>
    <div id="eye-left" class="eye"></div>
    <div id="eye-right" class="eye"></div>
    <img src="@/assets/bat_nose.png" id="bat-nose">
    <div id="updates" class="inside-container">
      <div id="tooth-up-container">
        <div class="tooth-down" id="update-tooth-top-right"></div>
        <div class="tooth-down" id="update-tooth-top-left"></div>
      </div>

      <div id="message-node-padding" style="height: 50px"></div>
      <div v-for="message in $parent.messages" class="message-node">
        <p class="message-text" v-html="compileMarkdown(message.text)"> </p>
        <p class="message-time">{{ formatTime(message.created) }}</p>
        <hr>
      </div>

      <div id="tooth-down-container">
        <div class="tooth-up" id="update-tooth-bottom-left"></div>
        <div class="tooth-up" id="update-tooth-bottom-right"></div>
      </div>
    </div>
    <h3 style="color: var(--pink);">UPDATES</h3>
  </div>
  <div id="schedule-container">
    <div class="franken-eye" id="franken-eye-left"></div>
    <div class="franken-eye" id="franken-eye-right"></div>
    <img src="@/assets/frankennose.png" id="franken-nose">
    <div id="schedule" class="inside-container">
      <div class="franken-tooth" id="franken-tooth-upper-left"></div>
      <div class="franken-tooth" id="franken-tooth-upper-right"></div>
        <div class="day" id="friday">
            <h2 class="date-title">Friday, October 19th</h2>
            <div v-for="event in $parent.events" v-bind:key="event._id" class="event-holder">
                <li v-if="(event.start.startsWith('2018-10-19') && Number(event.start.split('T')[1].substring(0, 2)) >= 4) || (Number(event.start.split('T')[1].substring(0, 2)) < 4 && event.start.startsWith('2018-10-20'))">
                    <span class="time" v-if="event.end != null">{{ event.start | moment("h:mm a") }}</span>
                    <span class="time" v-else>{{ event.start | moment("h:mm a") }}</span>

                    <span class="name">{{ event.title }}</span>

                    <span class="location">{{ event.location }}</span>

                    <span class="description">{{ event.description }}</span>
                </li>
            </div>
        </div>
        <div class="day" id="saturday">
            <h2 class="date-title">Saturday, October 20th</h2>
            <div v-for="event in $parent.events" v-bind:key="event._id" class="event-holder">
                <li v-if="(event.start.startsWith('2018-10-20') && Number(event.start.split('T')[1].substring(0, 2)) >= 4) || (Number(event.start.split('T')[1].substring(0, 2)) < 4 && event.start.startsWith('2018-10-21'))">
                  <span class="time" v-if="event.end != null">{{ event.start | moment("h:mm a") }}</span>
                  <span class="time" v-else>{{ event.start | moment("h:mm a") }}</span>

                  <span class="name">{{ event.title }}</span>

                  <span class="location">{{ event.location }}</span>

                  <span class="description">{{ event.description }}</span>
                </li>
            </div>
        </div>
        <div class="day" id="sunday">
            <h2 class="date-title">Sunday, October 21st</h2>
            <div v-for="event in $parent.events" v-bind:key="event._id" class="event-holder">
                <li v-if="(event.start.startsWith('2018-10-21') && Number(event.start.split('T')[1].substring(0, 2)) >= 4) || (Number(event.start.split('T')[1].substring(0, 2)) < 4 && event.start.startsWith('2018-10-22'))">
                    <span class="time" v-if="event.end != null">{{ event.start | moment("h:mm a") }}</span>
                    <span class="time" v-else>{{ event.start | moment("h:mm a") }}</span>

                    <span class="name">{{ event.title }}</span>

                    <span class="location">{{ event.location }}</span>

                    <span class="description">{{ event.description }}</span>
                </li>
            </div>
        </div>
      <div class="franken-tooth" id="franken-tooth-lower"></div>

    </div>
    <h3 style="color: var(--green);">SCHEDULE</h3>
  </div>
  <div id="leaderboard-container">
    <svg id="pumpkin-stem"
    width="100%" height="100%" viewBox="0 0 33 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M32.459,4.705l-16.358,-4.705l-16.101,12.282l0,16.002l18.118,0l0,-15.743l14.341,-7.836Z" style="fill:#1a1716;"/>
    </svg>
    <div class="pumpkin-eye" id="pumpkin-eye-left"></div>
    <div class="pumpkin-eye" id="pumpkin-eye-right"></div>
    <div id="leaderboard" class="inside-container">
      <img src="@/assets/pumpkin-teeth.png" id="pumpkin-teeth-top">
      <div style="height: 25px;"></div>
      <div class="top-score" v-if="yourScore">
        <p>Your current score: </p>
        <p>{{ yourScore.points }}</p>
      </div>
      <p style="margin: 0;font-weight: bolder;text-align: center;">Top scores:</p>
      <div v-for="(score, index) in scores" class="top-score">
        <span>{{index + 1 }}. {{score.email}} - </span>
        <span>{{score.points}}</span>
      </div>

    </div>
    <img src="@/assets/pumpkin-teeth.png" id="pumpkin-teeth-bottom">
    <h3 style="color: var(--orange);font-size: 20px;letter-spacing: 5px;">SCORES</h3>
  </div>
  <div id="redeem-container">
    <img id="goat-horn-left" class="goat-horn" src="@/assets/goathorn.png">
    <img id="goat-horn-right" class="goat-horn" src="@/assets/goathorn.png">
    <img id="goat-face" src="@/assets/goatface.png">

    <input class="redeem-input" placeholder="[CODE]" v-model="pointCode"
            @keyup.enter="redeemPoints()">
    <h3 style="color: var(--blue);font-size: 20px;letter-spacing: 5px;cursor:pointer;"
        @click="redeemPoints()">GET POINTS</h3>
    <p style="color: var(--blue);text-align: center;">{{ pointMsg }}</p>
  </div>
  
  <div id="socials">
    <a href="https://bit.ly/kheslack" target="_blank" class="social-link">
      <img src="@/assets/slack.png" class="social-icon">
    </a>
    <a href="https://www.instagram.com/kenthackenough/?hl=en" target="_blank" class="social-link">
      <img src="@/assets/insta.png" class="social-icon">
    </a>
    <a href="https://twitter.com/kenthackenough?lang=en" target="_blank" class="social-link">
      <img src="@/assets/twitter.png" class="social-icon">
    </a>
    <a href="https://www.facebook.com/kenthackenough/" target="_blank" class="social-link" >
      <img src="@/assets/fb.png" class="social-icon">
    </a>
  </div>

  <div id="mobile-schedule-container" class="mobile">
    <h3>Schedule</h3>
    <div class="day" id="friday">
            <h2 class="date-title">Friday, October 19th</h2>
            <div v-for="event in $parent.events" v-bind:key="event._id" class="event-holder">
                <li v-if="(event.start.startsWith('2018-10-19') && Number(event.start.split('T')[1].substring(0, 2)) >= 4) || (Number(event.start.split('T')[1].substring(0, 2)) < 4 && event.start.startsWith('2018-10-20'))">
                    <span class="time" v-if="event.end != null">{{ event.start | moment("h:mm a") }}</span>
                    <span class="time" v-else>{{ event.start | moment("h:mm a") }}</span>

                    <span class="name">{{ event.title }}</span>

                    <span class="location">{{ event.location }}</span>

                    <span class="description">{{ event.description }}</span>
                </li>
            </div>
        </div>
        <div class="day" id="saturday">
            <h2 class="date-title">Saturday, October 20th</h2>
            <div v-for="event in $parent.events" v-bind:key="event._id" class="event-holder">
                <li v-if="(event.start.startsWith('2018-10-20') && Number(event.start.split('T')[1].substring(0, 2)) >= 4) || (Number(event.start.split('T')[1].substring(0, 2)) < 4 && event.start.startsWith('2018-10-21'))">
                  <span class="time" v-if="event.end != null">{{ event.start | moment("h:mm a") }}</span>
                  <span class="time" v-else>{{ event.start | moment("h:mm a") }}</span>

                  <span class="name">{{ event.title }}</span>

                  <span class="location">{{ event.location }}</span>

                  <span class="description">{{ event.description }}</span>
                </li>
            </div>
        </div>
        <div class="day" id="sunday">
            <h2 class="date-title">Sunday, October 21st</h2>
            <div v-for="event in $parent.events" v-bind:key="event._id" class="event-holder">
                <li v-if="(event.start.startsWith('2018-10-21') && Number(event.start.split('T')[1].substring(0, 2)) >= 4) || (Number(event.start.split('T')[1].substring(0, 2)) < 4 && event.start.startsWith('2018-10-22'))">
                    <span class="time" v-if="event.end != null">{{ event.start | moment("h:mm a") }}</span>
                    <span class="time" v-else>{{ event.start | moment("h:mm a") }}</span>

                    <span class="name">{{ event.title }}</span>

                    <span class="location">{{ event.location }}</span>

                    <span class="description">{{ event.description }}</span>
                </li>
            </div>
        </div>
  </div>
  <div id="mobile-updates-container" class="mobile">
    <h3>Updates</h3>
    <div id="message-node-padding" style="height: 25px"></div>
      <div v-for="message in $parent.messages" class="message-node">
        <p class="message-text">{{ message.text }}</p>
        <p class="message-time">{{ formatTime(message.created) }}</p>
        <hr>
      </div>
  </div>
  <div id="mobile-points-container" class="mobile">
    <div style="display: flex;justify-content: space-between;margin: 0px;">
      <p><b>Your Points: </b> 0</p>
      <p>{{pointMsg}}</p>
    </div>
    <p>Enter Code: <input class="mobile-input" placeholder="[CODE]" v-model="pointCode">
      <button v-if="pointCode.length > 2" @click="redeemPoints()">Enter!</button>
    </p>
  </div>
</div>
</template>

<script>
var VueMarkdown = require('vue-markdown');

export default {
  data() {
    return {
      pointCode: '',
      pointMsg: '',
    }
  },
  components: {
    'vue-markdown': VueMarkdown
  },
  computed: {
    scores() {
      return this.$parent.scores
    },
    yourScore() {
      for (var scoreID in this.$parent.scores) {
        if (this.$parent.scores[scoreID]._id == this.$parent.user._id) {
          return this.$parent.scores[scoreID];
        }
      }
      return false;
    }
  },
  methods: {
    formatTime(time) {
      var datetime = new Date(time);
      var minutes = datetime.getMinutes();
      var hours = datetime.getHours();
      var ampm = "am";
      
      if (hours > 12) {
        hours -= 12;
        ampm = "pm";
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      return hours + ":" + minutes + ampm;
    },
    redeemPoints() {
      this.$parent.wrapper.gamifyV1.redeem(
          this.$parent.wrapper.userManager.getLocalUser(),
          this.pointCode,
          50, // Constant point code.
          'const',
          'const'
      )
      .then((data) => {
        this.pointMsg = "You got +50 points!";
        this.pointCode = "";
        this.$parent.getScores();
          console.log('Submitted code successfully!', data);
      })
      .catch((err) => {
        this.pointMsg = "Incorrect code!"
        this.pointCode = ""
          console.error("Error redeeming points!");
      });
    },
    compileMarkdown(text) {
      return marked(text, { sanitize: true })
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped>


#live {
  position: absolute;
  left: 0px;
  width: calc(100% - 0px);
  height: calc(100% - 70px);
  background: #484B5B;
  display: grid;
  grid-template-columns: 33% 40% 25%;
  grid-template-rows: 50% 33% 15%;
  grid-column-gap: 1%;
  grid-row-gap: 1%;
  padding: 20px;
}

.inside-container {
  width: 90%;
  min-height: 100px;
  margin-right: 5%;
  margin-left: 5%;
  border-radius: 15px;
  position: relative;
}

#updates-container {
  background: #181818;
  height: 90%;
  margin-top: 10%;
  grid-column: 1 / 1;
  grid-row: 1 / 4;
  position: relative;
  border-radius: 0px 0px 10px 10px;
}
#updates {
  background: #D6BDD6;
  margin-top: 10px;
  height: 70%;
  overflow-y: scroll;
}

#pumpkin-stem {
  position: absolute;
  top: -48px;
  height: 50px;
}

#ear {
  width: 0;
  height: 0;
  border-bottom: 40px solid #181818;
  border-right: 40px solid transparent;
  position: absolute;
  top: -40px;
}
#ear2 {
  width: 0;
  height: 0;
  border-bottom: 50px solid #181818;
  border-left: 40px solid transparent;
  position: absolute;
  top: -50px;
  right: 0px;
}
.eye {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: solid var(--pink) 5px;
  position: absolute;
  top: 10px;
}
#eye-left {
  left: 20%;
}
#eye-right {
  right: 20%;
}
#bat-nose {
  margin: 0 auto;
  display: block;
  width: 45px;
  margin-top: 30px;
}

#tooth-up-container {
  position: sticky;
  width: 100%;
  top: 0px;
}

#tooth-down-container {
  position: sticky;
  width: 100%;
  top: 0px;
  display: none;
}


.tooth-up {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 70px solid #181818;
  position: absolute;
}
.tooth-down {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 50px solid #181818;
  position: absolute;
}
#update-tooth-top-left {
  left: 12%;
}
#update-tooth-top-right {
  right: 12%;
}
#update-tooth-bottom-left {
  left: 19%;
}
#update-tooth-bottom-right {
  right: 19%;
}

#schedule-container {
  background: #181818;
  grid-column: 2 / 2;
  grid-row: 1 / 4;
  border-radius: 15px;
  position: relative;
}
#schedule {
  background: #E0F2D3;
  margin-top: 50px;
  overflow-y: scroll;
  max-height: 60%;
}

.franken-eye {
  background: var(--green);
  width: 25%;
  height: 50px;
  position: absolute;
  top: 20px;
}
.franken-eye:after {
  content: '';
  height: 50px;
  width: 50px;
  background: var(--green);
  position: absolute;
  border-radius: 50%;
  top: 25px;
  left: calc(50% - 25px);
}
#franken-eye-left {
  right: 5%;
}
#franken-eye-right {
  left: 5%;
}
#franken-nose {
  margin: 0 auto;
  display: block;
  margin-top: 80px;
  width: 90px;
}

.franken-tooth {
  background: #181818;
  height: 30px;
  width: 70px;
  position: sticky;
}
#franken-tooth-upper-left {
  top: 0px;
  left: 15%;
}
#franken-tooth-upper-right {
  display: none;
  top: 0px;
  right: 15%;
}
#franken-tooth-lower {
  left: 55%;
  bottom: -5px;
}
 h1 {
    color: #181818;
    text-shadow: -4px 4px 0 black;
    text-align: center;
    padding-top: 4rem;
    font-size: 5em;
  }
  
  .date-title {
    font-size: 2rem;
    color: #181818;
    text-align: center;
    margin: 1rem auto;
    max-width: 960px;
  }
  
  ul {
    max-width: 960px;
    margin: 0 auto;
    list-style: none;
  }
  
  li {
    display: grid;
    grid-template-columns: 30% auto;
    grid-template-rows: 50% 50%;
    padding: 0.5em 0;
  }
  .event-holder {
    width: 90%;
    margin: 0 auto;
  }
  
  .time {
    font-weight: bold;
    font-size: 1.2rem;
    color: #181818;
  }
  
  .name {
    font-weight: bold;
    font-size: 1.2rem;
    padding-bottom: 10px;
    color: #181818;
    text-align: right;
  }
  .description {
    text-align: right;
    padding-left: 10px;
  }
  
  .day {
    padding: 1rem 0 2rem;
    /*background-color: blue;*/
  }

#leaderboard-container {
  margin-top: 40px;
  background: #181818;
  grid-column: 3 / 3;
  grid-row: 1 / 1;
  position: relative;
  border-radius: 15px;
}
#leaderboard {
  background: #FEE0CC;
  margin-top: 75px;
  position: relative;
  height: 170px;
  overflow-y: scroll;
  padding-bottom: 20px;
}

.pumpkin-eye {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid var(--orange);
  position: absolute;
  bottom: 0px;
}

#pumpkin-eye-left {
  position: absolute;
  top: 15px;
  left: 14%;
}
#pumpkin-eye-right {
  position: absolute;
  top: 15px;
  right: 14%;
}

#pumpkin-teeth-top {
  width: 100%;
  height: 30px;
  top: 0px;
  position: sticky;
}
#pumpkin-teeth-bottom {
  width: 100%;
  height: 30px;
  position: relative;
  top: -20px;
  transform: scale(1, -1);
}

.top-score {
  display: flex;
  margin: 5px 5%;
  justify-content: space-between;
}

#redeem-container {
  background: #181818;
  grid-column: 3 / 3;
  grid-row: 2 / 2;
  border-radius: 15px;
  margin-top: 45px;
  position: relative;
}
.goat-horn {
  position: absolute;
  top: -40px;
  height: 50px;
}
#goat-horn-left {
  left: 15%;
}
#goat-horn-right {
  right: 15%;
  transform: scale(-1, 1);
}
#goat-face {
  width: 50%;
  margin: 0 auto;
  display: block;
  margin-top: 20px;
}

#socials {
  grid-column: 3/3;
  grid-row: 3/3;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.social-icon {
  width: 100%;
  display: block;
}
.social-link {
  width: 20%;
  display: block;
}


.redeem-input {
  background: none;
  border: none;
  border-bottom: solid 3px #50B4E6;
  outline: none;
  margin: 0 auto;
  color: white;
  margin-top: 10px;
  display: block;
  font-size: 18px;
  text-align: center;
  padding: 5px;
  letter-spacing: 5px;
}
.redeem-input::placeholder {
  letter-spacing: 0px;
}

.message-node {
  margin: 5px 5% 5px 5%;
}

.message-text {
  margin-bottom: 0px;
}

.message-time {
  font-size: 12px;
  margin-top: 0px;
  opacity: .5;
}
hr {
  border-color: black;
}

h3 {
  font-size: 50px;
  text-align: center;
  margin: 0px;
  margin-top: 15px;
}

.mobile {
  display:none;
}

@media screen and (max-width: 1000px) {
  #updates-container {
    display: none;
  }
  #schedule-container {
    display:none;
  }
  #redeem-container {
    display: none;
  }
  #leaderboard-container {
    display:none;
  }
  #socials {
    display: none;
  }
  .mobile {
    display: block;
    overflow-y: scroll;
  }
  #mobile-schedule-container {
    background: #E0F2D3;
    grid-column: 1/4;
    grid-row: 1/2;
  }
  #mobile-updates-container {
    background: #D6BDD6;
    grid-column: 1/4;
    grid-row: 2/3;
  }
  #mobile-points-container {
    background: #FEE0CC;
    grid-column: 1/4;
    grid-row: 3/4;
    padding: 5px 5%;
  }
  .mobile-input {
    background: none;
    border: none;
    border-bottom: solid 2px black;
    outline:none;
    width: 30%;
  }
  p {
    margin-top: 5px;
  }
}
  
  
</style>