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
      component: () => import('@/pages/Welcome.vue'),
      meta: {
        title: 'Akun',
      },
    },
    {
      path: '/campaign/:slug',
      name: 'campaign.show',
      component: () => import('@/pages/campaign/Show.vue'),
      meta: {
        title: 'Akun',
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
