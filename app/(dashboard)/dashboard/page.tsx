import DashboardPage from '@/components/pages/dashboard/DashboardPage'
import { Metadata, NextPage } from 'next'

interface Props { }
export const metadata: Metadata = {
    title: 'Dashboard'
}
const Page: NextPage<Props> = ({ }) => {
    return <DashboardPage />
}

export default Page