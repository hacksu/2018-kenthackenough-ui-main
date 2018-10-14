<template>
<div id="live">
  <div id="schedule-container">
    <div class="franken-eye" id="franken-eye-left"></div>
    <div class="franken-eye" id="franken-eye-right"></div>
    <img src="@/assets/frankennose.png" id="franken-nose">
    <div id="schedule" class="inside-container">
      <div class="franken-tooth" id="franken-tooth-upper-left"></div>
      <div class="franken-tooth" id="franken-tooth-upper-right"></div>
        <div class="day" id="friday">
            <h2 class="date-title">Friday, October 19th</h2>
            <div v-for="event in events" v-bind:key="event._id" class="event-holder">
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
            <div v-for="event in events" v-bind:key="event._id" class="event-holder">
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
            <div v-for="event in events" v-bind:key="event._id" class="event-holder">
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
    <h3 style="color: var(--green)">SCHEDULE</h3>
  </div>
</div>
</template>

<script>
export default {
    props: {
        events: {
            type: Array,
            default: function() {
                return this.$parent.events
            }
        }
    }
}
</script>

<style scoped>


#live {
  left: 0px;
  width: calc(100% - 0px);
  max-height: 100vh;
  background: #484B5B;
  padding: 20px;
}

.inside-container {
  width: 90%;
  min-height: 200px;
  margin-right: 5%;
  margin-left: 5%;
  border-radius: 15px;
  position: relative;
}

#schedule-container {
  background: #181818;
  width: 50%;
  height: 90vh;
  min-width: 600px;
  border-radius: 15px;
  position: relative;
  padding-top: 10px;
  margin: 0 auto;
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
  left: calc(50% - 90px);
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
  @media screen and (max-width: 768px) {
    #schedule-container {
        width: 90%;
        min-width: 90%;
    }
    .franken-eye {
      width: 25%;
      height: 25px;
      position: absolute;
      top: 20px;
    }
    .franken-eye:after {
      content: '';
      height: 25px;
      width: 25px;
      background: var(--green);
      position: absolute;
      border-radius: 50%;
      top: 12px;
      left: calc(50% - 12px);
    }
    #franken-nose {
      margin: 0 auto;
      display: block;
      margin-top: 40px;
      width: 45px;
      left: calc(50% - 90px);
    }
    .franken-tooth {
        background: #181818;
        height: 15px;
        width: 35px;
        position: sticky;
    }
    #schedule {
      background: #E0F2D3;
      margin-top: 50px;
      overflow-y: scroll;
      max-height: 60%;
    }
}


h3 {
  font-size: 50px;
  text-align: center;
  margin: 0px;
  margin-top: 15px;
}
</style>