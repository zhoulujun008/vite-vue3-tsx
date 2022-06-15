import {
  createRouter,
  RouteRecordRaw,
  NavigationGuardNext,
  createWebHashHistory,
  RouteLocationNormalized,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/space',
    name: 'space',
    component: () => import('@/pages/space/index'),
    meta: {
      parent: 'space',
    },
  },
  {
    path: '/exception',
    name: 'exception',
    component: () => import('@/pages/exception'),
    meta: {
      parent: 'exception',
      isHideNav: true,
    },
  },
  {
    path: '/:space_uid',
    name: 'home',
    meta: {
      type: 'home',
    },
    component: () => import('@/pages/home'),
    children: [
      {
        path: 'dashboards/detail',
        name: 'dashboard',
        component: () => import('@/pages/dashboard/index'),
        meta: {
          parent: 'dashboard',
        },
        children: [
          {
            path: ':folder_uid/:uid',
            name: 'dashboard-preview',
            component: () => import('@/pages/dashboard/dashboard'),
            meta: {
              parent: 'dashboard',
            },
          },
        ],

      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/pages/403'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  next();
});

export default router;
