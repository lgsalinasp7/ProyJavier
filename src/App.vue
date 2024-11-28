<template>
  <div id="app">
    <Sidebar @show-form="showForm" />
    <main class="main-content" id="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
  methods: {
    showForm(formId) {
      this.$router.push({ name: formId });
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
body {
  font-family: 'Poppins', serif;
}
</style>