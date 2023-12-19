<template>
  <nav>
    <router-link to="/">Home</router-link> | <!--router link is gonna be <a> tag -->
    <router-link to="/about">About</router-link> |  <!--do not forget to add these space and lines to add spacing between your links-->
    <router-link to="/resume">Resume</router-link> | <!--Project,Testimonials,Reach Me-->
    <router-link to="/projects">Projects</router-link> | <!--Project,Testimonials,Reach Me-->
    <router-link to="/testimonials">Testimonials</router-link> | <!--Project,Testimonials,Reach Me-->
    <router-link to="/reachMe">Reach Me</router-link> | <!--Project,Testimonials,Reach Me-->
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
