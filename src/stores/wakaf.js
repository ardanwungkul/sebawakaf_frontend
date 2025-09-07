import { defineStore, acceptHMRUpdate } from 'pinia'
import { useStorage } from '@vueuse/core'
import API from '@/utils/api'
import router from '@/router'
import { useUIStore } from '@/stores/ui'
import { useResponseStore } from './response'

export const useWakafStore = defineStore('wakaf', {
  state: () => ({
    datas: [],
    wakif_data: [],
    data: [],
  }),
  actions: {
    async getWakif() {
      const uiStore = useUIStore()
      uiStore.isLoading = true
      try {
        const response = await API.get('/wakif')

        this.wakif_data = response.data.data
      } catch (error) {
        console.log(error)
      } finally {
        uiStore.isLoading = false
      }
    },
    async payment(form) {
      const responseStore = useResponseStore()
      const uiStore = useUIStore()
      uiStore.isLoading = true
      try {
        const response = await API.post('/payment', form)
        responseStore.addSuccess(response.data.message)
        console.log(response)
        window.location.href = response.data.data.invoice_url
      } catch (error) {
        if (error.response && error.response.status !== 422) throw error
        const errors = error.response.data.errors
        console.log(errors)

        Object.values(errors).forEach((messages) => {
          responseStore.addError(messages)
        })
      } finally {
        uiStore.isLoading = false
      }
    },
    async login(form, processing) {
      const responseStore = useResponseStore()
      const uiStore = useUIStore()
      processing.value = true
      uiStore.isLoading = true
      try {
        const response = await API.post('/login', form.value)
        responseStore.addSuccess(response.data.message)

        const fullUserObject = response.data.user
        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(fullUserObject), key).toString()

        this.encryptedUserData = encrypted
        this.token = response.data.token

        router.push({ name: 'dashboard' })
      } catch (error) {
        if (error.response && error.response.status !== 422) throw error
        const errors = error.response.data.errors
        console.log(errors)

        Object.values(errors).forEach((messages) => {
          // messages.forEach((message) => responseStore.addError(message))
          responseStore.addError(messages)
        })
      } finally {
        processing.value = false
        uiStore.isLoading = false
      }
    },
  },
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWakafStore, import.meta.hot))
}
