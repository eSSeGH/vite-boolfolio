<script>
import axios from 'axios'

export default {
    data() {
        return {
            projects: [],
        }
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then(res => {
                    console.log(res)
                    const { results } = res.data
                    this.projects = results
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    mounted() {
        this.fetchProjects()
    },
}
</script>

<template>
    <p v-for="project in projects" :key="project.id"> {{ project.title }}</p>
</template>

<style lang="scss" scoped></style>
