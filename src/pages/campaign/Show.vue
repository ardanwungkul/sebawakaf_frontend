<script setup>
import { ref } from 'vue'
import Layouts from '@/layouts/Layouts.vue'
import Logo from '@/assets/images/seba-wakaf-logo.png'
import { useRouter } from 'vue-router'
import { ProgressBar } from 'primevue'
import FormWakaf from '@/component/modal/FormWakaf.vue'

const router = useRouter()
const expanded = ref(false)
</script>

<template>
  <Layouts>
    <div class="flex flex-col relative">
      <div class="overflow-y-auto pb-3">
        <div class="flex justify-between items-center z-10 py-3 px-5">
          <button
            @click="router.go(-1)"
            class="bg-white p-2 rounded-full flex items-center justify-center w-10 h-10 shadow-md cursor-pointer"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <div class="flex space-x-2">
            <button
              class="bg-white p-2 rounded-full flex items-center justify-center w-10 h-10 shadow-md cursor-pointer"
            >
              <i class="fa-solid fa-qrcode"></i>
            </button>

            <button
              class="bg-white p-2 rounded-full flex items-center justify-center w-10 h-10 shadow-md cursor-pointer"
            >
              <i class="fa-regular fa-share-nodes"></i>
            </button>
          </div>
        </div>

        <div class="py-3 px-5">
          <img
            src="https://apps.satuwakaf.id/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fziswaf-asset-prod%2Fimages%2Fcampaigns%2F01JCFAKB6WRF1M2RH35GDY6MXF.jpg&w=1920&q=75"
            alt="Gerakan Wakaf Kemenag"
            class="w-full rounded-xl shadow object-contain"
          />
        </div>

        <div class="pb-2 space-y-2 px-5">
          <div
            class="flex gap-1 items-center bg-white text-gray-600 text-xs px-3 py-0.5 rounded-lg w-min whitespace-nowrap shadow"
          >
            <i class="fa-regular fa-location-dot"></i>
            <p>Seluruh Indonesia</p>
          </div>
          <div class="flex gap-1">
            <span
              class="inline-block bg-blue-500 text-white text-[9px] px-1.5 py-0.5 rounded-lg font-medium"
            >
              Wakaf
            </span>
            <span
              class="inline-block bg-blue-500 text-white text-[9px] px-1.5 py-0.5 rounded-lg font-medium"
            >
              Abadi
            </span>
          </div>
          <div>
            <p class="text-lg font-bold">Gerakan Wakaf Uang Kementerian Agama 1446 H</p>
            <p class="text-2xl font-bold text-[#6b8f76]">Rp5.468.669.852</p>
            <p class="text-gray-500 text-sm">Terkumpul dana Wakaf dari Rp 10.000.000.000</p>
          </div>

          <!-- Progress Bar -->
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
            class="!h-2"
            :value="50"
          ></ProgressBar>

          <!-- Statistik -->
          <div class="flex justify-between items-center text-xs text-gray-600 mt-2">
            <span>5635 Wakif</span>
            <div class="flex items-center gap-1 text-gray-600">
              <i class="fa-regular fa-clock"></i>
              <span>115 hari lagi</span>
            </div>
          </div>
        </div>

        <hr class="my-4 border-t border-gray-200" />

        <div class="px-5 py-3">
          <div class="bg-white rounded-xl shadow-lg px-5 py-3">
            <div class="flex items-center justify-between mb-2 border-b border-gray-200 pb-2">
              <h3 class="font-bold">Profil Nazhir</h3>
              <i class="fa-solid fa-chevron-right"></i>
            </div>

            <div class="flex items-center">
              <img :src="Logo" alt="BWI" class="w-10 h-10 rounded-full mr-3" />
              <div>
                <p class="font-semibold">Lembaga Kenazhiran BWI</p>
                <div class="flex items-center gap-1 text-sm text-gray-500">
                  <span>Nazhir Terverifikasi</span>
                  <i class="fa-solid fa-circle-check text-blue-500"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="px-5 py-3">
          <div class="bg-white px-5 py-3 shadow-lg rounded-xl">
            <h3 class="font-bold mb-3 border-b border-gray-200 w-full pb-2">Tentang Program</h3>
            <div
              class="text-gray-500 text-sm relative"
              :class="expanded ? 'max-h-full' : 'max-h-40 overflow-hidden'"
            >
              <p class="mb-2">
                <strong>Ruang Lingkup GERAKAN WAKAF UANG KEMENAG 1446 H</strong>
              </p>
              <ol class="list-decimal pl-4">
                <li>Seluruh Aparatur Sipil Negara lingkungan Kementerian Agama</li>
                <li>
                  Seluruh Peserta/Peserta didik/ Masyarakat dalam Ruang Lingkup Lembaga, Komunitas,
                  Penyuluh, Penghulu, Lembaga dakwah, Majelis Taklim, Lembaga Pengembangan Tilawatil
                  Quran, Lembaga Seni Budaya Islam, Raudlatul Athfal, Madrasah Ibtidaiyah, Madrasah
                  Tsanawiyah, Madrasah Aliyah, Madrasah Diniyah, Pondok Pesantren, Perguruan Tinggi
                  Negeri maupun Swasta dalam ruang lingkup Kementerian Agama
                </li>
              </ol>
              <p><br /></p>
              <p>
                Untuk Melihat Update Penghimpunan Wakaf&nbsp;<a
                  href="https://apps.satuwakaf.id/report/campaign/9d52c675-2b96-499d-a94e-224fbae26817/national"
                  rel="noopener noreferrer"
                  target="_blank"
                  ><u class="text-blue-500">Klik Disini</u></a
                >
              </p>
              <p>
                Untuk Mendapatkan Qris Provinsi dan Satker anda
                <a
                  href="https://drive.google.com/drive/folders/1U264kOyvyR6JW-lyLBkMSYearRWVl9NJ?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-blue-500"
                >
                  <u>Klik Disini</u>
                </a>
              </p>
              <p>
                Untuk Pengajuan Manfaat Wakaf
                <a
                  href="https://forms.gle/zBWasUa5REiEe2Bq6"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-blue-500"
                >
                  <u> Klik Disini </u>
                </a>
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong
                  >Rencana Program Peruntukan &amp; Mauquf Alaih GERAKAN WAKAF UANG KEMENAG 1446
                  H</strong
                >
              </p>
              <p>
                Merujuk pada regulasi maka wakaf sebagai pranata keagamaan yang memiliki potensi dan
                manfaat ekonomi perlu dikelola secara efektif dan efisien untuk kepentingan ibadah
                dan untuk memajukan kesejahteraan umum. Selain itu Wakaf bertujuan memanfaatkan
                harta benda wakaf sesuai dengan fungsinya, wakaf berfungsi mewujudkan potensi dan
                manfaat ekonomis harta benda wakaf untuk kepentingan ibadah dan untuk memajukan
                kesejahteraan umum. Namun tujuan tersebut masih terdapat kesenjangan antara tujuan
                dan realisasi. Sehingga masih dibutuhkan akselerasi untuk memenuhi kesenjangan
                tersebut melalui permodalan usaha di atas tanah wakaf agar lebih produktif bernilai
                ekonomis sehingga dapat mendatangkan kemaslahatan bagi umat.
              </p>
              <p><br /></p>
              <p>
                Gerakan Wakaf Uang Kemenag 2024, ini memiliki tujuan untuk mengakselerasi penggunaan
                tanah wakaf di Indonesia agar bernilai produktif serta memiliki nilai ekonomis.
                Wakaf uang yang akan terkumpul akan dikelola oleh Nazhir dalam instrument keuangan
                syariah sesuai peraturan dan perundangan-undangan yang berlaku serta memperhatikan
                prinsip pengukuran risiko. Hasil kelolaan wakaf uang berupa imbal hasil akan
                digunakan sebagai modal usaha bagi nazhir maupun masyarakat untuk memproduktifkan
                tanah wakaf agar bernilai ekonomi.&nbsp;
              </p>
              <p><br /></p>
              <p>
                Sehingga dalam hal ini sesuai peruntukan harta benda wakaf masuk dalam kategori
                KEMAJUAN DAN PENINGKATAN EKONOMI UMAT dalam hal ini berupa ”MODAL USAHA”. Serta
                Mauquf Alaih dalam hal ini adalah masyarakat sebagai nazhir maupun mitra lainnya
                yang akan memanfaatkan tanah wakaf dalam melalui modal usaha.
              </p>
              <p>&nbsp;</p>
              <div
                v-if="!expanded"
                class="bg-gradient-to-t from-white absolute w-full h-20 bottom-0"
                aria-hidden="true"
              ></div>
            </div>
            <div class="text-left">
              <button
                class="text-blue-600 font-medium text-sm hover:underline cursor-pointer"
                @click="expanded = !expanded"
              >
                {{ expanded ? 'Tampilkan lebih sedikit' : 'Baca Selengkapnya' }}
              </button>
            </div>
          </div>
        </div>

        <div class="px-5 py-3">
          <div class="bg-white shadow-lg rounded-xl divide-y divide-gray-200">
            <!-- Kabar Terbaru -->
            <div class="p-4 flex justify-between items-center">
              <h3 class="font-bold">Kabar Terbaru</h3>
              <i class="fa-solid fa-chevron-right"></i>
            </div>

            <!-- Permohonan Manfaat Wakaf -->
            <div class="p-4 flex justify-between items-center">
              <h3 class="font-bold">Permohonan Manfaat Wakaf</h3>
              <i class="fa-solid fa-chevron-right"></i>
            </div>

            <!-- Daftar Wakif -->
            <div class="p-4">
              <div class="flex justify-between">
                <p class="font-bold">Wakif</p>
                <p
                  class="bg-green-100 text-green-700 px-2 py-0.5 rounded-lg border border-green-200 text-sm font-semibold"
                >
                  5637
                </p>
              </div>
            </div>
            <div class="px-5 pb-5">
              <div class="space-y-3 mt-3">
                <div class="flex items-start bg-gray-100 p-3 rounded-lg shadow-lg">
                  <div
                    class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold"
                  >
                    Y
                  </div>
                  <div class="ml-3">
                    <p class="font-bold text-gray-900">YULIAXXXXXXXXX</p>
                    <p class="text-xs text-gray-600">Kantor Wilayah Provinsi<br />RIAU</p>
                    <p class="text-sm text-gray-700 mt-1">
                      Berwakaf sebesar <span class="font-semibold text-green-700">Rp 10.000</span>
                    </p>
                    <p class="text-xs text-gray-500">24 menit yang lalu</p>
                  </div>
                </div>
              </div>

              <div class="space-y-3 mt-3">
                <div class="flex items-start bg-gray-100 p-3 rounded-lg shadow-lg">
                  <div
                    class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold"
                  >
                    M
                  </div>
                  <div class="ml-3">
                    <p class="font-bold text-gray-900">MOZXXXXXXX</p>
                    <p class="text-xs text-gray-600">Kantor Wilayah Provinsi<br />RIAU</p>
                    <p class="text-sm text-gray-700 mt-1">
                      Berwakaf sebesar <span class="font-semibold text-green-700">Rp 10.000</span>
                    </p>
                    <p class="text-xs text-gray-500">24 menit yang lalu</p>
                  </div>
                </div>
              </div>

              <div class="space-y-3 mt-3">
                <div class="flex items-start bg-gray-100 p-3 rounded-lg shadow-lg">
                  <div
                    class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold"
                  >
                    D
                  </div>
                  <div class="ml-3">
                    <p class="font-bold text-gray-900">DERXXXXXXX</p>
                    <p class="text-xs text-gray-600">Kantor Wilayah Provinsi<br />RIAU</p>
                    <p class="text-sm text-gray-700 mt-1">
                      Berwakaf sebesar <span class="font-semibold text-green-700">Rp 10.000</span>
                    </p>
                    <p class="text-xs text-gray-500">24 menit yang lalu</p>
                  </div>
                </div>
              </div>

              <div class="space-y-3 mt-3">
                <div class="flex items-start bg-gray-100 p-3 rounded-lg shadow-lg">
                  <div
                    class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold"
                  >
                    C
                  </div>
                  <div class="ml-3">
                    <p class="font-bold text-gray-900">CANDXXXXXXXXX</p>
                    <p class="text-xs text-gray-600">Kantor Wilayah Provinsi<br />RIAU</p>
                    <p class="text-sm text-gray-700 mt-1">
                      Berwakaf sebesar <span class="font-semibold text-green-700">Rp 10.000</span>
                    </p>
                    <p class="text-xs text-gray-500">24 menit yang lalu</p>
                  </div>
                </div>
              </div>

              <div class="space-y-3 mt-3">
                <div class="flex items-start bg-gray-100 p-3 rounded-lg shadow-lg">
                  <div
                    class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold"
                  >
                    I
                  </div>
                  <div class="ml-3">
                    <p class="font-bold text-gray-900">ILHXXXXXXX</p>
                    <p class="text-xs text-gray-600">Kantor Wilayah Provinsi<br />RIAU</p>
                    <p class="text-sm text-gray-700 mt-1">
                      Berwakaf sebesar <span class="font-semibold text-green-700">Rp 10.000</span>
                    </p>
                    <p class="text-xs text-gray-500">24 menit yang lalu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-5 pb-3">
        <FormWakaf />
      </div>
    </div>
  </Layouts>
</template>
