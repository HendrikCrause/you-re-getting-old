import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import("../views/HomePage.vue")
    },
    {
      path: '/rules',
      component: () => import("../views/RulesPage.vue")
    },
    {
      path: '/game/new',
      component: () => import("../views/game/NewGame.vue")
    },
    {
      path: '/game/online',
      component: () => import("../views/game/OnlineGame.vue")
    },
    {
      path: '/game/print',
      component: () => import("../views/game/PrintableScore.vue")
    },
    {
      path: '/game/old',
      component: () => import("../views/game/OldQuestion.vue")
    },
    {
      path: '/game/redeem',
      component: () => import("../views/game/RedeemQuestion.vue")
    },
    {
      path: '/game/finished',
      component: () => import("../views/game/FinishedGame.vue")
    },
    {
      path: '/client/start',
      component: () => import("../views/client/ClientStart.vue")
    },
    {
      path: '/client/old',
      component: () => import("../views/client/ClientOld.vue")
    },
    {
      path: '/client/redeem',
      component: () => import("../views/client/ClientRedeem.vue")
    },
    {
      path: '/client/finished',
      component: () => import("../views/client/ClientFinished.vue")
    },
  ]
})

export default router
