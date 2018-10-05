<template>
<div id="live">
  <div id="updates">

  </div>
  <div id="schedule">

  </div>
  <div id="leaderboard">

  </div>
</div>
</template>

<script>

</script>

<style scoped>
#live {
  position: absolute;
  left: 0px;
  width: calc(100% - 0px);
  height: calc(100% - 50px);
  background: #484B5B;
  display: grid;
  grid-template-columns: 33% 40% 25%;
  grid-template-rows: 50% 35% 15%;
  grid-column-gap: 1%;
  padding: 20px;
}

#updates {
  background: #D6BDD6;
  grid-column: 1 / 1;
  grid-row: 1 / 4;
}
#schedule {
  background: #E0F2D3;
  grid-column: 2 / 2;
  grid-row: 1 / 4;
}

#leaderboard {
  background: #FEE0CC;
  grid-column: 3 / 3;
  grid-row: 1 / 1;
}
</style>