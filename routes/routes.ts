import { Routes } from "@/types"
const routes: Routes = {
    'login': {
        path: '/auth/login'
    },
    'register': {
        path: '/auth/register'
    },
    'sample': {
        path: '/sample/{id}/example/{id2}'
    },
    'dashboard': {
        path: '/dashboard'
    },
    'article.create': {
        path: '/dashboard/create'
    },
    'article.show': {
        path: '/dashboard/article/{articleId}'
    },
    // backend routes
    'backend.register': {
        path: '/register'
    },
    'backend.login': {
        path: '/login'
    },
    'backend.articles': {
        path: '/articles'
    },
    'backend.getarticle': {
        path: '/articles/{slug}'
    }
}
export default routes