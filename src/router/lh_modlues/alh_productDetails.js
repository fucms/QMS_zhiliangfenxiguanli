import Layout from "@/layout";

const alh_productDetailsRouter = {
  path: "/alh_productDetails",
  component: Layout,
  redirect: "/alh_productDetails/index",
  meta: { title: "产品信息库", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_productDetails",
      component: () => import("@/views/alh_productDetails/index.vue"),
      name: "alh_productDetails",
      meta: { title: "产品信息库" },
    },
  ],
};

export default alh_productDetailsRouter;
