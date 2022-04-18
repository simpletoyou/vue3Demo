/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-18 12:15:32
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-18 12:18:29
 */


import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title} | vue-manage-system`;
//   const role = localStorage.getItem('ms_username');
//   if (!role && to.path !== '/login') {
//       console.log('请先进行登陆')
//       next('/login');
//   } else if (to.meta.permission) {
//       // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//       role === 'admin'
//           ? next()
//           : next('/403');
//   } else {
//       next();
//   }
// });

export default router;