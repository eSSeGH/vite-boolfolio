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
    },
    computed: {
        projects() {
            return this.store.projects
        }
    }
}
</script>

<template>
    <section class="projects-section">
        <div class="container">
            <div class="projects-list">
                <h2>PROGETTI</h2>

                <ProjectCard v-for="(el, i) in projects" :key="i" :projectCard="el" :title="projects.title"
                    :type="projects.type ? projects.type.name : '-'" :description="projects.description"
                    :client_name="projects.client_name" :client_tel="projects.client_tel" :created_at="projects.created_at"
                    :updated_at="projects.updated_at" :deleted_at="projects.deleted_at" class="col">
                </ProjectCard>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.projects-section {
    padding-top: 50px;
    background: rgba($color: black, $alpha: 0.95);

    .container {

        h2 {
            text-align: center;
            color: white;
            flex-basis: 100%;
            filter: drop-shadow(0 0 10px black);
        }

        .projects-list {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            color: white;

            .col {
                width: calc(100%/4 - 16px*3/4);
            }
        }
    }
}
</style>
