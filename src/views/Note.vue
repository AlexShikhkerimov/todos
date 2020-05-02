<template>
    <div class="note-page">
        <div class="container">
            <h1>Note</h1>

            <button @click="$router.back()">Back</button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Note',
    props: ['id', 'notes'],
    methods: {

    },
    computed: {
        note() {
            return this.notes.find(note => note.id === this.id)
        }
    }
}
</script>