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
    <div class="flex flex-col min-h-screen bg-white text-gray-700">
      <!-- Header -->
      <div class="flex items-center bg-[#4CAF50] text-white px-4 py-3">
      <button aria-label="Back" class="mr-3 text-white text-lg" @click="router.back()">
      <i class="fas fa-arrow-left"></i>
      </button>
      <h1 class="font-bold text-base">Syarat & Ketentuan</h1>
    </div>

      <!-- Main Content -->
      <main class="px-4 py-4">
        <p class="font-semibold text-gray-900 mb-3">
          Syarat dan Ketentuan <span class="font-bold">SATUWAKAF</span> Indonesia
        </p>

        <p class="font-semibold text-gray-600 mb-1">SATUWAKAF Indonesia</p>
        <p class="font-semibold text-gray-600 mb-1">KETENTUAN PENGGUNAAN SATUWAKAF INDONESIA</p>
        <p class="mb-3">Salam dari SATUWAKAF Indonesia!</p>

        <p class="mb-3">
          Seperti halnya penyedia layanan pada umumnya, Kami memilik Ketentuan Penggunaan yang harus Anda setujui supaya Anda bisa menggunakan layanan Kami. Silakan membaca seluruh ketentuan pada Syarat dan Ketentuan ini dengan seksama sebelum menggunakan Platform SATUWAKAF Indonesia, karena berdampak kepada hak dan kewajiban Anda selaku Pengguna Platform SATUWAKAF Indonesia ini.
        </p>

        <p class="mb-3">
          Ketentuan Penggunaan ini adalah perjanjian antara Anda selaku pengguna dan SATUWAKAF Indonesia untuk menghindari kesalahpahaman di masa yang akan mendatang. Harap diketahui bahwa Kami dapat mengubah, memodifikasi, menambah dan menghapus Syarat ini sewaktu-waktu apabila diperlukan untuk mematuhi ketentuan peraturan perundang-undangan yang berlaku bagi Kami atau mencerminkan perubahan atas operasional Kami, dengan ketentuan bahwa Kami akan melakukan upaya yang wajar untuk menyampaikan pemberitahuan mengenai perubahan atas Ketentuan.
        </p>

        <p class="mb-3">
          Apabila Pengguna melakukan aktivitas seperti mengunjungi, mendaftar dan/atau menggunakan Platform SATUWAKAF Indonesia ini, maka Pengguna menyatakan telah membaca, mengerti, memahami, dan menyetujui semua ketentuan, termasuk segala perubahan dan/atau penambahan ketentuan dari waktu ke waktu.
        </p>

        <p class="font-semibold text-gray-600 mb-1">Ketentuan Umum</p>

        <p class="mb-3"><strong>A. Definisi</strong></p>
        <p class="mb-1">Akun adalah suatu pengaturan (arrangement) antara Penyedia Platform dengan Pengunjung Platform atau Pengguna Platform berdasarkan nama Pengunjung Platfrom atau Pengguna Platform diberikan akses oleh Penyedia Platform terhadap fitur-fitur Platform setelah melakukan pendaftaran data pribadi, nama pengguna (username) dan kata sandi (password).</p>
        <p class="mb-1">Pengguna adalah setiap orang yang mengakses dan menggunakan layanan yang disediakan oleh platform kami.</p>
        <p class="mb-1">Penggalang Dana adalah orang yang cakap dan mampu untuk mengikatkan dirinya dalam sebuah perjanjian yang sah menurut hukum selanjutnya disebut sebagai Nazhir Wakaf Uang.</p>
        <p class="mb-3">Pengaksesan SATUWAKAF Indonesia mengikat Anda pada peraturan perundang-undangan terkait Ketentuan Penggunaan ini.</p>

        <p class="mb-3"><strong>B. Penerima Manfaat</strong></p>
        <p class="mb-1">Pihak yang merangkap sebagai Lembaga dan terdaftar dalam SATUWAKAF Indonesia atau;</p>
        <p class="mb-3">Pihak lain selain lembaga yang adalah individu, kelompok, badan usaha atau badan hukum, yang menerima manfaat (beneficiary) atas Dana dari suatu program.</p>

        <p class="mb-3"><strong>C. Ketentuan</strong></p>
        <p class="mb-1">Wajib membaca, memahami, dan menyetujui seluruh ketentuan yang tertera dalam Syarat dan Ketentuan SATUWAKAF Indonesia.</p>
        <p class="mb-1">Wajib memberikan informasi yang benar, jelas, lengkap, terbaru, jujur, dan akurat saat menggunakan layanan Penggalangan Dana.</p>
        <p class="mb-1">Bersedia melakukan serangkaian proses Verifikasi dan kelengkapan dokumen lainnya apabila diperlukan.</p>
        <p class="mb-1">Telah memahami dan menyetujui untuk bertanggung jawab kepada Penerima Manfaat serta penggalang dana berkaitan dengan kebenaran, keabsahan, serta keakuratan informasi dan foto dokumen yang diberikan pada saat:</p>
        <ul class="list-disc ml-5 mb-3">
          <li>Proses verifikasi identitas dan/atau verifikasi dokumen medis;</li>
          <li>Proses Pencairan Dana;</li>
        </ul>

        <p class="mb-3">Memahami kewajiban untuk melakukan hal berikut secara mandiri saat menggunakan layanan Penggalangan Dana di Platform SATUWAKAF Indonesia:</p>
        <ul class="list-disc ml-5 mb-3">
          <li>Menjaga keamanan dan kerahasiaan dari akun dan kata sandi (password);</li>
          <li>Pembuatan Penggalangan Dana;</li>
          <li>Verifikasi;</li>
          <li>Pengelolaan penggalangan;</li>
          <li>Pencairan dana;</li>
          <li>Menyalurkan Dana kepada Penerima Manfaat (perorangan atau lembaga);</li>
          <li>Menyampaikan rincian dan bukti penggunaan dana.</li>
        </ul>

        <p class="mb-3">
          Dalam hal apabila Penggalang Dana yang memiliki kesepakatan terpisah dengan SATUWAKAF Indonesia dan mempercayakan kewajiban-kewajiban tertentu kepada SATUWAKAF Indonesia, maka Penggalang Dana menyetujui dan memahami bahwa SATUWAKAF Indonesia berhak dan memiliki kewenangan untuk mewakili Penggalang Dana sepanjang diterangkan dalam kesepakatan terpisah tersebut.
        </p>

        <p class="mb-3">
          Penggalang Dana dianggap telah membaca, memahami, dan bersedia untuk menyetujui syarat dan ketentuan di Platform SATUWAKAF Indonesia, namun tidak terbatas pada ketentuan pembuatan dan pengelolaan akun, ketentuan pembuatan Penggalangan Dana, ketentuan verifikasi, ketentuan pengelolaan Penggalangan Dana, ketentuan Biaya Administrasi, ketentuan Pencairan Dana, ketentuan pengembalian donasi, ketentuan donasi belum tersalurkan, ketentuan Fundraiser, dan ketentuan pelanggaran dan sanksi pada Penggalangan Dana.
        </p>

        <p class="mb-3">
          Penggalang Dana tidak akan menggunakan Platform SATUWAKAF Indonesia untuk melakukan tindakan yang melanggar syarat dan ketentuan di Platform SATUWAKAF Indonesia maupun peraturan perundang-undangan yang berlaku.
        </p>

        <p class="mb-3">
          Dengan ini menyatakan Platform SATUWAKAF Indonesia tidak bertanggung jawab atas kerugian ataupun kendala yang timbul atas penyalahgunaan layanan Penggalangan Dana yang diakibatkan oleh kelalaian Penggalang Dana, termasuk namun tidak terbatas pada:
        </p>
        <ul class="list-disc ml-5 mb-3">
          <li>Menyetujui dan/atau memberikan akses masuk ke akun milik Penggalang Dana kepada pihak lain yang mengakibatkan kerugian ataupun kendala pada akun Penggalang Dana;</li>
          <li>Tidak memenuhi Implementasi Donasi sesuai maksud dan tujuan yang tertera pada halaman Penggalangan Dana;</li>
          <li>Menggelapkan dan/atau menyalahgunakan Donasi yang diperoleh dari Penggalangan Dana;</li>
          <li>Melakukan perbuatan melawan hukum lainnya pada saat, selama, maupun setelah masa Penggalangan Dana.</li>
        </ul>

        <p class="mb-3">
          Dalam hal apabila Penggalang Dana melakukan suatu pelanggaran berdasarkan Syarat dan Ketentuan ini maka Penggalang Dana bersedia untuk dihubungi, dimintakan keterangan dan pertanggungjawabannya oleh SATUWAKAF Indonesia.
        </p>

        <p class="mb-3">
          Penggalang Dana menyetujui untuk tidak menggunakan dan/atau mengakses sistem pada Platform SATUWAKAF Indonesia secara langsung atau tidak langsung baik keseluruhan atau sebagian dengan virus, perangkat lunak, atau teknologi lainnya yang dapat mengakibatkan melemahkan, merusak, mengganggu atau menghambat, membatasi dan/atau mengambil alih fungsionalitas serta integritas dari sistem perangkat lunak atau perangkat keras, jaringan, dan/atau data pada Platform SATUWAKAF Indonesia.
        </p>

        <p class="mb-3">
          SATUWAKAF Indonesia berhak untuk melakukan tindakan dan mengambil keputusan terkait dengan penyaluran Dana bagi Penerima Manfaat, apabila Penggalang Dana tidak dapat dihubungi dalam kurun waktu 6 (enam) bulan sejak melakukan aktivitas terakhir melalui Platform SATUWAKAF Indonesia.
        </p>

        <p class="mb-3"><strong>Syarat Menjadi Lembaga</strong></p>
        <ul class="list-disc ml-5 mb-3">
          <li>Badan Hukum, adalah merupakan organisasi/komunitas/yayasan yang memiliki NPWP dan Akta Notaris (Bukti Hukum) tentang pendirian organisasi/komunitas/yayasan yang bersangkutan;</li>
          <li>Bersedia melakukan serangkaian proses verifikasi akun dan kelengkapan lainnya apabila diperlukan;</li>
          <li>Lembaga menjamin bahwa setiap informasi yang diberikan kepada situs kami merupakan data yang benar dan dapat dipertanggung jawabkan;</li>
          <li>Menjamin dan menyatakan bahwa segala informasi yang dimasukkan dan diunggah oleh Lembaga ke Platform, termasuk hubungan antara Lembaga dengan Penerima Manfaat, status hukum, dan status penyelenggara negara adalah sesuai dengan fakta dan dapat dipertanggungjawabkan;</li>
          <li>Menunjuk 1 rekening bank dari salah satu Mitra Pencairan Dana sebagai rekening tujuan dalam rangka Pencairan Dana yang sifatnya tidak dapat diubah, kecuali dalam keadaan darurat, dapat mengajukan permohonan perubahan data kepada Penyedia Platform melalui SATUWAKAF Indonesia;</li>
        </ul>

        <p class="mb-3"><strong>Ketentuan Verifikasi</strong></p>
        <p class="mb-1">
          1. Seluruh Penggalang Dana memahami dan menyetujui kewajiban untuk melakukan verifikasi sebelum dapat mencairkan donasi yang diperoleh dari Penggalangan Dana miliknya.
        </p>
        <p class="mb-1">
          2. Penggalang Dana untuk kebutuhan medis diwajibkan untuk melakukan verifikasi identitas dan verifikasi dokumen medis, sementara Penggalang Dana untuk kebutuhan non-medis hanya diwajibkan untuk verifikasi identitas.
        </p>
        <p class="mb-1">
          3. Penggalang Dana dilarang menggunakan layanan SATUWAKAF Indonesia untuk menyamar/memalsukan dirinya dan/atau menyamar/memalsukan Penerima Manfaat sebagai pihak lain secara melawan hukum.
        </p>
        <p class="mb-1">
          4. Cara untuk verifikasi identitas adalah dengan mengunggah foto dokumen: KTP, swafoto dengan KTP, nomor ponsel aktif. Akun lembaga perlu menambahkan NPWP atau Akta Pendirian Perusahaan, dan swafoto dengan NPWP/Akta.
        </p>
        <p class="mb-1">
          5. Cara verifikasi dokumen medis: unggah dokumen medis dan KK atau dokumen sejenis milik Penerima Manfaat.
        </p>
        <p class="mb-1">
          6. Proses verifikasi dilakukan oleh SATUWAKAF Indonesia sesuai Syarat & Ketentuan dan prosedur internal.
        </p>
        <p class="mb-1">
          7. Setiap Penggalang Dana yang membuat perjanjian kerja sama terpisah dengan SATUWAKAF Indonesia wajib menyepakati dokumen formal (PKS/Surat Pernyataan).
        </p>
        <p class="mb-3">
          8. SATUWAKAF Indonesia tidak memperjualbelikan atau menyewakan data, informasi, dan dokumen yang digunakan dalam proses verifikasi.
        </p>
      </main>
    </div>
  </Layouts>
</template>
