<script>
import store from '../../store'
import axios from 'axios'
import ProjectCard from '../../components/ProjectCard.vue'

export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            store,
            project: null,
        }
    },
    // recuperare lo slug con le props:
    props: ['slug'],
    methods: {
        fetchProject() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then(res => {
                    const { success, project } = res.data
                    console.log(success, project)

                    if (success) {
                        this.project = project
                    } else {
                        // this.$router.push({ name: '404' })
                        // al posto di usare il push conviene rimpiazzare uesta pagina nella cronologia delle Pagine,
                        // infatti se facessimo indietro dalla pagina 404 ci manderebbe indietro alla pagina che non esisteva

                        this.$router.replace({ name: '404' })
                    }
                })
                .catch(err => {
                    this.$router.replace({ name: '404' })
                })
        }
    },
    created() {
        this.fetchProject()
    },
    mounted() {
        // occhio che sono 2 cose diverse:
        console.log(this.$route)
        console.log(this.$route)
    }
}
</script>

<template>
    <section class="single-project-section">
        <div class="container">
            <div v-if="project" class="single-project">
                <h2>DETTAGLIO PROGETTO</h2>

                <ProjectCard :projectCard="project" :title="project.title" :description="project.description"
                    :client_name="project.client_name" :client_tel="project.client_tel" :created_at="project.created_at"
                    :updated_at="project.updated_at" :deleted_at="project.deleted_at" class="single-project-card">
                </ProjectCard>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/general.scss' as *;

.single-project-section {
    padding-top: 50px;
    height: calc(100vh - 90px);
    background: rgba($color: black, $alpha: 0.95);

    .container {

        h2 {
            text-align: center;
            color: white;
            flex-basis: 100%;
            filter: drop-shadow(0 0 10px black);
            margin-bottom: 28px;
        }

        .single-project {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            color: white;

            .single-project-card {
                margin: 0 auto;
            }
        }
    }
}
</style>
