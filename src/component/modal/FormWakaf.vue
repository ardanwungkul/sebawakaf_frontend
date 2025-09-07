<script setup>
import { ref } from 'vue'
import ConfirmPayment from '@/component/modal/ConfirmPayment.vue'
import { Dialog } from 'primevue'
import { useRoute, useRouter } from 'vue-router'

const visible = ref(false)
const router = useRouter()
const route = useRoute()

const form = ref({
  nama: null,
  no_hp: null,
  email: null,
})

async function submit() {
  localStorage.setItem('userDataForm', JSON.stringify(form.value))
  router.push({ name: 'campaign.checkout', params: { slug: route.params.slug } })
}
</script>

<template>
  <div>
    <button
      @click="visible = true"
      class="w-full bg-[#6b8f76] text-white py-2 rounded-xl shadow-lg font-semibold text-sm cursor-pointer"
    >
      Wakaf Sekarang
    </button>

    <Dialog
      v-model:visible="visible"
      modal
      class="w-full max-w-xs"
      :pt="{
        root: {
          class: '!px-5 !py-3',
        },
        header: {
          class: '!p-0 border-b border-gray-200',
        },
        content: {
          class: '!px-0 !py-3 no-scrollbar',
        },
      }"
    >
      <template #header>
        <p class="text-sm font-medium">Wakaf Tanpa Akun</p>
      </template>
      <div class="text-sm">
        <form class="space-y-3" @submit.prevent="submit">
          <div class="grid gap-1">
            <label class="flex items-center gap-2 text-xs leading-none" for="nama"
              >Nama<span class="text-sx text-red-500">*</span></label
            ><input
              type="text"
              class="h-9 w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-1 shadow-xs text-xs"
              placeholder="Masukkan Nama Anda"
              id="nama"
              v-model="form.nama"
              required
            />
          </div>
          <div class="grid gap-1">
            <label class="flex items-center gap-2 text-xs leading-none" for="no_hp"
              >No Telepon<span class="text-sx text-red-500">*</span></label
            ><input
              type="number"
              class="h-9 w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-1 shadow-xs text-xs !appearance-none"
              placeholder="Masukkan Nomor Telepon"
              id="no_hp"
              v-model="form.no_hp"
              required
            />
          </div>
          <div class="grid gap-1">
            <label class="flex items-center gap-2 text-xs leading-none" for="email"
              >Email<span class="text-sx text-red-500">*</span></label
            ><input
              type="email"
              class="h-9 w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-1 shadow-xs text-xs !appearance-none"
              placeholder="Masukkan Email Anda"
              id="email"
              v-model="form.email"
              required
            />
            <p class="text-[10px] italic text-gray-400">
              *Masukkan email aktif untuk menerima rincian dan update status transaksi.
            </p>
          </div>

          <button
            type="submit"
            class="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 bg-[#6b8f76] cursor-pointer text-white hover:opacity-90 py-2 px-4 w-full"
          >
            Lanjutkan BerWakaf
          </button>
          <div class="w-full h-0.5 border border-gray-100"></div>
          <div class="flex gap-1 justify-center">
            <p class="text-center text-xs font-medium text-gray-500 w-min whitespace-nowrap">
              Sudah punya akun ?
            </p>
            <router-link class="text-xs text-blue-500 hover:underline">Masuk</router-link>
          </div>
          <div class="w-full">
            <span class="text-[0.65rem] block !text-center text-gray-600 leading-4 italic"
              >*berwakaf lebih baik dengan memiliki akun, karena anda akan dapat memperoleh AIW
              &amp; Serifikat Wakaf langsung di akun anda.</span
            >
          </div>
        </form>
      </div>
    </Dialog>
  </div>
</template>
