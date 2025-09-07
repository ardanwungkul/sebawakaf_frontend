<script setup>
import { ref } from 'vue'
import Layouts from '@/layouts/Layouts.vue'
import Logo from '@/assets/images/seba-wakaf-logo.png'
import { useRouter } from 'vue-router'

const router = useRouter()
const expanded = ref(false)
</script>

<template>
  <Layouts>
    <div class="flex flex-col min-h-screen bg-white text-gray-700">
      <!-- Header -->
      <div class="flex items-center bg-[#4CAF50] text-white px-4 py-3">
        <button aria-label="Back" class="mr-3 text-white text-lg" @click="router.back()">
          <i class="fas fa-arrow-left"></i>
        </button>
        <h1 class="font-bold text-base">Kebijakan Privasi</h1>
      </div>

      <!-- Main Content -->
      <main class="px-4 py-4">
        <p class="mb-3 text-lg font-bold text-gray-900">Kebijakan Privasi</p>
        <p class="mb-3">
          Adanya Kebijakan Privasi ini adalah komitmen nyata dari <strong>SATUWAKAF Indonesia</strong> untuk menghargai dan melindungi setiap data atau informasi pribadi pengguna situs <strong>apps.satuwakaf.id</strong>.
        </p>

        <p class="mb-3 text-lg font-bold text-gray-900">Pengantar</p>
        <p class="mb-3">
          Kebijakan Privasi ini mengatur mengenai landasan dasar bagaimana kami menggunakan informasi Pribadi pengguna platform SATUWAKAF Indonesia. Kebijakan Privasi berlaku bagi seluruh Pengguna. Dengan tetap mengakses dan menggunakan layanan platform SATUWAKAF Indonesia, pengguna dianggap menyatakan persetujuannya terhadap segala ketentuan dalam Kebijakan Privasi ini.
        </p>
        <p class="mb-3">
          Pemberitahuan Privasi ini menjelaskan bagaimana kami mengumpulkan, menyimpan, menggunakan, mengelola, menguasai, mentransfer, mengungkapkan, dan melindungi informasi Pribadi anda. Sebelum anda menggunakan atau memberikan informasi apapun kepada Platform ini, mohon untuk membaca dan memahami terlebih dahulu mengenai Kebijakan Privasi ini.
        </p>

        <p class="mb-3 text-lg font-bold text-gray-900">Informasi</p>
        <p class="mb-3">
          Kami meminta informasi yang diperlukan agar dapat memenuhi permintaan anda untuk menggunakan platform ini. Informasi anda kami simpan dan gunakan sesuai dengan ketentuan Undang-Undang, peraturan, kebijakan, dan hukum pemerintah yang berlaku. Apabila anda memilih untuk tidak memberikan informasi apapun, kami mungkin tidak dapat memenuhi permintaan anda dalam menggunakan Platform ini.
        </p>
        <p class="mb-3">
          Informasi Pribadi anda digunakan untuk berbagai keperluan verifikasi, memastikan kejelasan informasi dan tujuan penggunaan platform, serta untuk mengirim pembaharuan atau pesan dari Platform secara berkala maupun instan. Dalam hal tertentu, informasi juga digunakan untuk meningkatkan mutu dan pelayanan Platform.
        </p>

        <p class="mb-3 text-lg font-bold text-gray-900">Perubahan atas Kebijakan ini</p>
        <p class="mb-3">
          Kami dapat mengubah Kebijakan Privasi ini dari waktu ke waktu. Kami tidak akan mengurangi hak anda tanpa persetujuan eksplisit dari anda. Jika terdapat perubahan yang signifikan, kami akan memberikan pemberitahuan kepada seluruh pengguna Platform melalui email, media sosial, maupun langsung melalui Platform.
        </p>

        <p class="mb-3 text-lg font-bold text-gray-900">Hukum</p>
        <p class="mb-3">
          Kebijakan Privasi ini diatur sesuai dengan hukum Republik Indonesia. Pengguna setuju bahwa tindakan hukum apapun atau sengketa yang mungkin timbul terkait situs dan/atau Kebijakan Privasi ini akan diselesaikan secara eksklusif dalam yurisdiksi Pengadilan Republik Indonesia.
        </p>
      </main>
    </div>
  </Layouts>
</template>
