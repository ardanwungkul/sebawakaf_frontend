<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import InputSwitch from 'primevue/inputswitch'

// Modal visibility
const visible = ref(false)

// Nominal Wakaf
const nominal = ref(0)

// Form data
const form = ref({
  nama: '',
  email: '',
  notelp: '',
  provinsi: null,
  kabkota: null,
  institusi: null,
  agreeContact: false,
  hideName: false,
})

// Table data
const tableData = ref([
  { item: "Nama Program", temporer: "Wakaf Uang", permanen: "Wakaf Uang" },
  { item: "Periode waktu", temporer: "Minimal 1 tahun", permanen: "Selamanya" },
  { item: "Wakaf Minimal", temporer: "Rp 1.000.000,-", permanen: "Tidak ada minimal" },
  { item: "Nama Deposito", temporer: "Wakif", permanen: "Nazhir (BWI)" },
  { item: "AIW < Rp 1 juta", temporer: "Tidak ada", permanen: "Atas nama wakif" },
  { item: "SWU < Rp 1 juta", temporer: "Tidak ada", permanen: "Tidak ada" },
  { item: "Perolehan AIW/SWU", temporer: "Langsung via Aplikasi", permanen: "Langsung via Aplikasi" },
  { item: "Bentuk AIW/SWU", temporer: "PDF", permanen: "PDF" }
])

// Form submit
const submitForm = () => {
  if (!form.value.nama.trim()) return alert('Nama wajib diisi.')
  if (!form.value.email.trim()) return alert('Email wajib diisi.')
  alert('Form submitted!')
}

// Back button
const goBack = () => {
  visible.value = false
}

// Change payment method (placeholder)
const changeMethod = () => {
  alert('Ubah metode pembayaran')
}

// Untuk membuat nominal bisa diubah via contenteditable
const onNominalInput = (event) => {
  const val = event.target.innerText.replace(/\D/g, '')
  nominal.value = val ? parseInt(val) : 0
}

// expose fungsi show() agar bisa dipanggil dari luar
const show = () => {
  visible.value = true
}
defineExpose({ show })
</script>

