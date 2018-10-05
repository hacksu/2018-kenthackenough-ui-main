<template>
    <div id="schedule">
        <div v-for="e in events" v-bind:key="e._id">
            {{ e }}
        </div>
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
    }
}
</script>

<style scoped>

</style>