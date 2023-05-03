<script>
import Projects from './Projects.vue'

export default {
}
</script>

<template>
    <div class="container">

        <h2>Logo</h2>

        <ul>
            <li>
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'about' }">Chi Sono</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'index' }">Portfolio</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>
