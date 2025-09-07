<script setup>
import Layouts from '@/layouts/Layouts.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const contacts = ref([
  {
    title: "Hubungi kami melalui email",
    description: "Ajukan pertanyaan atau sarannmu melalui email",
    icon: "fas fa-envelope",
    bgColor: "bg-[#4CAF50]",
  },
  {
    title: "Alamat Kantor",
    description:
      "Taman Mini Indonesia Indah (TMII, Gedung Bayt Al-Qur'an, Pintu Utama, Ceger, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13560.",
    icon: "fas fa-map-marked-alt",
    bgColor: "bg-[#4CAF50]",
  },
])

function goBack() {
  router.go(-1)
}
</script>

<template>
  <Layouts>
    <!-- Header -->
    <div class="flex items-center bg-[#4CAF50] text-white px-4 py-3">
      <button aria-label="Back" class="mr-3 text-white text-lg" @click="goBack">
        <i class="fas fa-arrow-left"></i>
      </button>
      <h1 class="font-bold text-base">Kontak Kami</h1>
    </div>

    <!-- Main Content -->
    <div class="px-4 py-6">
      <!-- Gambar ilustrasi -->
      <div class="flex justify-center mt-6">
        <img
          alt="Illustration"
          class="object-contain"
          height="80"
          width="80"
          src="https://storage.googleapis.com/a1aa/image/7645599f-e81b-42de-ea7b-1eca3ca821d5.jpg"
        />
      </div>

      <!-- Judul dan deskripsi -->
      <h2 class="text-center font-semibold text-base mb-2">Butuh Bantuan?</h2>
      <p class="text-center text-gray-500 text-sm leading-relaxed mb-6 max-w-[320px] mx-auto">
        Jangan sungkan untuk menghubungi Kami jika Anda memiliki pertanyaan, kendala, atau saran
        tentang SATUWAKAF.
      </p>

      <hr class="border-t border-gray-200 mb-4" />

      <!-- Kontak Section -->
      <section aria-label="Kontak SATUWAKAF Indonesia">
        <ul class="divide-y divide-gray-200">
          <li
            v-for="(item, index) in contacts"
            :key="index"
            class="flex items-center justify-between py-4 cursor-pointer"
          >
            <div class="flex items-center">
              <!-- Icon -->
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                :class="item.bgColor"
              >
                <i :class="item.icon + ' text-white text-lg'"></i>
              </div>

              <!-- Text -->
              <div class="ml-4">
                <h3 class="font-semibold text-base leading-5">{{ item.title }}</h3>
                <p class="text-gray-500 text-sm leading-relaxed">{{ item.description }}</p>
              </div>
            </div>

            <!-- Chevron -->
            <i class="fas fa-chevron-right text-gray-400 text-lg"></i>
          </li>
        </ul>
      </section>
    </div>
  </Layouts>
</template>
