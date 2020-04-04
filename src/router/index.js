import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Product2 from "../views/Product2.vue";
import Product3 from "../views/Product3.vue";
import Product4 from "../views/Product4.vue";
import Product5 from "../views/Product5.vue";
import Product6 from "../views/Product6.vue";
import Product7 from "../views/Product7.vue";
import Product8 from "../views/Product8.vue";
import Product9 from "../views/Product9.vue";
import Product10 from "../views/Product10.vue";
import Product11 from "../views/Product11.vue";
import Product12 from "../views/Product12.vue";
import Privacy from "../views/Privacy.vue";
import TermOfServices from "../views/TermOfServices.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/product",
    props: true,
    name: "Product",
    component: Product
  },
  {
    path: "/product2",
    props: true,
    name: "Product",
    component: Product2
  },
  {
    path: "/product3",
    props: true,
    name: "Product",
    component: Product3
  },
  {
    path: "/product4",
    props: true,
    name: "Product",
    component: Product4
  },
  {
    path: "/product5",
    props: true,
    name: "Product",
    component: Product5
  },
  {
    path: "/product6",
    props: true,
    name: "Product",
    component: Product6
  },
  {
    path: "/product7",
    props: true,
    name: "Product",
    component: Product7
  },
  {
    path: "/product8",
    props: true,
    name: "Product",
    component: Product8
  },
  {
    path: "/product9",
    props: true,
    name: "Product",
    component: Product9
  },
  {
    path: "/product10",
    props: true,
    name: "Product",
    component: Product10
  },
  {
    path: "/product11",
    props: true,
    name: "Product",
    component: Product11
  },
  {
    path: "/product12",
    props: true,
    name: "Product",
    component: Product12
  },
  {
    path: "/privacy",
    props: true,
    name: "Privacy",
    component: Privacy
  },
  {
    path: "/TermOfServices",
    props: true,
    name: "TermOfServices",
    component: TermOfServices
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;