<template>
  <section class="bg-white p-6 rounded shadow-md">
    <h2 class="text-2xl font-bold mb-4">Proyectos</h2>
    <form @submit.prevent="guardarProyecto">
      <div class="mb-4">
        <label for="nombreProyecto" class="block text-gray-700">Nombre del Proyecto:</label>
        <input type="text" v-model="proyecto.nombreProyecto" required class="w-full p-2 border rounded">
      </div>
      <div class="mb-4">
        <label for="fechaCreacion" class="block text-gray-700">Fecha de Creación:</label>
        <input type="date" v-model="proyecto.fechaCreacion" required class="w-full p-2 border rounded">
      </div>
      <div class="mb-4">
        <label for="fechaFin" class="block text-gray-700">Fecha de Fin:</label>
        <input type="date" v-model="proyecto.fechaFin" required class="w-full p-2 border rounded">
      </div>
      <div class="mb-4">
        <label for="objetivo" class="block text-gray-700">Objetivo:</label>
        <input type="text" v-model="proyecto.objetivo" required class="w-full p-2 border rounded">
      </div>
      <div class="mb-4">
        <label for="presupuesto" class="block text-gray-700">Presupuesto:</label>
        <input type="number" v-model="proyecto.presupuesto" required class="w-full p-2 border rounded">
      </div>
      <button type="submit" class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Guardar</button>
    </form>
    <div class="mt-6">
      <h3 class="text-xl font-bold mb-2">Proyectos Guardados:</h3>
      <ul>
        <li v-for="(proyecto, index) in proyectos" :key="index" class="mb-2 p-2 bg-gray-100 rounded flex justify-between items-center">
          <div>
            <strong>{{ proyecto.nombreProyecto }}</strong><br>
            Fecha Creación: {{ proyecto.fechaCreacion }}<br>
            Fecha Fin: {{ proyecto.fechaFin }}<br>
            Objetivo: {{ proyecto.objetivo }}<br>
            Presupuesto: ${{ proyecto.presupuesto }}
          </div>
          <div>
            <button @click="editarProyecto(index)" class="bg-yellow-500 text-white p-1 rounded mr-2">Editar</button>
            <button @click="eliminarProyecto(index)" class="bg-red-500 text-white p-1 rounded">Eliminar</button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      proyecto: {
        nombreProyecto: '',
        fechaCreacion: '',
        fechaFin: '',
        objetivo: '',
        presupuesto: ''
      },
      proyectos: JSON.parse(localStorage.getItem('proyectos')) || [],
      editProjectIndex: -1
    }
  },
  methods: {
    guardarProyecto() {
      if (this.editProjectIndex === -1) {
        this.proyectos.push({ ...this.proyecto });
      } else {
        this.proyectos[this.editProjectIndex] = { ...this.proyecto };
        this.editProjectIndex = -1;
      }
      this.actualizarLocalStorage();
      this.resetForm();
    },
    editarProyecto(index) {
      this.proyecto = { ...this.proyectos[index] };
      this.editProjectIndex = index;
    },
    eliminarProyecto(index) {
      this.proyectos.splice(index, 1);
      this.actualizarLocalStorage();
    },
    resetForm() {
      this.proyecto = {
        nombreProyecto: '',
        fechaCreacion: '',
        fechaFin: '',
        objetivo: '',
        presupuesto: ''
      };
    },
    actualizarLocalStorage() {
      localStorage.setItem('proyectos', JSON.stringify(this.proyectos));
    }
  }
}
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>