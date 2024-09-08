import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!
export const config: AuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 43200
    },
    providers: [
        CredentialsProvider({
            id: 'login',
            name: 'login',
            credentials: {
                phonenumber: {},
                password: {}
            },
            async authorize(credentials, req) {
                if (!credentials) return null
                try {
                    console.log(credentials)
                    const body = new FormData()
                    body.append('phonenumber', credentials.phonenumber)
                    body.append('password', credentials.password)
                    const result = await fetch(BACKEND_URL + '/login', {
                        method: 'POST',
                        body
                    })
                    if (!result.ok) {
                        console.log(result.text())
                        return null
                    }
                    const { data } = await result.json()
                    console.log('data', data)
                    const user: User = {
                        id: data.user.id,
                        username: data.user.name,
                        token: data.accessToken,
                        refreshToken: data.refreshToken,
                    }
                    return user
                } catch (error) {
                    console.log(error)
                    return null
                }
            },
        }),
        CredentialsProvider({
            id: 'refresh',
            name: 'refresh',
            credentials: {
                user: {}
            },
            async authorize(credentials, req) {
                try {
                    const userData: User = JSON.parse(credentials?.user!)
                    const body = new FormData()
                    body.append('refreshToken', userData.refreshToken!)
                    const result = await fetch(BACKEND_URL + '/login', {
                        method: 'POST',
                        body
                    })
                    if (result.ok) {
                        const resultData = await result.json()
                        userData.token = resultData.data.accessToken
                        return userData
                    }
                    return null
                } catch (error) {
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, trigger, session, account }) {
            if (trigger === "update") {
                token.user = session.user
            }
            else if (account?.user) {
                token.user = account.user
            }
            else if (user) {
                token.user = user
            }
            return Promise.resolve(token)
        },
        async session({ session, token, user }: any) {
            if (token.user)
                session.user = token.user
            return Promise.resolve(session)
        },
    },
    pages: {
        signIn: '/auth/login',
    },
    jwt: {
        secret: process.env.JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET
}