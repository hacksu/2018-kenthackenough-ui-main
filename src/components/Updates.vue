<template>
    <div id="schedule">
        <div v-for="msg in messages" v-bind:key="msg._id">
            {{ msg }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            liveUpdates: {},
            messages: []
        }
    },
    methods: {
        
    },
    mounted() {
        let vm = this;
        this.liveUpdates = this.$parent.wrapper.liveManager;
                this.liveUpdates.exisitingMessages().then((msgs) => {
            for (let i = 0; i < msgs.length; i++)
                vm.messages.push(msgs[i])
        });
        this.liveUpdates.SubscribeToMessages({
            onCreate(msg) {
                vm.messages.unshift(msg);
            },
            onUpdate: function(event) {
                var index = vm.messages.findIndex(function(o){
                    return o._id === event._id;
                });
                vm.messages[index].text = event.text;
            },
            onDelete: function(event) {
                var index = vm.messages.findIndex(function(o){
                    return o._id === event._id;
                });
                if (index !== -1) vm.messages.splice(index, 1);
            }
        });
    }
}
</script>

<style scoped>

</style>