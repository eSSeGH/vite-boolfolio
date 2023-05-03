<script>
// import Projects from './components/Projects.vue';
import Home from './pages/Home.vue';
import NavBar from './components/NavBar.vue'

export default {
  components: {
    // Projects,
    NavBar,
  }
}
</script>

<template>
  <NavBar></NavBar>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <h1>serie di link</h1>
  </footer>
  <!-- <div class="container">
    <h1>TUTTI I PROGETTI</h1>
    <Projects></Projects>
  </div> -->
</template>

<style lang="scss" scoped></style>
