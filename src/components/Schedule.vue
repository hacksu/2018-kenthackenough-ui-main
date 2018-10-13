<template>
    <div id="schedule">
        <main class="schedule">
        <h1>Schedule</h1>
        <div class="day" id="friday">
            <h2>Friday, October 19th</h2>
            <ul v-for="event in events" v-bind:key="event._id">
                <li v-if="(event.start.startsWith('2018-10-19') && Number(event.start.split('T')[1].substring(0, 2)) >= 4) || (Number(event.start.split('T')[1].substring(0, 2)) < 4 && event.start.startsWith('2018-10-20'))">
                    <span class="time" v-if="event.end != null">{{ event.start | moment("h:mm a") }} - {{ event.end | moment("h:mm a") }}</span>
                    <span class="time" v-else>{{ event.start | moment("h:mm a") }}</span>

                    <span class="name">{{ event.title }}</span>

                    <span class="location">{{ event.location }}</span>

                    <span class="description">{{ event.description }}</span>
                </li>
            </ul>
        </div>
        <div class="day" id="saturday">
            <h2>Saturday, October 20th</h2>
            <ul v-for="event in events" v-bind:key="event._id">
                <li v-if="(event.start.startsWith('2018-10-20') && Number(event.start.split('T')[1].substring(0, 2)) >= 4) || (Number(event.start.split('T')[1].substring(0, 2)) < 4 && event.start.startsWith('2018-10-21'))">
                  <span class="time" v-if="event.end != null">{{ event.start | moment("h:mm a") }} - {{ event.end | moment("h:mm a") }}</span>
                  <span class="time" v-else>{{ event.start | moment("h:mm a") }}</span>

                  <span class="name">{{ event.title }}</span>

                  <span class="location">{{ event.location }}</span>

                  <span class="description">{{ event.description }}</span>
                </li>
            </ul>
        </div>
        <div class="day" id="sunday">
            <h2>Sunday, October 21st</h2>
            <ul v-for="event in events" v-bind:key="event._id">
                <li v-if="(event.start.startsWith('2018-10-21') && Number(event.start.split('T')[1].substring(0, 2)) >= 4) || (Number(event.start.split('T')[1].substring(0, 2)) < 4 && event.start.startsWith('2018-10-22'))">
                    <span class="time" v-if="event.end != null">{{ event.start | moment("h:mm a") }} - {{ event.end | moment("h:mm a") }}</span>
                    <span class="time" v-else>{{ event.start | moment("h:mm a") }}</span>

                    <span class="name">{{ event.title }}</span>

                    <span class="location">{{ event.location }}</span>

                    <span class="description">{{ event.description }}</span>
                </li>
            </ul>
        </div>
    </main>
    </div>
</template>

<script>
export default {
    main: 'Main',
    data() {
        return {
            liveUpdates: {},
            events: []
        }
    },
    methods: {
        
    },
    mounted() {
        let vm = this;
        this.liveUpdates = this.$parent.wrapper.liveManager;
        this.liveUpdates.exisitingEvents().then((msgs) => {
            for (let i = 0; i < msgs.length; i++)
                vm.events.push(msgs[i])
        });
        this.liveUpdates.SubscribeToEvents({
            onCreate(event) {
                vm.events.unshift(event);
            },
            onUpdate: function(event) {
                var index = vm.events.findIndex(function(o){
                    return o._id === event._id;
                });
                vm.events.splice(index, 1);
                vm.events.push(event);
            },
            onDelete: function(event) {
                var index = vm.events.findIndex(function(o){
                    return o._id === event._id;
                });
                if (index !== -1) vm.events.splice(index, 1);
            }
        });
    },
};
</script>

<style scoped>

/*.schedule {
    background-color: blue;*/
  
  h1 {
    color: white;
    text-shadow: -4px 4px 0 black;
    text-align: center;
    padding-top: 4rem;
    font-size: 5em;
  }
  
  h2 {
    font-size: 2rem;
    color: white;
    text-align: left;
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
  
  .time {
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
  }
  
  .name {
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
  }
  
  .day {
    padding: 1rem 0 2rem;
    /*background-color: blue;*/
  }
/*}*/

</style>