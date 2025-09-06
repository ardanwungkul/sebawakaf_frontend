<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const options = [
  { id: 1, icon: 'fas fa-clock-rotate-left', title: 'Riwayat', route: 'history' },
  {
    id: 2,
    icon: 'fas fa-house',
    title: 'Beranda',
    route: 'welcome',
  },
  { id: 3, icon: 'fas fa-user', title: 'Akun', route: 'account' },
]
const selected = ref(null)

onMounted(() => {
  const current = options.find((o) => o.route === route.name)
  selected.value = current ? current.id : null
})

watch(selected, (newValue) => {
  const option = options.find((o) => o.id === newValue)
  if (option?.route && route.name !== option.route) {
    router.push({ name: option.route })
  }
})
</script>
<template>
  <div class="min-h-screen relative z-10 bg-gray-100">
    <div class="pb-16 relative bg-[#F1FDF3] min-h-screen mx-auto max-w-[30rem]">
      <div>
        <div>
          <slot />
        </div>
        <CurvedBottomNavigation
          class="!mx-auto !max-w-[30rem] !left-1/2 !transform !-translate-x-1/2 fixed bottom-0 !text-xl shadow-lg"
          :options="options"
          v-model="selected"
          foreground-color="#F1FDF3"
          badge-color="#FEA4A4"
          background-color="#ffffff"
          icon-color="#6b8f76"
        />
      </div>
    </div>
  </div>
</template>
