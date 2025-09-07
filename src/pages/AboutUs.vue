<script setup>
import { ref } from 'vue'
import Layouts from '@/layouts/Layouts.vue'
import Logo from '@/assets/images/seba-wakaf-logo.png'
import { useRouter } from 'vue-router'

const router = useRouter()
const expanded = ref(false)

function goBack() {
  router.go(-1)
}
</script>

<template>
  <Layouts>
    <!-- Header -->
    <div class="flex items-center bg-[#4a913c] text-white px-4 py-3">
      <button
        aria-label="Back"
        class="mr-3 text-white text-lg"
        @click="goBack"
      >
        <i class="fas fa-arrow-left"></i>
      </button>
      <h1 class="font-semibold text-base">
        Tentang Kami
      </h1>
    </div>

    <!-- Main Content -->
    <div class="px-4 py-4 text-gray-900">
      <h1 class="font-bold text-lg mb-4">
        Profil Lembaga Kenazhiran PBWI Jabar
      </h1>

      <!-- Logo -->
      <div class="flex justify-center mb-6">
        <img
          :src="Logo"
          alt="Logo Seba Wakaf"
          class="w-36 h-auto"
        />
      </div>

      <!-- Konten Lengkap -->
      <p class="mb-3 text-sm text-gray-600">
        Lembaga Kenazhiran PBWI Jabar adalah Lembaga Kenazhiran yang sudah mendapat
        pengesahan dari BWI Pusat dengan nomor 3.3.00514. Hal tersebut menunjukan bahwa
        Lembaga Kenazhiran PBWI Jabar Adalah Lembaga yang Terverifikasi dan sebagaimana
        tercantum dalam Undang-undang (UU) Wakaf No. 41 Tahun 2004, Tugas Nazhir adalah
        untuk melakukan pengadministrasian harta benda wakaf, menjaga, mengelola, dan
        mengembangkan harta wakaf sesuai peruntukannya, mengawasi dan melindungi harta
        wakaf, baik benda wakaf bergerak (uang, logam mulia, surat berharga, kendaraan, hak
        atas kekayaan intelektual, hak sewa dan benda bergerak lain sesuai dengan ketentuan
        syariah dan peraturan perundang-undangan yang berlaku) dan benda wakaf tidak
        bergerak (hak atas tanah sesuai dengan ketentuan peraturan perundangundangan yang
        berlaku baik yang sudah maupun yang belum terdaftar, bangunan atau bagian bangunan
        yang berdiri di atas tanah sebagaimana dimaksud pada poin diatas, tanaman dan benda
        lain yang berkaitan dengan tanah, hak milik atas satuan rumah susun sesuai dengan
        ketentuan peraturan perundang-undangan yang berlaku, benda tidak bergerak lain
        sesuai dengan ketentuan syariah dan peraturan perundang-undangan yang berlaku)
        serta melaporkan pelaksanaan tugas kepada Badan Wakaf Indonesia (BWI).
      </p>

      <p class="mb-3 text-sm text-gray-600">
        Seba Wakaf Jabar Istimewa, yaitu Gerakan memisahkan hasil kegiatan pengelolaan
        benda wakaf tidak bergerak, benda wakaf bergerak dan hasil pelayanan jasa yang
        menjadi sumber penghasilan berbasis nilai kearifan sunda untuk kepentingan ibadah
        dan kesejahteraan masyarakat Jawa Barat yang Gemah Ripah Repeh Rapih.
      </p>

      <p class="mb-3 text-sm text-gray-600">
        Seba singkatan dari Setor Bareng macam-macam benda wakaf dari wakif kepada
        Nazhir Wakaf sesuai ketentuan dan peraturan perundangan yang berlaku tentang
        perwakafan. Seba Wakaf Jabar Istimewa sebagaimana di maksud pada poin 1 (satu)
        dan 2 (dua) diatas diprioritaskan berupa gerakan Satu Juta Wakaf Uang.
      </p>

      <h2 class="font-bold text-base mb-2">Visi</h2>
      <p class="mb-3 text-sm text-gray-600">
        Program Seba Wakaf Jabar Istimewa adalah menjadikan Provinsi Jawa Barat
        Istimewa sebagai Provinsi Wakaf yang Gemah Ripah Repeh Rapih.
      </p>

      <h2 class="font-bold text-base mb-2">Misi</h2>
      <p class="mb-3 text-sm text-gray-600">
        Program Seba Wakaf Jabar Istimewa adalah memajukan dan mengembangkan
        Wakaf Produktif, benda wakaf bergerak dan benda wakaf tidak bergerak untuk
        kepentingan ibadah dan kesejahteraan masyarakat mustahiq wakaf (maukuf ‘alaih)
        yang di lembur terurus dan yang di kota tertata.
      </p>

      <h2 class="font-bold text-base mb-2">Peruntukan</h2>
      <p class="mb-3 text-sm text-gray-600">
        Program Seba Wakaf Jabar Istimewa Adalah Sarana dan Kegiatan
        Ibadah; Sarana dan Kegiatan Pendidikan; Bantuan kepada Fakir, Miskin, Anak
        Terlantar, Yatim Piatu Dan Beasiswa; Kesejahteraan umum lainnya yang tidak
        bertentangan dengan syari’ah dan perundang-undangan (Pasal 22, UU RI
        N0.41/2024 tentang Wakaf).
      </p>
    </div>
  </Layouts>
</template>
