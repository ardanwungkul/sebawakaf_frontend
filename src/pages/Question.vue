<script setup>
import Layouts from '@/layouts/Layouts.vue'
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const openIndex = ref(null)
const faqs = ref([
  { 
    question: "Apa itu Wakaf?", 
    answer: `
Wakaf berasal dari perkataan Arab “al-waqf” yang bermakna “al-habsu” atau al-man’u yang artinya menahan, berhenti, diam, mengekang atau menghalang. Apabila kata tersebut dihubungkan dengan harta seperti tanah, binatang dan yang lain, ia berarti pembekuan hak milik untuk faedah tertentu.

Adapun secara istilah syariat (terminologi), wakaf berarti menahan hak milik atas materi harta benda (al-‘ain) dari pewakaf, dengan tujuan menyedekahkan manfaat atau faedahnya (al-manfa‘ah) untuk kebajikan umat Islam, kepentingan agama dan atau kepada penerima wakaf yang telah ditentukan oleh pewakaf.

Dengan kata lain, wakaf menahan asalnya dan mengalirkan hasilnya. Orang yang berwakaf berarti melepas kepemilikan atas harta yang bermanfaat, dengan tidak mengurangi bendanya untuk diserahkan kepada perorangan atau kelompok agar dimanfaatkan untuk tujuan-tujuan yang tidak bertentangan dengan syariat.

Dengan cara ini, harta wakaf dapat dipergunakan untuk mengatasi berbagai permasalahan sosial demi kemaslahatan umat secara berkelanjutan tanpa menghilangkan harta asal: mulai dari pendidikan, kesehatan, ekonomi mikro, sarana transportasi, tempat ibadah, sarana kegiatan dakwah dan sebagainya. Dengan wakaf nilai kekayaan kekal, manfaat dan kebaikannya akan terus bertambah.

Harta wakaf hanya berhak digunakan dan dimanfaatkan tanpa berhak memilikinya. Berbeda dengan zakat yang boleh dimiliki individu dan diperjualbelikan.

Muslim yang berwakaf bukan saja mendapatkan pahala saat memberikan wakaf, tetapi akan terus mendapat kucuran pahala selama benda yang diwakafkannya dimanfaatkan orang lain meskipun pewakaf tersebut sudah meninggal dunia.
    ` 
  },
  { 
    question: "Apa Saja Rukun Wakaf?", 
    answer: `
RUKUN WAKAF

Imam Nawawi dalam kitab Raudhatut-Thalibin menjelaskan bahwa rukun wakaf ada empat rukun yang harus dipenuhi dalam berwakaf:

1. Al-waqif (orang yang mewakafkan),
2. Al-mauquf (harta yang diwakafkan),
3. Al-mauquf ‘alaih (pihak yang dituju untuk menerima manfaat dari wakaf tersebut),
4. Shighah (lafaz ikrar wakaf dari orang yang mewakafkan).

Muslim yang berwakaf tak hanya mendapatkan pahala saat menyerahkan wakaf, tapi akan terus mendapat kucuran pahala meskipun pewakaf tersebut sudah meninggal dunia.

SYARAT-SYARAT WAKAF

1. Syarat-syarat Orang yang Berwakaf (Al-Waqif):

a. Memiliki secara penuh harta itu, artinya dia merdeka untuk mewakafkan harta itu kepada siapa yang ia kehendaki.

b. Berakal. Tidak sah wakaf orang bodoh, orang gila, atau orang yang sedang mabuk.

c. Berusia balig dan bisa bertransaksi

d. Mampu bertindak secara hukum (rasyid).
    ` 
  },
  { 
    question: "Prosedur Pendaftaran Lembaga Kenazhiran untuk bergabung sebagai Kontributor Platform SATUWAKAF Indonesia", 
    answer: `
1. Melakukan registrasi/pendaftaran pada laman https://satuwakaf.id/lembaga

2. Setelah proses registrasi/pendaftaran selesai, tim SATUWAKAF akan menghubungi melalui email/WA untuk memberikan arahan mengenai proses selanjutnya

3. Persiapkan dokumen-dokumen yang diperlukan untuk keperluan verifikasi lembaga yang didaftarkan
    ` 
  }
])

const detailsRefs = ref([]) // ref untuk semua <details>
function goBack() {
  router.go(-1)
}

// Toggle FAQ, hanya satu yang terbuka
function toggleDetail(index) {
  if (openIndex.value === index) {
    openIndex.value = null
  } else {
    openIndex.value = index
  }
}
</script>

<template>
  <Layouts>
    <!-- Header -->
    <div class="flex items-center bg-[#4CAF50] text-white px-4 py-3">
      <button
        aria-label="Back"
        class="mr-3 text-white text-lg"
        @click="goBack"
      >
        <i class="fas fa-arrow-left"></i>
      </button>
      <h1 class="font-bold text-base">Tanya Jawab</h1>
    </div>

    <!-- Main Content -->
    <div class="px-4 py-4 flex-grow text-black text-base">
      <section aria-label="FAQ" class="space-y-4">
        <details
          v-for="(item, index) in faqs"
          :key="index"
          :open="openIndex === index"
          @click.prevent="toggleDetail(index)"
          class="border-b border-gray-200 pb-2"
        >
          <summary class="cursor-pointer list-none flex justify-between items-center">
            <span class="mr-3">{{ item.question }}</span>
            <i
              class="fas fa-chevron-down text-black transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === index }"
            ></i>
          </summary>
          <div class="mt-2 whitespace-pre-line text-sm text-gray-500">
            {{ item.answer }}
          </div>
        </details>
      </section>
    </div>
  </Layouts>
</template>