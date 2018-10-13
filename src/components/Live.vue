<template>
<div id="live">
  <div id="updates-container">
    <div id="ear"></div>
    <div id="ear2"></div>
    <div id="eye-left" class="eye"></div>
    <div id="eye-right" class="eye"></div>
    <img src="@/assets/bat_nose.png" id="bat-nose">
    <div id="updates" class="inside-container">
      <div class="tooth-down" id="update-tooth-top-left"></div>
      <div class="tooth-down" id="update-tooth-top-right"></div>
      <div class="tooth-up" id="update-tooth-bottom-left"></div>
      <div class="tooth-up" id="update-tooth-bottom-right"></div>
    </div>
    <h3 style="color: var(--pink);">UPDATES</h3>
  </div>
  <div id="schedule-container">
    <div id="schedule" class="inside-container"></div>
  </div>
  <div id="leaderboard-container">
    <div id="leaderboard" class="inside-container"></div>
  </div>
  <div id="redeem-container">
    <div id="redeem" class="inside-container"></div>
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
  min-height: 200px;
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

.tooth-up {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 70px solid #181818;
  position: absolute;
  bottom: 0px;
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
}
#schedule {
  background: #E0F2D3;
  margin-top: 120px;
}

#leaderboard-container {
  background: #181818;
  grid-column: 3 / 3;
  grid-row: 1 / 1;
}
#leaderboard {
  background: #FEE0CC;
  margin-top: 60px;
}

#redeem-container {
  background: #181818;
  grid-column: 3 / 3;
  grid-row: 2 / 2;
}

h3 {
  font-size: 50px;
  text-align: center;
  margin: 0px;
  margin-top: 15px;
}
</style>