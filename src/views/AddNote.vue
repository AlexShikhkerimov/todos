<template>
    <div class="add-page">

        <h1>Add note</h1>

        <label>
            <input type="text" v-model="noteName">
        </label>

        <ul>
            <li v-for="(item, index) in taskList" :key="index">
                <p>{{ item.description }}</p>
            </li>
        </ul>

        <div class="new-task">
            <label>
                <input type="text" v-model="newTask">
            </label>
            <button @click="addTask">Add task</button>
        </div>

        <div>
            <button @click="saveNote">Save note</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'AddNote',
        data() {
            return {
                noteName: "",
                taskList: [],
                newTask: ""
            }
        },
        methods: {
            addTask() {
                this.taskList.push({done: false, description: this.newTask});
                this.newTask = ""
            },
            saveNote() {
                const note = {
                    id: 0,
                    name: this.noteName,
                    taskList: this.taskList
                }
                this.noteList.push(note);
                localStorage.notes = this.noteList
                console.log(note);
                console.log(this.noteList);
                console.log(localStorage.notes);
            }
        },
        computed: {
            noteList() {
                return localStorage.notes ? localStorage.getItem('notes') : [];
            }
        }
    }
</script>