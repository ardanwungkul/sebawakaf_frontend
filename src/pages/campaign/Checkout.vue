<script setup>
import Layouts from '@/layouts/Layouts.vue'
import { Dialog, InputNumber, InputSwitch } from 'primevue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import bismillahSVG from '@/assets/images/bismillah.svg'
import { useWakafStore } from '@/stores/wakaf'

const router = useRouter()
const tableData = ref([
  { item: 'Nama Program', temporer: 'Wakaf Uang', permanen: 'Wakaf Uang' },
  { item: 'Periode waktu', temporer: 'Minimal 1 tahun', permanen: 'Selamanya' },
  { item: 'Wakaf Minimal', temporer: 'Rp 1.000.000,-', permanen: 'Tidak ada minimal' },
  { item: 'Nama Deposito', temporer: 'Wakif', permanen: 'Nazhir (BWI)' },
  { item: 'AIW < Rp 1 juta', temporer: 'Tidak ada', permanen: 'Atas nama wakif' },
  { item: 'SWU < Rp 1 juta', temporer: 'Tidak ada', permanen: 'Tidak ada' },
  {
    item: 'Perolehan AIW/SWU',
    temporer: 'Langsung via Aplikasi',
    permanen: 'Langsung via Aplikasi',
  },
  { item: 'Bentuk AIW/SWU', temporer: 'PDF', permanen: 'PDF' },
])
const form = ref({
  nama: null,
  no_hp: null,
  email: null,
  nominal: null,
  hide_name: false,
  deskripsi: 'Wakaf',
})

const wakafStore = useWakafStore()
onMounted(() => {
  const userDataFormString = localStorage.getItem('userDataForm')
  if (userDataFormString) {
    const userDataForm = JSON.parse(userDataFormString)
    form.value.nama = userDataForm.nama
    form.value.no_hp = userDataForm.no_hp
    form.value.email = userDataForm.email
  }
})

const visible = ref(false)

async function submit() {
  visible.value = true
}
async function payment() {
  await wakafStore.payment(form.value)
}
</script>
<template>
  <Layouts>
    <div class="flex gap-1 items-center z-10 py-3 px-5 bg-white shadow-lg rounded-b-xl">
      <button
        @click="router.go(-1)"
        class="p-2 flex items-center justify-center w-10 h-10 cursor-pointer"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <p class="font-semibold">Tunaikan Wakaf</p>
    </div>

    <div class="px-5 py-3">
      <section>
        <h2 class="font-bold text-center text-sm mb-1">Informasi Wakaf ASN Kemenag</h2>
        <p class="text-xs mb-2 text-justify">
          Gerakan wakaf uang ASN Kemenag mencakup jenis wakaf uang temporer atau permanen dengan
          ketentuan sebagai berikut:
        </p>

        <!-- Pembungkus table dengan rounded dan overflow hidden -->
        <div class="overflow-x-auto mb-6 rounded-xl shadow-lg overflow-hidden">
          <table class="w-full text-xs bg-white">
            <thead>
              <tr class="bg-white">
                <th class="border border-gray-200 font-semibold text-center px-2 py-1">Item</th>
                <th class="border border-gray-200 font-semibold text-center px-2 py-1">
                  Wakaf Temporer
                </th>
                <th class="border border-gray-200 font-semibold text-center px-2 py-1">
                  Wakaf Permanen
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in tableData" :key="index">
                <td class="border border-gray-200 px-2 py-1 text-xs">{{ row.item }}</td>
                <td class="border border-gray-200 px-2 py-1 text-xs">{{ row.temporer }}</td>
                <td class="border border-gray-200 px-2 py-1 text-xs">{{ row.permanen }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <form class="space-y-3" @submit.prevent="submit">
        <section class="space-y-3 bg-white rounded-xl px-5 py-3 shadow-lg">
          <div class="pb-3 border-b border-gray-200">
            <p class="text-xs text-gray-400">Anda akan berWakaf ke program</p>
            <h3 class="font-semibold text-base leading-tight">
              Gerakan Wakaf Uang Kementerian Agama 1446 H
            </h3>
          </div>
          <div>
            <label class="block text-xs mb-1">Nominal Wakaf</label>
            <InputNumber
              v-model="form.nominal"
              placeholder="Masukkan Nominal Wakaf"
              input-class="!text-xs !rounded-LG"
              inputId="currency-id"
              mode="currency"
              currency="IDR"
              locale="id"
              :minFractionDigits="0"
              :maxFractionDigits="0"
              fluid
              required
            />
          </div>
          <fieldset class="border border-gray-200 rounded-xl p-3">
            <legend class="text-xs px-3">Wakif</legend>
            <div class="space-y-3">
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
              </div>
            </div>
          </fieldset>
          <div>
            <label
              class="flex items-start gap-1 bg-blue-100 rounded-md p-3 text-xs text-gray-600 cursor-pointer"
            >
              <input type="checkbox" class="w-4 h-4 !rounded-lg border !border-gray-200" required />
              <span class="text-xs">
                Dengan mengisi kotak ini, Anda setuju untuk dihubungi oleh lembaga yang ada di dalam
                platform SEBA WAKAF untuk tujuan promosi program.
                <a href="#" class="text-blue-700 underline">(Kebijakan Privasi)</a>.
              </span>
            </label>
          </div>

          <div class="flex items-center justify-between">
            <span class="font-semibold text-xs"
              >Sembunyikan nama saya dari publikasi (Daftar Wakif)</span
            >
            <InputSwitch v-model="form.hide_name" />
          </div>
        </section>

        <button
          type="submit"
          class="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 bg-[#6b8f76] cursor-pointer text-white hover:opacity-90 py-2 px-4 w-full"
        >
          Lanjutkan Pembayaran
        </button>

        <Dialog
          v-model:visible="visible"
          :style="{ width: '25rem' }"
          position="bottom"
          :modal="true"
          :draggable="false"
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
            <p class="text-sm font-medium">Ikrar Wakaf</p>
          </template>
          <div class="">
            <div class="flex justify-center">
              <img :src="bismillahSVG" alt="" />
            </div>
            <p class="text-xs text-center text-gray-500">
              Dengan ini saya sebagai Wakif telah mengikrarkan Wakaf kepada Lembaga Kenazhiran BWI
              untuk program Gerakan Wakaf Uang Kementerian Agama 1446 H sebesar Rp
              <span>{{ form.nominal.toLocaleString('id-ID') }}</span> dalam bentuk Wakaf
            </p>
            <button
              @click="payment"
              type="button"
              class="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 bg-[#6b8f76] cursor-pointer text-white hover:opacity-90 py-2 px-4 w-full mt-3"
            >
              Saya Sudah Baca Ikrar dan Lanjutkan
            </button>
          </div>
        </Dialog>
      </form>
    </div>
  </Layouts>
</template>
