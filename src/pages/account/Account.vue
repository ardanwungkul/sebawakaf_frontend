<script setup>
import Layouts from '@/layouts/Layouts.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuItems = ref([
  { text: 'Tentang Kami', icon: 'fas fa-info-circle', route: '/about-us' },
  {
    text: 'Press Release',
    icon: 'fas fa-newspaper',
    //    route: '/press-release'
  },
  {
    text: 'Kontak Kami',
    icon: 'fas fa-phone-alt',
    //   route: '/contact-us'
  },
  {
    text: 'Syarat & Ketentuan',
    icon: 'fas fa-file-alt',
    //    route: '/terms'
  },
  {
    text: 'Kebijakan Privasi',
    icon: 'fas fa-shield-alt',
    //    route: '/privacy-policy'
  },
  {
    text: 'Tanya Jawab',
    icon: 'fas fa-question-circle',
    //   route: '/question'
  },
])

function login() {
  // alert('Login button clicked')
}
</script>

<template>
  <Layouts>
    <!-- Header -->
    <div class="flex gap-1 items-center z-10 py-3 px-5 bg-white shadow-lg rounded-b-xl">
      <button
        @click="router.go(-1)"
        class="p-2 flex items-center justify-center w-10 h-10 cursor-pointer"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <p class="font-semibold">Akun</p>
    </div>

    <!-- Main Content -->
    <div class="px-5 py-3">
      <div class="space-y-2">
        <p class="text-sm text-center">
          Masuk untuk nikmati kemudahan berwakaf dan akses fitur lainnya.
        </p>
        <button
          class="w-full bg-[#6b8f76] text-white py-2 rounded-xl shadow-lg font-semibold text-sm cursor-pointer hover:opacity-80 transition-all duration-300"
        >
          Masuk Sekarang
        </button>
        <p class="text-center text-sm mb-5">
          Belum punya akun ?
          <router-link to="/register" class="text-blue-600 hover:underline"> Daftar </router-link>
        </p>
      </div>

      <hr class="border-t border-gray-200 mb-4" />

      <!-- Menu Section -->
      <div class="text-gray-900 bg-white rounded-xl py-3 px-5 shadow-lg">
        <ul class="divide-y divide-gray-200">
          <li v-for="(item, index) in menuItems" :key="index">
            <router-link :to="item.route" class="flex items-center justify-between py-3 text-base">
              <div class="flex items-center space-x-3 text-gray-800">
                <i :class="item.icon + ' text-lg w-5'"></i>
                <span>{{ item.text }}</span>
              </div>
              <i class="fas fa-chevron-right text-gray-400"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </Layouts>
</template>
