import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('@/pages/Welcome.vue'),
      meta: {
        title: 'Beranda',
      },
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('@/pages/Welcome.vue'),
      meta: {
        title: 'Riwayat',
      },
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('@/pages/account/Account.vue'),
      meta: {
        title: 'Akun',
      },
    },

    {
      path: '/wakaf-uang-kemenag',
      name: 'wakaf_uang_kemenag',
      component: () => import('@/pages/wakaf_uang_kemenag/Index.vue'),
      meta: {
        title: 'Wakaf Uang Kemenag',
      },
    },
    {
      path: '/wakaf-uang-pemda',
      name: 'wakaf_uang_pemda',
      component: () => import('@/pages/wakaf_uang_pemda/Index.vue'),
      meta: {
        title: 'Wakaf Uang Pemda Jabar',
      },
    },
    {
      path: '/wakaf-uang',
      name: 'wakaf_uang',
      component: () => import('@/pages/wakaf_uang/Index.vue'),
      meta: {
        title: 'Wakaf Uang',
      },
    },
    {
      path: '/wakaf-melalui-uang',
      name: 'wakaf_melalui_uang',
      component: () => import('@/pages/wakaf_melalui_uang/Index.vue'),
      meta: {
        title: 'Wakaf melalui Uang',
      },
    },
    {
      path: '/wakaf-produktif',
      name: 'wakaf_produktif',
      component: () => import('@/pages/wakaf_produktif/Index.vue'),
      meta: {
        title: 'Wakaf produktif',
      },
    },

    {
      path: '/campaign/:slug',
      name: 'campaign.show',
      component: () => import('@/pages/campaign/Show.vue'),
      meta: {
        title: 'Wakaf',
      },
    },
    {
      path: '/campaign/:slug/checkout',
      name: 'campaign.checkout',
      component: () => import('@/pages/campaign/Checkout.vue'),
      meta: {
        title: 'Checkout',
      },
    },
     {
      path: '/about-us',
      name: 'about_us',
      component: () => import('@/pages/AboutUs.vue'),
      meta: {
        title: 'Tentang Kami',
      },
    },
    {
      path: '/press-release',
      name: 'press_release',
      component: () => import('@/pages/PressRelease.vue'),
      meta: {
        title: 'Siaran Pers',
      },
    },
    {
      path: '/contact-us',
      name: 'contact_us',
      component: () => import('@/pages/ContactUs.vue'),
      meta: {
        title: 'Kontak Kami',
      },
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('@/pages/Terms.vue'),
      meta: {
        title: 'Syarat & Ketentuan',
      },
    },
    {
      path: '/privacy-policy',
      name: 'privacy_policy',
      component: () => import('@/pages/PrivacyPolicy.vue'),
      meta: {
        title: 'Kebijakan Privasi',
      },
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('@/pages/Question.vue'),
      meta: {
        title: 'Pertanyaan',
      },
    },
  ],
})

const APP_NAME = import.meta.env.VITE_APP_NAME
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags)

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title + ' - ' + APP_NAME
  } else {
    document.title = APP_NAME
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) =>
    el.parentNode.removeChild(el),
  )

  if (!nearestWithMeta) return next()

  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement('meta')

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key])
      })

      tag.setAttribute('data-vue-router-controlled', '')

      return tag
    })

    .forEach((tag) => document.head.appendChild(tag))

  next()
})
export default router
