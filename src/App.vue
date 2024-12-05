<template>
  <div id="app" class="min-h-screen bg-gray-100 flex">
    <Sidebar @show-form="showForm" />
    <main class="flex-1 p-6">
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