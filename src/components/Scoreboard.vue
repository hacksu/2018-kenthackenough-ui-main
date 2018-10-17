<template>
    <div>Scoreboard
        <table>
            <tr>
                <th>User</th>
                <th>Points</th>
            </tr>
            <tr v-for="score in scores" :key="score._id">
                <td>{{ score.email }}</td>
                <td>{{ score.points }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    main: 'Main',
    data() {
        return {
            scores: []
        }
    },
    mounted() {
        let self = this;
        
        this.$parent.wrapper.gamifyV1.scoreboard()
        .then((scores) => {
            self.scores = scores;
        })
        .catch((err) => {
            throw err;
        });
    }
}
</script>

<style>

</style>


