<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import store from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        ProjectCard,
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then(res => {
                    console.log(res)
                    const { results } = res.data
                    this.store.projects = results
                    console.log('store', this.store)
                    console.log('store.projects', this.store.projects)
                })
                .catch(err => {
                    console.log(err)
                    this.store.projects = []
                })
        }
    },
    mounted() {
        this.fetchProjects()
    }
}
</script>

<template>
    <div class="container">

        <section class="projects-list">
            <h2>PROGETTI</h2>

            <ProjectCard v-for="(el, i) in store.projects" :key="i" :projectCard="el" :title="store.projects.title"
                :description="store.projects.description" :client_name="store.projects.client_name"
                :client_tel="store.projects.client_tel" :created_at="store.projects.created_at"
                :updated_at="store.projects.updated_at" :deleted_at="store.projects.deleted_at" class="col">
            </ProjectCard>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

main {
    margin-top: 50px;
    background: rgba($color: black, $alpha: 0.95);

    .container {
        background-color: none;

        h2 {
            color: white;
            flex-basis: 100%;
            filter: drop-shadow(0 0 10px black)
        }

        .projects-list {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            color: white;

            .col {
                width: calc(100%/6 - 16px*5/6);
            }
        }
    }
}
</style>
