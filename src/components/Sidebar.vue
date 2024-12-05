<template>
  <aside class="w-64 bg-white shadow-md">
    <div class="p-4 flex items-center justify-between">
      <img class="h-12" src="../assets/img/RealHastaLaMuerte.png" alt="">
      <i class='bx bx-menu text-2xl cursor-pointer' @click="toggleMenu"></i>
    </div>
    <ul class="mt-6">
      <li class="mb-2">
        <router-link to="/personas" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
          <i class='bx bx-user-plus mr-2'></i>
          <span>Personas</span>
        </router-link>
      </li>
      <li class="mb-2">
        <router-link to="/proyectos" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
          <i class='bx bx-folder-plus mr-2'></i>
          <span>Proyectos</span>
        </router-link>
      </li>
      <li class="mb-2">
        <router-link to="/asociar" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
          <i class='bx bx-add-to-queue mr-2'></i>
          <span>Asociar Proyectos</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      document.querySelector('.sidebar').classList.toggle('active');
    }
  }
}
</script>

<style scoped>
.sidebar {
  transition: width 0.5s;
}
</style>