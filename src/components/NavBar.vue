<script>
import Projects from './Projects.vue'

export default {
}
</script>

<template>
    <header>
        <div class="container">

            <h2 class="logo">Logo</h2>

            <ul class="nav-links">
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
    </header>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

header {
    height: 90px;
    background-color: rgba($color: black, $alpha: 0.95);
    padding: 20px;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;

        .logo {
            color: white;
            transition: all 300ms;

            &:hover {
                filter: drop-shadow(0 0 7px rgb(212, 212, 212));
            }
        }

        .nav-links {
            display: flex;
            gap: 16px;
            list-style-type: none;
            color: rgb(212, 212, 212);

            a {
                color: currentColor;
                text-decoration: none;
                transition: all 300ms;
                font-size: 14px;

                &:hover {
                    filter: drop-shadow(0 0 7px rgb(212, 212, 212));
                }
            }

        }
    }
}
</style>
