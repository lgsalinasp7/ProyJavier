<template>
  <div v-if="visible" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-6 rounded shadow-md w-1/3">
      <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
      <p class="mb-4">{{ message }}</p>
      <div class="flex justify-end">
        <button @click="close" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cerrar</button>
        <button @click="confirm" class="bg-red-500 text-white px-4 py-2 rounded">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    message: String,
    visible: Boolean
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
