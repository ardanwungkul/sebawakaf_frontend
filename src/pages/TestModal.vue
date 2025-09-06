<script setup>
import { ref } from 'vue'
import ConfirmPayment from '@/component/modal/ConfirmPayment.vue'

const modalRef = ref(null)

const openModal = () => {
  modalRef.value?.show()
}
</script>

<template>
  <div class="p-6 space-y-4">
    <h1 class="text-xl font-bold mb-4">Halaman Test Modal</h1>
    
    <button
      @click="openModal"
      class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Buka Modal Wakaf
    </button>

    <ConfirmPayment ref="modalRef" />
  </div>
</template>
