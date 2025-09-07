<script setup>
import { ref } from 'vue'
import Layouts from '@/layouts/Layouts.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const items = ref([
  {
    title: "IKHTIAR RAMADHAN 1445 H",
    description: "Investasi untuk KeHidupan Terbaik di AkhiRat (IKHTIAR)...",
    time: "2 tahun yang lalu",
    img: "https://storage.googleapis.com/a1aa/image/7dcf3b5f-08ed-4e98-cae4-fc0cdc6954f8.jpg",
    alt: "Green banner with text IKHTIAR RAMADHAN 1445H and gold decorative elements",
  },
  {
    title: "Why Waqf?",
    description: "Wakaf berasal dari perkataan Arab “al-waqf” yang...",
    time: "2 tahun yang lalu",
    img: "https://storage.googleapis.com/a1aa/image/5c7072af-e183-42ff-4086-4be828e3db5a.jpg",
    alt: "Logo of Yayasan Misbahus Sunnah Gumilang with green and yellow elements",
  },
  {
    title: "What is Waqf",
    description: null,
    time: "2 tahun yang lalu",
    img: "https://storage.googleapis.com/a1aa/image/928db57b-0324-43d9-1572-0939da1382b2.jpg",
    alt: "Blue infographic image titled WAQF: HOW IT WORKS with icons and text",
  },
])

const viewMode = ref('list') // 'list' atau 'grid'

function toggleView() {
  viewMode.value = viewMode.value === 'list' ? 'grid' : 'list'
}

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
      <h1 class="font-bold text-base">Press Release</h1>
    </div>

    <!-- Icon bar -->
    <div class="border-b border-gray-200 py-3 flex justify-center space-x-4">
      <button @click="toggleView">
        <i class="fas" :class="viewMode === 'list' ? 'fa-list text-gray-700' : 'fa-th text-gray-700 text-xl'"></i>
      </button>
    </div>

    <!-- List or Grid -->
    <main class="p-4">
      <!-- List View -->
      <div v-if="viewMode === 'list'" class="divide-y divide-gray-200">
        <article
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center justify-between px-4 py-3"
        >
          <div class="flex-1 pr-3">
            <h2 class="font-extrabold text-sm leading-5 text-black mb-1">{{ item.title }}</h2>
            <p v-if="item.description" class="text-gray-500 text-xs leading-4 truncate">{{ item.description }}</p>
            <div class="flex items-center text-gray-500 text-xs mt-2 space-x-1">
              <i class="far fa-clock text-xs"></i>
              <span>{{ item.time }}</span>
            </div>
          </div>
          <img :alt="item.alt" class="w-[80px] h-[80px] object-cover rounded" :src="item.img" width="80" height="80" />
        </article>
      </div>

     <!-- Grid View -->
<div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
  <div
    v-for="(item, index) in items"
    :key="index"
    class="border rounded overflow-hidden flex flex-col"
  >
    <!-- Gambar kotak -->
    <div class="w-full aspect-square">
      <img :alt="item.alt" :src="item.img" class="w-full h-full object-cover" />
    </div>
    
    <!-- Info di bawah gambar -->
    <div class="p-2 flex flex-col items-center justify-center flex-1">
      <h2 class="font-bold text-sm text-center line-clamp-1">{{ item.title }}</h2>
      <p v-if="item.description" class="text-gray-500 text-xs text-center line-clamp-2 mt-1">{{ item.description }}</p>
      <div class="flex items-center text-gray-500 text-xs mt-2 space-x-1">
        <i class="far fa-clock text-xs"></i>
        <span>{{ item.time }}</span>
      </div>
    </div>
  </div>
</div>

    </main>
  </Layouts>
</template>

