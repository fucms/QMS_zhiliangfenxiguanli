import Layout from '@/layout'

const alhbasicDataRouter = {
  path: '/alhbasicData',
  component: Layout,
  redirect: '/alh_basicData/checkReport/index',
  meta: { title: '入厂检验管理', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'checkReport',
      component: () => import('@/views/alh_basicData/checkReport/index.vue'),
      name: 'checkReport',
      meta: { title: '检验报告' }
    },
    {
      path: 'checkStandard',
      component: () => import('@/views/alh_basicData/checkStandard/index.vue'),
      name: 'checkStandard',
      meta: { title: '检验标准维护' }
    },
    {
      path: 'keep',
      component: () => import('@/views/alh_basicData/keep/index.vue'),
      name: 'keep',
      meta: { title: '抽样方案维护' }
    },
    {
      path: 'Unqualified',
      component: () => import('@/views/alh_basicData/Unqualified/index.vue'),
      name: 'Unqualified',
      meta: { title: '不合格品通知单' }
    }
  ]
}

export default alhbasicDataRouter
