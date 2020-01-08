const routers = [
  {
    path: '/assembly',
    name: 'Assembly',
    component: () => import('@/pages/assembly/assembly'),
    children: [
      {
        path: '/assembly/calendar',
        name: 'Calendar',
        alias: '',
        component:() => import('@/pages/assembly/calendar')
      }
    ]
  }
]
export default routers