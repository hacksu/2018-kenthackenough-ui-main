<template>
    <div>
        <input type="text" v-model="pointCode"/>
        <input type="submit" @click="submitRedeem()" />
    </div>
</template>

<script>
export default {
    main: 'Main',
    data() {
        return {
            pointCode: ''
        }
    },
    methods: {
        submitRedeem: function () {
            this.$parent.wrapper.gamifyV1.redeem(
                this.$parent.wrapper.userManager.getLocalUser(),
                this.pointCode,
                50, // Constant point code.
                'const',
                'const'
            )
            .then((data) => {
                console.log('work ed');
            })
            .catch((err) => {
                throw err;
            });
        }
    }
}
</script>

<style>

</style>
