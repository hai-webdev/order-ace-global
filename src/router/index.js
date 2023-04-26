import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import store from '@/store';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      scode: 8,
    },
    component: Home,
  },
  {
    path: "/company",
    name: "Company",
    meta: {
      scode: 5,
    },
    component: () => import("@/views/Company"),
  },
  {
    path: "/sponsor",
    name: "Sponsor",
    meta: {
      scode: 6,
    },
    component: () => import("@/views/Team"),
  },
  {
    path: "/team",
    name: "Team",
    meta: {
      scode: 7,
    },
    component: () => import("@/views/Team"),
  },
  {
    path: "/strategy",
    name: "Strategy",
    meta: {
      scode: 2,
    },
    component: () => import("@/views/Strategy"),
  },
  {
    path: "/investor_relation",
    name: "InvestorRelation",
    meta: {
      scode: 3,
    },
    component: () => import("@/views/InvestorRelation"),
  },
  {
    path: "/contact",
    name: "Contact",
    meta: {
      scode: 4,
    },
    component: () => import("@/views/Contact"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  console.log();
  if(to.name){
    if(to.name === "Home"){
      document.title = store.state.site.site.title || to.name
    } else{
      document.title = to.name;
    }
  }
  document.documentElement.scrollTop = 0;
});
export default router;
