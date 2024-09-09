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
        path: '/dashboard/article/{slug}'
    },
    'article.edit': {
        path: '/dashboard/article/{slug}/edit'
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
    },
    'backend.article': {
        path: '/articles/{articleId}'
    },
}
export default routes