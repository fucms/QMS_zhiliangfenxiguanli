import Layout from "@/layout";

const addressRouter = {
  path: "/address",
  component: Layout,
  redirect: "/resourceShow/index",
  meta: { title: "城市地理", icon: "el-icon-s-check" },
  children: [
    {
      path: "resourceShow",
      component: () => import("@/views/address/resourceShow/index.vue"),
      name: "resourceShow",
      meta: { title: "资源展示" },
    },
    {
      path: "addressSelect",
      component: () => import("@/views/address/addressSelect/index.vue"),
      name: "addressSelect",
      meta: { title: "地名查询" },
    },
    {
      path: "spaceSelect",
      component: () => import("@/views/address/spaceSelect/index.vue"),
      name: "spaceSelect",
      meta: { title: "空间查询" },
    },
  ],
};

export default addressRouter;
