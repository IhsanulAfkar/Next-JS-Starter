
import LoginPage from '@/components/pages/auth/login/LoginPage'
import { Metadata, NextPage } from 'next'

interface Props { }
export const metadata: Metadata = {
    title: 'Login ',
}
const Page: NextPage<Props> = ({ }) => {
    return <LoginPage />
}

export default Page