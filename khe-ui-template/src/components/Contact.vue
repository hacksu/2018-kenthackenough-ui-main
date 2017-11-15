<template>
  <div id="contact">
    <h2 id="contactTitle">Contact us!!</h2>
    <p>Want more information? Email lame? No worries! You can go to our
      <a href="https://www.facebook.com/groups/hacksu/">facebook page</a>,
      <a href="https://www.instagram.com/hacksu/?hl=en">instagram</a>
    </p>
<input type="text" placeholder="Insert problem here" name="subject"><br>
<label for="name">Name</label>
<input type="text" name="name" placeholder="Sherlock Holmes"><br>
<label for="email">Email</label>
<input type="email" name="email" placeholder="name@example.com"><br>
<label for="body">Body</label>
<textarea name="body" placeholder="Tell us what's bugging you! Or if you have any questions!"></textarea><br>
<br>
<button id="contactButton" class="apply-link">Send</button>
</div>
</template>

<style scoped>

  #infoTitle {
    font-size: 50px;
  }

  #info {
    background: black;
    font-size: 20px;
    line-height: 30px;
    color: white;
    text-align: left;
    padding-top: 100px;
    padding-left: 150px;
    padding-right: 150px;
    padding-bottom: 100px;
  }
</style>

<script>


export default {
  name: 'Main',
  data() {
    return {
    };
  },
};
</script>
