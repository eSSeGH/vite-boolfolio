<script>
import store from '../store';

export default {
    props: {
        projectCard: {
            type: Object,
        },
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="card">
        <router-link style="display: contents;" :to="`/projects/${projectCard.slug}`">
            <div class="info-text">
                <h3 class="title label"> {{ projectCard.title }}</h3>
            </div>

            <p class="type">{{ projectCard.type ? projectCard.type.name : '-' }}</p>

            <ul class="technologies-list" v-if="projectCard.technologies && projectCard.technologies.length > 0">
                <li class="technology" v-for="technology in projectCard.technologies" :key="technology.id">{{
                    technology.name }}
                </li>
            </ul>

            <p class="description">{{ projectCard.description }}</p>

            <div class="client-info">
                <h4 class="label">INFORMAZIONI CLIENTE:</h4>
                <span class="client-name">{{ projectCard.client_name }}</span>
                <span class="client-name">{{ projectCard.client_tel }}</span>
            </div>

            <div class="data-info">
                <h4 class="label">INFORMAZIONI DATI:</h4>
                <span class="data-create">Creato il: {{ projectCard.created_at }}</span>
                <span class="data-update">Aggiornato il: {{ projectCard.updated_at }}</span>
                <span v-if="projectCard.deleted_at" class="data-delete">Cancellato il: {{ projectCard.deleted_at }}</span>
            </div>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.card {
    border-radius: 20px;
    background-color: aliceblue;
    box-shadow: 0 0 5px black;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: rgb(65, 65, 65);
    gap: 16px;

    .label {
        color: rgb(29, 29, 29);
    }

    .type {
        padding: 0 12px;
        line-height: 24px;
        font-size: 14px;
        border-radius: 999px;
        background-color: rgb(242, 255, 127);
        text-align: center;
    }

    .technologies-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 12px;

        .technology {
            padding: 0 12px;
            line-height: 20px;
            font-size: 12px;
            border-radius: 999px;
            background-color: aquamarine;
        }

    }

    .info-text {
        .title {
            font-size: 1.2rem;
            margin-bottom: 10px;
            text-align: center;
        }
    }

    .description {
        font-size: 0.75rem;
        max-height: 90px;
        overflow-y: auto;
    }

    .client-info {
        font-size: 1rem;
        margin-bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        h4 {
            flex-basis: 100%;
            margin-bottom: 10px;
            text-align: center;
        }
    }

    .data-info {
        font-size: 0.75rem;
    }

    span {
        display: block;
    }
}
</style>
