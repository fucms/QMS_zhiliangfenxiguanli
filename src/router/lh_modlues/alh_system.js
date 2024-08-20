import Layout from '@/layout'

const alhSystemRouter = {
  path: '/alhSystem',
  component: Layout,
  redirect: '/alh_system/userView/index',
  meta: { title: '系统管理', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'userView',
      component: () => import('@/views/alh_system/userView/index.vue'),
      name: 'userView',
      meta: { title: '用户管理' }
    },
    {
      path: 'roleView',
      component: () => import('@/views/alh_system/roleView/index.vue'),
      name: 'roleView',
      meta: { title: '角色权限' }
    },
    {
      path: 'logView',
      component: () => import('@/views/alh_system/logView/index.vue'),
      name: 'logView',
      meta: { title: '日志管理' }
    },
    {
      path: 'accountView',
      component: () => import('@/views/alh_system/accountView/index.vue'),
      name: 'accountView',
      meta: { title: '账户授权管理' }
    },
    {
      path: 'interactView',
      component: () => import('@/views/alh_system/interactView/index.vue'),
      name: 'interactView',
      meta: { title: '交互页面管理' }
    }
  ]
}

export default alhSystemRouter
