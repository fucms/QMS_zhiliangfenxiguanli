import Layout from "@/layout";

const coordinateRouter = {
  path: "/coordinate",
  component: Layout,
  redirect: "/alh_coordinate/supplier/index",
  meta: { title: "协调配合事项", icon: "el-icon-s-check" },
  children: [
    {
      path: "supplier",
      component: () => import("@/views/alh_coordinate/supplier/index.vue"),
      name: "supplier",
      meta: { title: "供应商协调" },
    },
    {
      path: "productKu",
      component: () => import("@/views/alh_coordinate/productKu/index.vue"),
      name: "productKu",
      meta: { title: "产品信息库" },
    },
  ],
};

export default coordinateRouter;
