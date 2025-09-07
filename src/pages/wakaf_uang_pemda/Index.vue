<script setup>
import Layouts from '@/layouts/Layouts.vue'
import { Carousel, ProgressBar } from 'primevue'
import { ref } from 'vue'
import Banner from '@/assets/images/banner/banner.webp'
import Banner_1 from '@/assets/images/banner/wakaf-uang-pemda-banner-1.png'
import Banner_2 from '@/assets/images/banner/wakaf-uang-pemda-banner-2.png'
import Banner_3 from '@/assets/images/banner/wakaf-uang-pemda-banner-3.png'
import { useRoute, useRouter } from 'vue-router'
import Logo from '@/assets/images/seba-wakaf-logo.png'

const router = useRouter()
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
      <div class="px-5 py-3">
        <div class="rounded-xl bg-white shadow-lg p-3">
          <div class="space-y-5">
            <div v-for="(data, index) in 10" :key="index">
              <router-link
                :to="{
                  name: 'campaign.show',
                  params: {
                    slug: '1',
                  },
                }"
                class="flex gap-3"
              >
                <div class="flex-none">
                  <img :src="Banner" class="w-44 rounded-xl" alt="" />
                </div>
                <div class="space-y-1">
                  <div
                    class="flex gap-1 items-center bg-white text-gray-600 text-xs px-3 py-0.5 rounded-lg w-min whitespace-nowrap shadow"
                  >
                    <i class="fa-regular fa-location-dot"></i>
                    <p class="text-[8px]">Seluruh Indonesia</p>
                  </div>
                  <div class="flex gap-1">
                    <span
                      class="inline-block bg-blue-500 text-white text-[8px] px-1.5 py-0.5 rounded-lg font-medium"
                    >
                      Wakaf
                    </span>
                    <span
                      class="inline-block bg-blue-500 text-white text-[8px] px-1.5 py-0.5 rounded-lg font-medium"
                    >
                      Abadi
                    </span>
                  </div>
                  <p class="line-clamp-1 text-xs font-medium">
                    Gerakan Wakaf Uang Kementerian Agama 1446 H
                  </p>
                  <div class="flex items-center">
                    <img :src="Logo" alt="BWI" class="w-5 h-5 rounded-full mr-3" />
                    <div>
                      <div class="flex items-center gap-1 text-sm text-gray-400 text-[8px]">
                        <p class="text-xs">Lembaga Kenazhiran BWI</p>
                        <i class="fa-solid fa-circle-check text-blue-500"></i>
                      </div>
                    </div>
                  </div>
                  <ProgressBar
                    :show-value="false"
                    :pt="{
                      root: {
                        class: '!bg-white shadow',
                      },
                      value: {
                        class: '!bg-[#6b8f76]',
                      },
                    }"
                    class="!h-1"
                    :value="50"
                  />
                  <p class="text-[#6b8f76] text-xs">Rp. 0</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layouts>
</template>
