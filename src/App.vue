<script>
import Home from './pages/Home.vue';
import NavBar from './components/NavBar.vue'

export default {
  components: {
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
</template>

<style lang="scss" scoped></style>
