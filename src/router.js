import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import AboutUs from './pages/ChiSono.vue'
import ProjectsIndex from './pages/projects/Projects.index.vue'
import ProjectsShow from './pages/projects/Projects.show.vue'
import PageNotFound from './pages/404.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about-us',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsIndex
        },
        {
            path: '/projects/:slug',
            name: 'projects.show',
            component: ProjectsShow,
            // per recuperare lo slug come props nella show aggiungere uesto:
            props: true,
        },
        {
            path: '/404',
            name: '404',
            component: PageNotFound,
        }
    ],
})

export { router }