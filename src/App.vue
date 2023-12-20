<template>
  <NavBar></NavBar>
<main class="container-fluid">
  <router-view/>
</main> 
<FooterComp></FooterComp>
<!--displays the rendered component(and the content)-->



  <!--  EASIER WAY (without styling)
    <router-link to="/">Home</router-link> | router link is gonna be <a> tag -->
    <!-- <router-link to="/about">About</router-link> |  do not forget to add these space and lines to add spacing between your links
    <router-link to="/resume">Resume</router-link> | 
    <router-link to="/projects">Projects</router-link> | 
    <router-link to="/testimonials">Testimonials</router-link> | 
    <router-link to="/reachMe">Reach Me</router-link> | Project,Testimonials,Reach Me -->


</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    NavBar, 
    FooterComp
  }
}
</script>


<style src="./assets/css/style.css">
</style>