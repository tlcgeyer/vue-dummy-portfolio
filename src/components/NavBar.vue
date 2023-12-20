<template>
<!---inserting the navbar from Bootstrap-->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/">  <!--linking the app.view links. Refer to the index.js to check the name of your path to which its gonna be-->

        <!--insert img for your logo, make use of google drive-->
        <img src="https://drive.google.com/file/d/1qmfzFvqdH6YhVjDo3dD1S4sOw2yPh3so/view?usp=drive_link" alt="me">
    </router-link> 

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active"> 
            Home
          </router-link> <!--add a home icon-->
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">
            About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/resume" class="nav-link">
            Resume
        </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link">
            Projects
        </router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/testimonials" class="nav-link">
            Testimonials
        </router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/reachMe" class="nav-link">
            Reach Me
        </router-link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>

</style>