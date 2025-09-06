<script setup>
import Layouts from '@/layouts/Layouts.vue'
import Logo from '@/assets/images/seba-wakaf-logo.png'
import KemenagLogo from '@/assets/images/kemenag-logo.png'
import PemdaJabarLogo from '@/assets/images/pemda-jabar-logo.png'
import WakafMelaluiUangLogo from '@/assets/images/wakaf-melalui-uang.png'
import WakafProduktif from '@/assets/images/wakaf-produktif.png'
import WakafUang from '@/assets/images/wakaf-uang.png'
</script>
<template>
  <Layouts>
    <!-- Header -->
    <div class="flex justify-between items-center px-5 py-3">
      <img :src="Logo" class="h-18" alt="" />
      <router-link>
        <i class="fa-solid fa-search text-lg"></i>
      </router-link>
    </div>

    <!-- Campaign Banner -->
    <div class="px-5 py-3">
      <router-link
        :to="{
          name: 'campaign.show',
          params: {
            slug: '1',
          },
        }"
      >
        <img
          class="object-cover cursor-pointer w-full rounded-xl shadow"
          src="https://apps.satuwakaf.id/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fziswaf-asset-prod%2Fimages%2Fcampaigns%2F01JCFAKB6WRF1M2RH35GDY6MXF.jpg&w=1920&q=75"
          alt=""
        />
      </router-link>
    </div>

    <!-- Buttons -->
    <div class="px-5 py-3">
      <div class="grid grid-cols-4 gap-4">
        <div class="flex flex-col items-center justify-start gap-1 w-full aspect-square">
          <div class="bg-white rounded-xl p-3 shadow w-full flex items-center justify-center">
            <img :src="KemenagLogo" class="object-contain w-full aspect-square" alt="" />
          </div>
          <p class="text-[8px] text-center text-gray-600 font-medium">
            WAKAF UANG KEMENAG KANWIL JABAR
          </p>
        </div>
        <div class="flex flex-col items-center justify-start gap-1 w-full aspect-square">
          <div class="bg-white rounded-xl p-3 shadow w-full flex items-center justify-center">
            <img :src="PemdaJabarLogo" class="object-contain w-full aspect-square" alt="" />
          </div>
          <p class="text-[8px] text-center text-gray-600 font-medium">WAKAF UANG PEMDA JABAR</p>
        </div>
        <div class="flex flex-col items-center justify-start gap-1 w-full aspect-square">
          <div class="bg-white rounded-xl p-3 shadow w-full flex items-center justify-center">
            <img :src="WakafUang" class="object-contain w-full aspect-square" alt="" />
          </div>
          <p class="text-[8px] text-center text-gray-600 font-medium">WAKAF UANG</p>
        </div>
        <div class="flex flex-col items-center justify-start gap-1 w-full aspect-square">
          <div class="bg-white rounded-xl p-3 shadow w-full flex items-center justify-center">
            <img :src="WakafMelaluiUangLogo" class="object-contain w-full aspect-square" alt="" />
          </div>
          <p class="text-[8px] text-center text-gray-600 font-medium">WAKAF MELALUI UANG</p>
        </div>
        <div class="flex flex-col items-center justify-start gap-1 w-full aspect-square">
          <div class="bg-white rounded-xl p-3 shadow w-full flex items-center justify-center">
            <img :src="WakafProduktif" class="object-contain w-full aspect-square" alt="" />
          </div>
          <p class="text-[8px] text-center text-gray-600 font-medium">WAKAF PRODUKTIF</p>
        </div>
      </div>
    </div>
  </Layouts>
</template>
