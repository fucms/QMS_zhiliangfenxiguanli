import Layout from '@/layout'

const alhincomingRouter = {
  path: '/alhincoming',
  component: Layout,
  redirect: '/query/index',
  meta: { title: '客诉质量管理', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'query',
      component: () => import('@/views/alh_incoming/query/index.vue'),
      name: 'query',
      meta: { title: '异常报告处理单据查询' }
    },
    {
      path: 'add',
      component: () => import('@/views/alh_incoming/add/index.vue'),
      name: 'add',
      meta: { title: '新增异常报告维护' }
    }
  ]
}

export default alhincomingRouter
