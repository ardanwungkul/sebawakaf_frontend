    <script setup>
    import Layouts from '@/layouts/Layouts.vue'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const menuItems = ref([
    { text: 'Tentang Kami', icon: 'fas fa-info-circle', route: '/about-us' },
    { text: 'Press Release', icon: 'fas fa-newspaper', route: '/press-release' },
    { text: 'Kontak Kami', icon: 'fas fa-phone-alt', route: '/contact-us' },
    { text: 'Syarat & Ketentuan', icon: 'fas fa-file-alt', route: '/terms' },
    { text: 'Kebijakan Privasi', icon: 'fas fa-shield-alt', route: '/privacy-policy' },
    { text: 'Tanya Jawab', icon: 'fas fa-question-circle', route: '/question' }
    ])

    function goBack() {
    router.go(-1)
    }

    function login() {
    // nanti diganti dengan route ke halaman login
    alert('Login button clicked')
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
        <h1 class="font-bold text-base">Akun</h1>
        </div>

        <!-- Main Content -->
        <div class="px-4 py-4 flex-grow">
        <p class="text-sm mb-3">
            Masuk untuk nikmati kemudahan berwakaf dan akses fitur lainnya.
        </p>
        <button
            class="w-full border border-[#4CAF50] text-[#4CAF50] font-semibold rounded-md py-2 mb-3 hover:bg-[#4CAF50] hover:text-white transition"
            type="button"
            @click="login"
        >
            Masuk sekarang
        </button>
        <p class="text-center text-sm mb-5">
            Belum punya akun ?
            <router-link
            to="/register"
            class="text-blue-600 hover:underline"
            >
            Daftar
            </router-link>
        </p>

        <hr class="border-t border-gray-200 mb-4" />

        <!-- Menu Section -->
        <section aria-label="Seputar SATUWAKAF Indonesia" class="text-gray-900">
            <h2 class="font-bold mb-3 text-sm">
            Seputar <span class="font-black">SATUWAKAF</span> Indonesia
            </h2>

            <ul class="divide-y divide-gray-200">
            <li
                v-for="(item, index) in menuItems"
                :key="index"
            >
                <router-link
                :to="item.route"
                class="flex items-center justify-between py-3 text-base"
                >
                <div class="flex items-center space-x-3">
                    <i :class="item.icon + ' text-lg'"></i>
                    <span>{{ item.text }}</span>
                </div>
                <i class="fas fa-chevron-right text-gray-400"></i>
                </router-link>
            </li>
            </ul>
        </section>
        </div>
    </Layouts>
    </template>
