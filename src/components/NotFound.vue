<template>
<div class="full-page" id="not-found">
  <p><i>And when they checked the link again, they realized... the route pointed to a 404!!!</i></p>
  <h1>Not found! </h1>
  <router-link to="/">Go Home!</router-link>
  <p class="rotate">👻😱<span class="flipped">👻</span></p>
</div>
</template>

<style scoped>
  #not-found {
    background: var(--orange);
    color: var(--bg-black);
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
  }
.rotate {
  animation: rotate 5s linear infinite;
  font-size: 100px;
}
  .flipped {
    display: inline-block;
    transform: rotatey(180deg);
  }
  @keyframes rotate {
    from {
      transform: rotatex(0deg) rotatey(0deg) rotatez(0deg);
    } to {
      transform: rotatex(360deg) rotatey(360deg) rotatez(360deg);
    }
  }
</style>