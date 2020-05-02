<template>
  <div class="home">
    <div class="container">

      <div class="note-list">

        <router-link v-for="note in notes" :key="note.id" :to="'/note/' + note.id">

          <div class="note-item">
            <h2>{{ note.name }}</h2>

            <ul>
              <li v-for="item in note.tasks" :key="item.description">
                <h3>{{ item.description }}</h3>
              </li>
            </ul>

            <button>click me</button>
          </div>

        </router-link>

        <router-link to="/add">
          <button>Add note</button>
        </router-link>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      notes: Array
    }
  },
  methods: {
    addNote() {
      this.router.push({ path: 'AddNote' })
    }
  }
}
</script>

<style scoped>
  .note-list {
    display: flex;
  }
  .note-item {
    border: 1px solid black;
    border-radius: 5px;
    height: 300px;
    margin: 15px;
    padding: 20px;
    width: 300px;
  }
</style>