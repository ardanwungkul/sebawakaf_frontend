<script setup>
import Layouts from '@/layouts/Layouts.vue'
import { Carousel } from 'primevue'
import { ref } from 'vue'

import Banner_1 from '@/assets/images/banner/wakaf-uang-kemenag-banner-1.png'
import Banner_2 from '@/assets/images/banner/wakaf-uang-kemenag-banner-2.png'
import Banner_3 from '@/assets/images/banner/wakaf-uang-kemenag-banner-3.png'
import Banner_4 from '@/assets/images/banner/wakaf-uang-kemenag-banner-4.png'
import Banner_5 from '@/assets/images/banner/wakaf-uang-kemenag-banner-5.png'
import Banner_6 from '@/assets/images/banner/wakaf-uang-kemenag-banner-6.png'
import { useRoute } from 'vue-router'

const route = useRoute()
const banners = ref([
  {
    image: Banner_1,
  },
  {
    image: Banner_2,
  },
  {
    image: Banner_3,
  },
  {
    image: Banner_4,
  },
  {
    image: Banner_5,
  },
  {
    image: Banner_6,
  },
])
</script>
<template>
  <Layouts>
    <div>
      <div class="flex gap-1 items-center z-10 py-3 px-5 bg-white shadow-lg rounded-b-xl">
        <button
          @click="router.go(-1)"
          class="p-2 flex items-center justify-center w-10 h-10 cursor-pointer"
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <p class="font-semibold">{{ route.meta.title }}</p>
      </div>
      <div class="pt-3">
        <Carousel :value="banners" :numVisible="1" :numScroll="1" autoplayInterval="3000">
          <template #item="slotProps">
            <div>
              <img :src="slotProps.data.image" alt="" />
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </Layouts>
</template>
