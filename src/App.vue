<template>
  <!-- Creates a logo to add to the header -->
  <img class="logo" src="../src/assets/logo.png"/>

  <!-- A nav to contain the router links that will take the user to the next page. -->
  <nav id="nav">
    <router-link to="/">MyRecipes</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  
  <!-- Transition to occur between the two pages. -->
  <transition name="move" mode="out-in">
    <router-view/>
  </transition>
</template>

<style>
/* Basic setup of the font, margins, padding and box size.  */
#app{
  font-family: sans-serif;
  margin: 0;
  padding: 15px;
  box-sizing: border-box;
}
/* Adding a background image that resembles my design as well as a default text colour. */
body {
  background-image: url('~@/assets/myRecipesImg.jpeg');
  color: black;
}
/* Basic formatting for the nav bar */
#nav {
  padding-left: 8rem;
  border-radius: 5px;
  margin: 3rem;
  word-spacing: 30px;
}
/* Basic formatting for the text on the nav bar */
#nav a {
  font-size: 25px;
  color: #2c3e50;
  text-decoration: none;
}
/* Adding the colour that will appear depending on what page is active */
#nav a.router-link-exact-active {
  color: #F57076;
}
/* Basic formatting of the logo and its placement */
.logo{
  max-width: 140px;
  position:absolute;
  max-height: 140px;
  margin:0% 1%;  
}
/* Transition effects that will impact the way the switch between the two pages will occur */
.move-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.move-enter-active {
  transition: all 0.5s ease-out;
}

.move-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.move-leave-active {
  transition: all 0.5s ease-in;
}
/* Basic formatting of the button, like the appearance, colour, font size and colour, how 
big or small it is */
button {
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;

  background-color: #e68b91;
  font-size: 1.125rem;
  color: #2c3e50;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
/* Changes to the colour of the button when user hovers over it */
button:hover {
  background-color: #f2e3e5;
  transition: 0.5s;
}
</style>