<template>
  <Dialog v-model:visible="visible" :modal="true" :closable="false" class="w-full max-w-lg">
    <div class="w-full max-w-3xl mx-auto flex flex-col">

      <!-- Header -->
      <header class="flex items-center h-12 bg-gray-100 sticky top-0 z-10 w-full px-4 shadow-md">
        <button @click="goBack" class="mr-2 p-2 rounded-full hover:bg-gray-200 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 class="font-semibold text-sm">Tunaikan Wakaf</h1>
      </header>

      <!-- Main content -->
      <main class="flex-grow px-4 py-4 space-y-6 overflow-y-auto">

        <!-- Table Informasi Wakaf -->
        <section>
          <h2 class="font-bold text-center text-base mb-2">Informasi Wakaf ASN Kemenag</h2>
          <p class="text-sm mb-4 text-justify">
            Gerakan wakaf uang ASN Kemenag mencakup jenis wakaf uang temporer atau permanen dengan ketentuan sebagai berikut:
          </p>
          <div class="overflow-x-auto mb-6">
            <table class="w-full border border-gray-300 text-sm border-collapse">
              <thead>
                <tr class="bg-white">
                  <th class="border border-gray-300 font-semibold text-left px-2 py-1">Item</th>
                  <th class="border border-gray-300 font-semibold text-left px-2 py-1">Wakaf Temporer</th>
                  <th class="border border-gray-300 font-semibold text-left px-2 py-1">Wakaf Permanen</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, index) in tableData" :key="index">
                  <td class="border border-gray-300 px-2 py-1">{{ row.item }}</td>
                  <td class="border border-gray-300 px-2 py-1">{{ row.temporer }}</td>
                  <td class="border border-gray-300 px-2 py-1">{{ row.permanen }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Bagian Informasi Program & Nominal -->
        <section class="mb-6 space-y-3">
          <p class="text-xs text-gray-400 mb-1">Anda akan berWakaf ke program</p>
          <h3 class="font-semibold text-lg leading-tight">Gerakan Wakaf Uang Kementerian Agama 1446 H</h3>
          <div class="mt-2">
            <label class="block text-gray-500 text-sm mb-1">Nominal Wakaf</label>
            <div
              class="border border-gray-300 rounded-lg px-4 py-4 text-xl font-extrabold"
              role="textbox"
              tabindex="0"
              contenteditable="true"
              @input="onNominalInput"
            >
              Rp {{ nominal }}
            </div>
          </div>

          <div class="mt-2">
            <h4 class="font-semibold text-sm mb-2">Pilih Metode Pembayaran</h4>
            <button
              class="flex items-center justify-between w-full border border-gray-300 rounded-md px-4 py-3"
              type="button"
              @click="changeMethod"
            >
              <div class="flex items-center space-x-3">
                <img
                  alt="QRIS payment method logo"
                  class="w-10 h-6"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_QRIS.svg/2560px-Logo_QRIS.svg.png"
                />
                <span class="text-sm font-normal">QRIS</span>
              </div>
              <span class="text-green-700 font-semibold text-xs flex items-center space-x-1">
                <span>Ubah Metode</span>
                <i class="fas fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </section>

        <!-- Wakif Form -->
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="font-semibold text-sm mb-2">Wakif</div>
          <div class="border border-gray-300 rounded-lg p-4 space-y-4">
            <div>
              <label class="block font-semibold text-sm mb-1">Nama <span class="text-red-600">*</span></label>
              <InputText v-model="form.nama" class="w-full" placeholder="Masukkan Nama Wakif" required />
            </div>
            <div>
              <label class="block font-semibold text-sm mb-1">Email <span class="text-red-600">*</span></label>
              <InputText v-model="form.email" type="email" class="w-full" placeholder="Masukkan Email Wakif" required />
            </div>
            <div>
              <label class="block font-semibold text-sm mb-1">No Telepon (Opsional)</label>
              <InputText v-model="form.notelp" type="tel" class="w-full" placeholder="Masukkan No Telepon Wakif" />
            </div>

            <!-- Wilayah -->
            <div>
              <label class="block font-semibold text-sm mb-1">Wilayah</label>
              <div class="space-y-2">
                <Dropdown v-model="form.provinsi" :options="['Provinsi 1','Provinsi 2']" placeholder="Pilih Provinsi" class="w-full" />
                <Dropdown v-model="form.kabkota" :options="['Kab/Kota 1','Kab/Kota 2']" placeholder="Pilih Kab/Kota" class="w-full" />
              </div>
            </div>
          </div>

          <div class="font-semibold text-sm mb-2">Informasi Institusi</div>
          <div class="border border-gray-300 rounded-lg p-4">
            <Dropdown v-model="form.institusi" :options="['Institusi 1','Institusi 2']" placeholder="Cari Asal Satuan Kerja" class="w-full" />
          </div>

          <div>
            <label class="flex items-start gap-3 bg-blue-100 rounded-md p-3 text-xs text-gray-800 cursor-pointer">
              <input type="checkbox" v-model="form.agreeContact" class="w-4 h-4 mt-1 rounded border-gray-300" />
              <span>
                Dengan mengisi kotak ini, Anda setuju untuk dihubungi oleh lembaga
                yang ada di dalam platform SATUWAKAF untuk tujuan promosi program.
                <a href="#" class="text-blue-700 underline">(Kebijakan Privasi)</a>.
              </span>
            </label>
          </div>

          <div class="flex items-center justify-between">
            <span class="font-semibold text-xs">Sembunyikan nama saya dari publikasi (Daftar Wakif)</span>
            <InputSwitch v-model="form.hideName" />
          </div>

          <Button label="Lanjut pembayaran" type="submit" class="w-full bg-green-600 text-white" />
        </form>

      </main>
    </div>
  </Dialog>
</template>
