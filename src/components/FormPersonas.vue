<template>
    <section id="form-personas" class="form-section">
      <h2>Personas</h2>
      <form @submit.prevent="guardarPersona">
        <div class="form-group">
          <label for="nombres">Nombres:</label>
          <input type="text" v-model="persona.nombres" required>
        </div>
  
        <div class="form-group">
          <label for="apellidos">Apellidos:</label>
          <input type="text" v-model="persona.apellidos" required>
        </div>
  
        <div class="form-group">
          <label for="tipoIdentificacion">Tipo Identificación:</label>
          <select v-model="persona.tipoIdentificacion" required>
            <option value="">Selecciona una opción</option>
            <option value="Cedula">Cédula</option>
            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="identificacion">Identificación:</label>
          <input type="text" v-model="persona.identificacion" required>
        </div>
  
        <div class="form-group">
          <label for="fechaNacimiento">Fecha de Nacimiento:</label>
          <input type="date" v-model="persona.fechaNacimiento" required>
        </div>
  
        <div class="columna">
          <div class="form-group">
            <label for="ciudadResidencia">Ciudad de Residencia:</label>
            <input type="text" v-model="persona.ciudadResidencia" required>
          </div>
  
          <div class="form-group">
            <label for="direccion">Dirección:</label>
            <input type="text" v-model="persona.direccion" required>
          </div>
        </div>
  
        <button class="Btnguardar" type="submit">Guardar</button>
      </form>
  
      <div id="personasList">
        <h3>Personas Guardadas:</h3>
        <ul>
          <li v-for="(persona, index) in personas" :key="index">
            {{ persona.nombres }} {{ persona.apellidos }} - {{ persona.tipoIdentificacion }}: {{ persona.identificacion }}
            <button @click="editarPersona(index)">Editar</button>
            <button @click="eliminarPersona(index)">Eliminar</button>
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
 
  </style>