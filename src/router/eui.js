const routers = [
  {
    path: '/eui',
    name: 'Eui',
    component: () => import('@/pages/eui/eui'),
    children: []
  }
]
export default routers