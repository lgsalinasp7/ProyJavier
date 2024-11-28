<template>
  <aside class="sidebar">
    <div class="logo-menu">
      <img class="logo" src="../assets/img/RealHastaLaMuerte.png" alt="">
      <i class='bx bx-menu menu-btn' @click="toggleMenu"></i>
    </div>
    <ul class="lista active">
      <li class="lista-item">
        <router-link to="/personas">
          <i class='bx bx-user-plus'></i>
          <span class="nombre-link" style="--i:1;">Personas</span>
        </router-link>
      </li>
      <li class="lista-item">
        <router-link to="/proyectos">
          <i class='bx bx-folder-plus'></i>
          <span class="nombre-link" style="--i:2;">Proyectos</span>
        </router-link>
      </li>
      <li class="lista-item">
        <router-link to="/asociar">
          <i class='bx bx-add-to-queue'></i>
          <span class="nombre-link" style="--i:3;">Asociar Proyectos</span>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100%;
  background: transparent;
  backdrop-filter: blur(40px);
  border-right: 2px solid rgba(255, 255, 255, .2);
}
</style>