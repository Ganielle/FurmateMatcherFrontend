import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import("../views/Faq.vue")
    },
    {
      path: '/pethealth',
      name: 'pethealth',
      component: () => import("../views/Pethealth.vue")
    },
    {
      path: '/wellbeing',
      name: 'wellbeing',
      component: () => import("../views/Wellbeing.vue")
    },
    {
      path: '/emergencyresponse',
      name: 'emergencyresponse',
      component: () => import("../views/Emergencyresponse.vue")
    },
    {
      path: '/tips',
      name: 'tips',
      component: () => import("../views/Tips.vue")
    },
    {
      path: '/firsttimeadopters',
      name: 'firsttimeadopters',
      component: () => import("../views/Firsttimeadopters.vue")
    },
    {
      path: "/registration",
      name: "registration",
      component: () => import('../views/Register.vue')
    },
    {
      path: "/login",
      name: "login",
      component: () => import('../views/Login.vue')
    },
    {
      path: "/termsandcondition",
      name: "termsandcondition",
      component: () => import('../views/Termsandcondition.vue')
    },
    {
      path: "/validation",
      name: "validation",
      component: () => import("../views/Uservalidation.vue")
    },
    {
      path: "/user",
      name: "user",
      component: () => import('../views/Dashboard/User/Dashboard.vue'),
      redirect: "/user/home",
      children: [{
        path: "home",
        name: "userhome",
        component: () => import('../pages/Dashboard/User/Home.vue')
      },
      {
        path: "userprofile",
        name: "userprofile",
        component: () => import('../pages/Dashboard/User/Profile.vue')
      },
      {
        path: "/likepets",
        name: "likpets",
        component: () => import("../pages/Dashboard/User/LikePets.vue")
      },
      {
        path: "/usermessages",
        name: "usermessages",
        component: () => import("../pages/Dashboard/User/Usermessages.vue")
      },
      {
        path: ":petid/petviewer",
        name: "petviewer",
        component: () => import("../pages/Dashboard/User/Petdetails.vue"),
        props: true
      }]
    },
    {
      path: "/rescuer",
      name: "rescuer",
      component: () => import('../views/Dashboard/Rescuer/Dashboard.vue'),
      redirect: "/rescuer/mypets",
      children: [{
        path: "mypets",
        name: "rescuerpetmanagement",
        component: () => import('../pages/Dashboard/Rescuer/Mypetsmanagement.vue')
      },
      {
        path: "/rescuermessages",
        name: "rescuermessages",
        component: () => import("../pages/Dashboard/Rescuer/Messagerescuer.vue")
      }]
    }
  ]
})

export default router
