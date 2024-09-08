import { FetchClient } from "@/types"
import { signIn, signOut } from "next-auth/react"
import { toast } from "react-toastify"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
export const fetchClient: FetchClient = async ({ method, url, body, user }) => {
    try {
        let headers: Record<string, string> = {}
        if (user) {
            headers['Authorization'] = 'Bearer ' + user.token
            const result = await fetch(BACKEND_URL + url, {
                method,
                headers,
                body
            })
            if (result.status === 304) {
                if (user?.refreshToken) {
                    const refresh = await signIn('refresh', {
                        redirect: false,
                        user: JSON.stringify(user)
                    })
                    if (refresh?.error) {
                        signOut()
                        window.location.replace('/signin')

                    } else {
                        window.location = window.location
                    }
                } else {
                    signOut()
                    window.location.replace('/signin')
                }
                return null
            }
            return result
        }
        const result = await fetch(BACKEND_URL + url, {
            method,
            headers,
            body
        })
        return result
    } catch (error) {
        toast.error('Server Error')
        console.log(error)
        return null
    }
}