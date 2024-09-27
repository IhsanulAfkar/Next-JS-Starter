import CreateArticlePage from '@/components/pages/dashboard/create/CreateArticlePage'
import { Metadata, NextPage } from 'next'
interface Props { }
export const metadata: Metadata = {
    title: "Create Article"
}
const Page: NextPage<Props> = ({ }) => {

    return <CreateArticlePage />
}

export default Page