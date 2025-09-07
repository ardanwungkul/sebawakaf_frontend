<script setup>
import { useUIStore } from './stores/ui'
import ProgressBar from '@/component/ProgressBar.vue'
import { useToast } from 'primevue/usetoast'
import { ref, watch } from 'vue'
import { useResponseStore } from './stores/response'

const ui = useUIStore()
const responseStore = useResponseStore()
const messages = ref([])

watch(
  () => responseStore.errors,
  (errors) => {
    if (errors.length > 0) {
      errors.forEach((msg) => {
        toast.add({ severity: 'error', summary: msg, life: 3000 })
      })

      responseStore.clearErrors()
    }
  },
)

watch(
  () => responseStore.success,
  (success) => {
    if (success.length > 0) {
      success.forEach((msg) => {
        toast.add({ severity: 'success', summary: msg, life: 3000 })
      })
      responseStore.clearSuccess()
    }
  },
)
</script>

<template>
  <Toast
    :pt="{
      buttonContainer: {
        class: '!w-[28px] !h-[28px] !flex !items-center !justify-center',
      },
      closeButton: {
        class: '!my-auto',
      },
      messageContent: {
        class: '!items-center',
      },
    }"
  />
  <div>
    <ProgressBar :isLoading="ui.isLoading" :mode="'indeterminate'" :value="ui.loadingValue" />
    <router-view />
  </div>
</template>
