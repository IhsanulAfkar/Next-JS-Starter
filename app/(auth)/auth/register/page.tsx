import RegisterPage from '@/components/pages/auth/register/RegisterPage'
import { Metadata, NextPage } from 'next'

interface Props { }
export const metadata: Metadata = {
    title: 'Register'
}
const Page: NextPage<Props> = ({ }) => {
    return <RegisterPage />
}

export default Page