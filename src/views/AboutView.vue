<template>
  <div class="about-page-box">
    <h1>Welcome to RecipeNotes</h1>
    <h3> This application aims to make the lives of chefs and homecooks easier.
      RecipeNotes is the perfect application that can store all your beloved recipes and pass them down from generation to generation.
    </h3>
    <br>
    <h1> Please provide some feedback</h1>
    <div class="feedback">
      <textarea></textarea>
      <br>
      <button type="button" v-on:click="say('Thank you for the feedback!')">Submit</button>
    </div>
  </div>
</template>

<script>
  export default
  {
    methods: {
      say: function(message) {
        alert(message)
      }
    }
  }
</script>

<style scoped>
.about-page-box {
  margin: auto;
  border-radius: 1rem;
  max-width: 900px;
  text-align: center;
}
 .about-page-box .feedback textarea {
  height: 100px;
  width: 500px;
  resize: none;
 }
</style>
