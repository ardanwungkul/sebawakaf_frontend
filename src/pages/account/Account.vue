<script setup>
import Layouts from '@/layouts/Layouts.vue'
import Logo from '@/assets/images/seba-wakaf-logo.png'
</script>
<template>
  <Layouts>
    <div>
      <div class="flex gap-3 items-center px-5 py-3 bg-white shadow-lg rounded-b-xl">
        <img :src="Logo" class="h-14" alt="" />
      </div>
    </div>
  </Layouts>
</template>
