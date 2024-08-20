import Layout from "@/layout";

const alhinventoryRouter = {
  path: "/alhinventory",
  component: Layout,
  redirect: "/alh_inventory/index",
  meta: { title: "库存检验管理", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_inventory",
      component: () => import("@/views/alh_inventory/index.vue"),
      name: "alh_inventory",
      meta: { title: "库存检验管理" },
    },
  ],
};

export default alhinventoryRouter;
