/**
 * app.js
 *
 * This is the main app controller, used as a router.
 */

const app = new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: 'home' },
      { path: '/showcase', component: 'showcase' },
      { path: '/about', component: 'about' }
    ]
  })
}).$mount('#app');