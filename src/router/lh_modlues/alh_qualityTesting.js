import Layout from '@/layout'

const qualityTestingRouter = {
  path: '/qualityTesting',
  component: Layout,
  redirect: '/basicSetting/index',
  meta: { title: '制程检验管理', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'basicSetting',
      component: () => import('@/views/alh_qualityTesting/basicSetting/index.vue'),
      name: 'basicSetting',
      meta: { title: '基础设置' }
    },
    {
      path: 'checkBill',
      component: () => import('@/views/alh_qualityTesting/checkBill/index.vue'),
      name: 'checkBill',
      meta: { title: '检验台账' }
    },
    {
      path: 'unqualifiedMake',
      component: () => import('@/views/alh_qualityTesting/unqualifiedMake/index.vue'),
      name: 'unqualifiedMake',
      meta: { title: '不合格品处理' }
    },
    {
      path: 'quality',
      component: () => import('@/views/alh_qualityTesting/quality/index.vue'),
      name: 'quality',
      meta: { title: '质量统计分析' }
    },
    {
      path: 'checkRecord',
      component: () => import('@/views/alh_qualityTesting/checkRecord/index.vue'),
      name: 'checkRecord',
      meta: { title: '检验记录台账' }
    },
    {
      path: 'deliverCheck',
      component: () => import('@/views/alh_qualityTesting/deliverCheck/index.vue'),
      name: 'deliverCheck',
      meta: { title: '发货检验管理' }
    },
    {
      path: 'returnCheck',
      component: () => import('@/views/alh_qualityTesting/returnCheck/index.vue'),
      name: 'returnCheck',
      meta: { title: '退货检验管理' }
    }
  ]
}

export default qualityTestingRouter
