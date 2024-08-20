import Layout from "@/layout";

const alhproductRouter = {
  path: "/alhproduct",
  component: Layout,
  redirect: "/alh_product/index",
  meta: { title: "产品检验管理", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_product",
      component: () => import("@/views/alh_product/index.vue"),
      name: "alh_product",
      meta: { title: "产品检验管理" },
    },
  ],
};

export default alhproductRouter;
