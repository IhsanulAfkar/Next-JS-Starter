import { DefaultSession, User } from 'next-auth'
import { RegisterOptions } from 'react-hook-form'

export * from './forms'
export type Routes = { [key: string]: { path: string } }
export type Route = (name: string, params?: { [key: string]: any }) => string

export type ConfigFormProps = {
    title: string,
    name: string,
    type: React.HTMLInputTypeAttribute,
    placeholder?: string,
    error?: FieldError,
    registerConfig: RegisterOptions
}
export type FetchClient = (params: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    body?: FormData,
    url: string,
    user?: User
}) => Promise<Response | null>;

declare module "next-auth" {
    interface User {
        id: string | undefined,
        token: string | undefined,
        refreshToken: string | undefined,
        username: string
    }
    interface Session extends DefaultSession {
        user?: User
    }
}

export type Article = {
    id: number,
    slug: string,
    title: string,
    content: string,
    images: ArticleImage[],
    createdAt: string,
}

export type ArticleImage = {
    id: number,
    articleId: number,
    url: string
}