<script setup>
import { ref } from 'vue'
import Layouts from '@/layouts/Layouts.vue'

// pakai aset lokal
import Logo from '@/assets/images/seba-wakaf-logo.png'

const expanded = ref(false)
</script>

<template>
  <Layouts>
    <!-- Banner Utama dengan Tombol Aksi -->
    <div class="relative">
      <!-- Container untuk tombol-tombol aksi -->
      <div class="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <!-- Tombol Kembali -->
        <button class="bg-white p-2 rounded-full shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
      <!-- Container untuk tombol Share dan QR Code -->
<div class="flex space-x-2">
  <!-- Tombol QR Code -->
  <button class="bg-white p-2 rounded-full shadow-md">
    <svg xmlns="http://www.w3.org/2000/svg" 
         class="h-6 w-6 text-gray-700" 
         viewBox="0 0 24 24" 
         fill="currentColor">
      <!-- Kotak besar kiri atas -->
      <rect x="2" y="2" width="6" height="6" rx="1" />
      <rect x="4" y="4" width="2" height="2" fill="white"/>
      <!-- Kotak besar kanan atas -->
      <rect x="16" y="2" width="6" height="6" rx="1" />
      <rect x="18" y="4" width="2" height="2" fill="white"/>
      <!-- Kotak besar kiri bawah -->
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="4" y="18" width="2" height="2" fill="white"/>
      <!-- Kotak besar kanan bawah -->
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="18" y="18" width="2" height="2" fill="white"/>
      <!-- Titik-titik tengah -->
      <rect x="10" y="10" width="2" height="2"/>
      <rect x="14" y="10" width="2" height="2"/>
      <rect x="10" y="14" width="2" height="2"/>
      <rect x="14" y="14" width="2" height="2"/>
      <rect x="12" y="12" width="2" height="2"/>
    </svg>
  </button>

          <!-- Tombol Share -->
          <button class="bg-white p-2 rounded-full shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Banner Image -->
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <img 
          src="https://apps.satuwakaf.id/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fziswaf-asset-prod%2Fimages%2Fcampaigns%2F01JCFAKB6WRF1M2RH35GDY6MXF.jpg&w=1920&q=75" 
          alt="Gerakan Wakaf Kemenag" 
          class="w-full"
        />

        <!-- Card Gabungan -->
        <div class="p-4">
          <!-- Header Lokasi + Tag -->
          <div class="mb-3">
            <!-- Lokasi -->
            <div class="mb-2">
              <span class="inline-flex items-center bg-gray-100 text-gray-600 text-xs px-3 py-0.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     class="h-4 w-4 mr-1 text-gray-500" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 
                           0 01-2.827 0l-4.244-4.243a8 8 
                           0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Seluruh Indonesia
              </span>
            </div>

            <!-- Tag -->
            <span class="inline-block bg-blue-500 text-white text-[9px] px-1.5 py-0.5 mr-2 rounded-full font-medium">
              Wakaf
            </span>
            <span class="inline-block bg-blue-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-medium">
              Abadi
            </span>
          </div>

          <!-- Informasi Gerakan -->
          <h2 class="text-lg font-bold text-green-800">
            Gerakan Wakaf Uang Kementerian Agama 1446 H
          </h2>
          <p class="text-2xl font-extrabold text-green-600 mt-2">
            Rp5.468.669.852
          </p>
          <p class="text-gray-500 text-sm">
            Terkumpul dana Wakaf dari Rp 10.000.000.000
          </p>

          <!-- Progress Bar -->
          <div class="w-full bg-gray-200 rounded-full h-3 mt-3">
            <div class="bg-green-500 h-3 rounded-full" style="width: 55%;"></div>
          </div>

          <!-- Statistik -->
          <div class="flex justify-between text-sm text-gray-600 mt-2">
            <span>5635 Wakif</span>
            <div class="flex items-center text-gray-600 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   class="h-4 w-4 mr-1" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 8v4l3 3m6-3a9 9 
                         0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>115 hari lagi</span>
            </div>
          </div>

          <!-- Garis Pemisah -->
          <hr class="my-4 border-t border-gray-200" />

          <!-- Profil Nazhir -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-bold">Profil Nazhir</h3>
              <svg xmlns="http://www.w3.org/2000/svg" 
                   class="h-7 w-7 text-black" 
                   viewBox="0 0 20 20" 
                   fill="currentColor">
                <path fill-rule="evenodd" 
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 
                         10 7.293 6.707a1 1 0 011.414-1.414l4 
                         4a1 1 0 010 1.414l-4 4a1 1 
                         0 01-1.414 0z" 
                      clip-rule="evenodd"/>
              </svg>
            </div>

            <div class="flex items-center">
              <img :src="Logo" alt="BWI" class="w-10 h-10 rounded-full mr-3" />
              <div>
                <p class="font-semibold">Lembaga Kenazhiran BWI</p>
                <div class="flex items-center text-sm text-gray-500">
                  <span>Nazhir Terverifikasi</span>
                  <svg xmlns="http://www.w3.org/2000/svg" 
                       class="h-5 w-5 text-blue-500 ml-1" 
                       viewBox="0 0 20 20" 
                       fill="currentColor">
                    <path fill-rule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 
                             16zm3.707-9.293a1 
                             1 0 00-1.414-1.414L9 10.586 
                             7.707 9.293a1 1 0 
                             00-1.414 1.414l2 2a1 1 
                             0 001.414 0l4-4z" 
                          clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Tentang Program -->
          <h3 class="font-bold text-lg text-green-800 mt-5 mb-3">
            Tentang Program
          </h3>
          <div :class="expanded ? 'max-h-full' : 'max-h-40 overflow-hidden'">
            <h4 class="font-semibold text-gray-800 mb-2">
              Ruang Lingkup GERAKAN WAKAF UANG KEMENAG 1446 H
            </h4>
            <p class="text-sm text-gray-700 leading-relaxed">
              Seluruh Aparatur Sipil Negara lingkungan Kementerian Agama<br/>
              Seluruh Peserta/Peserta didik/ Masyarakat dalam Ruang Lingkup 
              Lembaga, Komunitas, Penyuluh, Penghulu, Lembaga dakwah, 
              Majelis Taklim, Lembaga Pengembangan Tilawatil Quran, 
              Lembaga Seni Budaya Islam, Raudlatul Athfal, 
              Madrasah Ibtidaiyah, Madrasah Tsanawiyah, 
              Madrasah Aliyah, Madrasah Diniyah,
              Pondok Pesantren, Perguruan Tinggi Negeri maupun Swasta 
              dalam ruang lingkup Kementerian Agama
            </p>

            <!-- Link Aksi -->
            <div class="mt-4 space-y-2">
              <p class="text-sm text-gray-600 font-semibold">
                Untuk Melihat Update Penghimpunan Wakaf 
                <a href="#" class="text-blue-600 underline">Klik Disini</a>
              </p>
              <p class="text-sm text-gray-600 font-semibold">
                Untuk Mendapatkan Qris Provinsi dan Satker anda 
                <a href="#" class="text-blue-600 underline">Klik Disini</a>
              </p>
              <p class="text-sm text-gray-600 font-semibold">
                Untuk Pengajuan Manfaat Wakaf 
                <a href="#" class="text-blue-600 underline">Klik Disini</a>
              </p>
            </div>

            <!-- Rencana Program -->
            <h4 class="font-semibold text-gray-800 mt-5 mb-2">
              Rencana Program Peruntukan & Mauquf Alaih GERAKAN WAKAF UANG KEMENAG 1446 H
            </h4>
            <p class="text-sm text-gray-700 leading-relaxed">
              Merujuk pada regulasi maka wakaf sebagai pranata keagamaan yang memiliki potensi 
              dan manfaat ekonomi perlu dikelola secara efektif dan efisien untuk kepentingan ibadah 
              dan untuk memajukan kesejahteraan umum. Selain itu Wakaf bertujuan memanfaatkan harta benda wakaf 
              sesuai dengan fungsinya, wakaf berfungsi mewujudkan potensi dan manfaat ekonomis harta benda wakaf 
              untuk kep kepentingan ibadah dan untuk memajukan kesejahteraan umum. Namun tujuan tersebut masih terdapat 
              kesenjangan antara tujuan dan realisasi. Sehingga masih dibutuhkan akselerasi untuk memenuhi kesenjangan 
              tersebut melalui permodalan usaha di atas tanah wakaf agar lebih produktif bernilai ekonomis sehingga 
              dapat mendatangkan kemaslahatan bagi umat.
            </p>
            <p class="text-sm text-gray-700 leading-relaxed mt-3">
              Gerakan Wakaf Uang Kemenag 2024, ini memiliki tujuan untuk mengakselerasi penggunaan tanah wakaf 
              di Indonesia agar bernilai produktif serta memiliki nilai ekonomis. Wakaf uang yang akan terkumpul 
              akan dikelola oleh Nazhir dalam instrument keuangan syariah sesuai peraturan dan perundangan-undangan 
              yang berlaku serta memperhatikan prinsip pengukuran risiko. Hasil kelolaan wakaf uang berupa imbal hasil 
              akan digunakan sebagai modal usaha bagi nazhir maupun masyarakat untuk memproduktifkan tanah wakaf 
              agar bernilai ekonomi.
            </p>
            <p class="text-sm text-gray-700 leading-relaxed mt-3">
              Sehingga dalam hal ini sesuai peruntukan harta benda wakaf masuk dalam kategori 
              <span class="font-semibold">KEMAJUAN DAN PENINGKATAN EKONOMI UMAT</span> 
              dalam hal ini berupa ”MODAL USAHA”. Serta Mauquf Alaih dalam hal ini adalah masyarakat 
              sebagai nazhir maupun mitra lainnya yang akan memanfaatkan tanah wakaf dalam melalui modal usaha.
            </p>
          </div>

          <!-- Toggle -->
          <div class="mt-3 text-left">
            <button 
              class="text-blue-600 font-semibold hover:underline"
              @click="expanded = !expanded"
            >
              {{ expanded ? 'Tampilkan lebih sedikit' : 'Tampilkan lebih banyak' }}
            </button>
          </div>
        </div>
      </div>
    </div>

  <!-- Section Kabar, Permohonan, Wakif -->
    <div class="mt-6 bg-white shadow-md rounded-lg divide-y divide-gray-200">
      <!-- Kabar Terbaru -->
      <div class="p-4 flex justify-between items-center">
        <h3 class="font-bold text-lg text-gray-800">Kabar Terbaru</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <!-- Permohonan Manfaat Wakaf -->
      <div class="p-4 flex justify-between items-center">
        <h3 class="font-bold text-lg text-gray-800">Permohonan Manfaat Wakaf</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <!-- Daftar Wakif -->
      <div class="p-4 ">
        <h3 class="font-bold text-lg text-gray-800">
          Wakif <span class="ml-2 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm font-semibold">5637</span>
        </h3>

        <div class="space-y-3 mt-3">
          <div class="flex items-start bg-gray-50 p-3 rounded-lg shadow-sm">
            <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold">Y</div>
            <div class="ml-3">
              <p class="font-bold text-gray-900">YULIAXXXXXXXXX</p>
              <p class="text-xs text-gray-600">Kantor Wilayah Provinsi<br/>RIAU</p>
              <p class="text-sm text-gray-700 mt-1">Berwakaf sebesar <span class="font-semibold text-green-700">Rp 10.000</span></p>
              <p class="text-xs text-gray-500">24 menit yang lalu</p>
            </div>
          </div>
        </div>

        <div class="space-y-3 mt-3">
          <div class="flex items-start bg-gray-50 p-3 rounded-lg shadow-sm">
            <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold">M</div>
            <div class="ml-3">
              <p class="font-bold text-gray-900">MOZXXXXXXX</p>
              <p class="text-xs text-gray-600">Kantor Wilayah Provinsi<br/>RIAU</p>
              <p class="text-sm text-gray-700 mt-1">Berwakaf sebesar <span class="font-semibold text-green-700">Rp 10.000</span></p>
              <p class="text-xs text-gray-500">24 menit yang lalu</p>
            </div>
          </div>
        </div>

        <div class="space-y-3 mt-3">
          <div class="flex items-start bg-gray-50 p-3 rounded-lg shadow-sm">
            <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold">D</div>
            <div class="ml-3">
              <p class="font-bold text-gray-900">DERXXXXXXX</p>
              <p class="text-xs text-gray-600">Kantor Wilayah Provinsi<br/>RIAU</p>
              <p class="text-sm text-gray-700 mt-1">Berwakaf sebesar <span class="font-semibold text-green-700">Rp 10.000</span></p>
              <p class="text-xs text-gray-500">24 menit yang lalu</p>
            </div>
          </div>
        </div>

        <div class="space-y-3 mt-3">
          <div class="flex items-start bg-gray-50 p-3 rounded-lg shadow-sm">
            <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold">C</div>
            <div class="ml-3">
              <p class="font-bold text-gray-900">CANDXXXXXXXXX</p>
              <p class="text-xs text-gray-600">Kantor Wilayah Provinsi<br/>RIAU</p>
              <p class="text-sm text-gray-700 mt-1">Berwakaf sebesar <span class="font-semibold text-green-700">Rp 10.000</span></p>
              <p class="text-xs text-gray-500">24 menit yang lalu</p>
            </div>
          </div>
        </div>

        <div class="space-y-3 mt-3">
          <div class="flex items-start bg-gray-50 p-3 rounded-lg shadow-sm">
            <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold">I</div>
            <div class="ml-3">
              <p class="font-bold text-gray-900">ILHXXXXXXX</p>
              <p class="text-xs text-gray-600">Kantor Wilayah Provinsi<br/>RIAU</p>
              <p class="text-sm text-gray-700 mt-1">Berwakaf sebesar <span class="font-semibold text-green-700">Rp 10.000</span></p>
              <p class="text-xs text-gray-500">24 menit yang lalu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <!-- Tombol Aksi Sticky -->
    <div class="sticky bottom-0 left-0 w-full bg-white p-3 rounded-md shadow-md mt-6">
      <button class="w-full bg-green-600 text-white py-2 rounded-md shadow font-semibold text-base">
        Wakaf Sekarang
      </button>
    </div>
  </Layouts>
</template>