<template>
  <section class="bg-white p-6 rounded shadow-md">
    <h2 class="text-2xl font-bold mb-4">Personas</h2>
    <form @submit.prevent="guardarPersona">
      <div class="mb-4">
        <label for="nombres" class="block text-gray-700">Nombres:</label>
        <input type="text" v-model="persona.nombres" required class="w-full p-2 border rounded">
      </div>
      <div class="mb-4">
        <label for="apellidos" class="block text-gray-700">Apellidos:</label>
        <input type="text" v-model="persona.apellidos" required class="w-full p-2 border rounded">
      </div>
      <div class="mb-4">
        <label for="tipoIdentificacion" class="block text-gray-700">Tipo Identificación:</label>
        <select v-model="persona.tipoIdentificacion" required class="w-full p-2 border rounded">
          <option value="">Selecciona una opción</option>
          <option value="Cedula">Cédula</option>
          <option value="Tarjeta de identidad">Tarjeta de identidad</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="identificacion" class="block text-gray-700">Identificación:</label>
        <input type="text" v-model="persona.identificacion" required class="w-full p-2 border rounded">
      </div>
      <div class="mb-4">
        <label for="fechaNacimiento" class="block text-gray-700">Fecha de Nacimiento:</label>
        <input type="date" v-model="persona.fechaNacimiento" required class="w-full p-2 border rounded">
      </div>
      <div class="flex gap-4 mb-4">
        <div class="flex-1">
          <label for="ciudadResidencia" class="block text-gray-700">Ciudad de Residencia:</label>
          <input type="text" v-model="persona.ciudadResidencia" required class="w-full p-2 border rounded">
        </div>
        <div class="flex-1">
          <label for="direccion" class="block text-gray-700">Dirección:</label>
          <input type="text" v-model="persona.direccion" required class="w-full p-2 border rounded">
        </div>
      </div>
      <button type="submit" class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Guardar</button>
    </form>
    <div class="mt-6">
      <h3 class="text-xl font-bold mb-2">Personas Guardadas:</h3>
      <ul>
        <li v-for="(persona, index) in personas" :key="index" class="mb-2 p-2 bg-gray-100 rounded flex justify-between items-center">
          {{ persona.nombres }} {{ persona.apellidos }} - {{ persona.tipoIdentificacion }}: {{ persona.identificacion }}
          <div>
            <button @click="editarPersona(index)" class="bg-yellow-500 text-white p-1 rounded mr-2">Editar</button>
            <button @click="eliminarPersona(index)" class="bg-red-500 text-white p-1 rounded">Eliminar</button>
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
      persona: {
        nombres: '',
        apellidos: '',
        tipoIdentificacion: '',
        identificacion: '',
        fechaNacimiento: '',
        ciudadResidencia: '',
        direccion: ''
      },
      personas: JSON.parse(localStorage.getItem('personas')) || [],
      editIndex: -1
    }
  },
  methods: {
    guardarPersona() {
      if (this.editIndex === -1) {
        this.personas.push({ ...this.persona });
      } else {
        this.personas[this.editIndex] = { ...this.persona };
        this.editIndex = -1;
      }
      this.actualizarLocalStorage();
      this.resetForm();
    },
    editarPersona(index) {
      this.persona = { ...this.personas[index] };
      this.editIndex = index;
    },
    eliminarPersona(index) {
      this.personas.splice(index, 1);
      this.actualizarLocalStorage();
    },
    resetForm() {
      this.persona = {
        nombres: '',
        apellidos: '',
        tipoIdentificacion: '',
        identificacion: '',
        fechaNacimiento: '',
        ciudadResidencia: '',
        direccion: ''
      };
    },
    actualizarLocalStorage() {
      localStorage.setItem('personas', JSON.stringify(this.personas));
    }
  }
}
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>