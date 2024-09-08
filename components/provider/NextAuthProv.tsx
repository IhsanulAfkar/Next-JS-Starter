import { NextPage } from 'next'
import { ReactNode } from 'react'
import { SessionProvider } from "next-auth/react"

interface Props {
    children: ReactNode
}

const NextAuthProv: NextPage<Props> = ({ children }) => {
    return <SessionProvider>
        {children}
    </SessionProvider>
}

export default NextAuthProv