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

        <div class="info-text">
            <h3>PROGETTO</h3>
            <h3 class="title"> {{ projectCard.title }}</h3>
        </div>

        <h4>DESCRIZIONE:</h4>
        <p class="description"> Descrizione: {{ projectCard.description }}</p>

        <div class="client-info">
            <h4>INFORMAZIONI CLIENTE:</h4>
            <span class="client-name">{{ projectCard.client_name }}</span>
            <span class="client-name">{{ projectCard.client_tel }}</span>
        </div>

        <div class="data-info">
            <h4>INFORMAZIONI DATI:</h4>
            <span class="data-create">Creato il: {{ projectCard.created_at }}</span>
            <span class="data-update">Aggiornato il: {{ projectCard.updated_at }}</span>
            <span v-if="projectCard.deleted_at" class="data-delete">Cancellato il: {{ projectCard.deleted_at }}</span>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.card {
    border-radius: 20px;
    box-shadow: 0 0 5px black;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    gap: 16px;

    .info-text {
        .title {
            font-size: 1.2rem;
            margin-bottom: 10px;
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
    }

    .data-info {
        font-size: 0.75rem;
    }

    span {
        display: block;
    }
}
</style>
