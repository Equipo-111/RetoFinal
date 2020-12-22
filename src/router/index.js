import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/servicios',
        name: 'Servicios',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "servicios" */ '../views/servicios.vue')
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue'),
        meta: {
            public: true,
        }
    },
    {
        path: '/admin',
        name: 'Admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "admin" */ '../views/Admin.vue'),
        meta: {
            auth: true,
        },
        children: [{
                path: 'categoria',
                name: 'Categoria',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "categoria" */ '../views/Categoria.vue'),
                meta: {
                    auth: true,
                    administrador: true,
                    almacenero: true,
                }
            },
            {
                path: 'articulo',
                name: 'Articulo',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "articulo" */ '../views/Articulo.vue'),
                meta: {
                    auth: true,
                    administrador: true,
                    vendedor: true,
                }
            },
            {
                path: 'usuario',
                name: 'Usuario',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "usuario" */ '../views/Usuario.vue'),
                meta: {
                    auth: true,
                    administrador: true,
                }
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.public)) {
        next();
    } else if (to.matched.some(record => record.meta.auth)) {
        if (store.state.user) {
            // if ((to.matched.some(record => record.meta.administrador) && store.user.rol === 'Administrador') ||
            //     (to.matched.some(record => record.meta.vendedor) && store.user.rol === 'Vendedor') ||
            //     (to.matched.some(record => record.meta.almacenero) && store.user.rol === 'Almacenero')) {
            //     next();
            // } else {
            //     next({ name: 'Admin' });
            // }
            next();
        } else {
            next({ name: 'Login' });
        }
    } else {
        next();
    }
})

export default router