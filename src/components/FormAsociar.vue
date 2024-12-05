<template>
  <section class="bg-white p-6 rounded shadow-md">
    <h2 class="text-2xl font-bold mb-4">Asociar Personas a Proyectos</h2>
    <form @submit.prevent="asociarPersonaProyecto">
      <div class="mb-4">
        <label for="selectPersona" class="block text-gray-700">Persona:</label>
        <select v-model="selectedPersona" required class="w-full p-2 border rounded">
          <option v-for="(persona, index) in personas" :key="index" :value="index">
            {{ persona.nombres }} {{ persona.apellidos }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label for="selectProyecto" class="block text-gray-700">Proyecto:</label>
        <select v-model="selectedProyecto" required class="w-full p-2 border rounded">
          <option v-for="(proyecto, index) in proyectos" :key="index" :value="index">
            {{ proyecto.nombreProyecto }}
          </option>
        </select>
      </div>
      <button type="submit" class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Asociar</button>
    </form>
    <div class="mt-6">
      <h3 class="text-xl font-bold mb-2">Asociaciones Guardadas:</h3>
      <ul>
        <li v-for="(asociacion, index) in asociaciones" :key="index" class="mb-2 p-2 bg-gray-100 rounded flex justify-between items-center">
          <div>
            <strong>{{ asociacion.persona.nombres }} {{ asociacion.persona.apellidos }}</strong> - 
            Proyecto: <strong>{{ asociacion.proyecto.nombreProyecto }}</strong>
          </div>
          <div>
            <button @click="editarAsociacion(index)" class="bg-yellow-500 text-white p-1 rounded mr-2">Editar</button>
            <button @click="eliminarAsociacion(index)" class="bg-red-500 text-white p-1 rounded">Eliminar</button>
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
      selectedPersona: '',
      selectedProyecto: '',
      personas: JSON.parse(localStorage.getItem('personas')) || [],
      proyectos: JSON.parse(localStorage.getItem('proyectos')) || [],
      asociaciones: JSON.parse(localStorage.getItem('asociaciones')) || []
    }
  },
  methods: {
    asociarPersonaProyecto() {
      const nuevaAsociacion = {
        persona: { ...this.personas[this.selectedPersona] },
        proyecto: { ...this.proyectos[this.selectedProyecto] }
      };
      this.asociaciones.push(nuevaAsociacion);
      this.actualizarLocalStorage();
    },
    editarAsociacion(index) {
      const asociacion = this.asociaciones[index];
      this.selectedPersona = this.personas.findIndex(persona => persona.identificacion === asociacion.persona.identificacion);
      this.selectedProyecto = this.proyectos.findIndex(proyecto => proyecto.nombreProyecto === asociacion.proyecto.nombreProyecto);
      this.asociaciones.splice(index, 1);
    },
    eliminarAsociacion(index) {
      this.asociaciones.splice(index, 1);
      this.actualizarLocalStorage();
    },
    actualizarLocalStorage() {
      localStorage.setItem('asociaciones', JSON.stringify(this.asociaciones));
    }
  }
}
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>