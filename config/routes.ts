export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [{ name: '登录', path: '/user/login', component: './user/Login' }] },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/admin/sub-page', name: '二级管理页', icon: 'smile', component: './Welcome' },
      { component: './404' },
    ],
  },
  {
    name: '查询表格',
    icon: 'table',
    path: '/list',
    component: './TableList'
  },
  {
    name: '任务管理',
    icon: 'table',
    access: 'taskMenage',
    path: '/page/taskMenage',
    component: './taskMenage'
  },
  {
    name: '用户管理',
    icon: 'table',
    access: 'userMenage',
    path: '/page/userMenage',
    component: './userMenage'
  },
  {
    name: '派单管理',
    icon: 'table',
    access: 'sendOrder',
    path: '/page/sendOrder',
    component: './sendOrder'
  },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
