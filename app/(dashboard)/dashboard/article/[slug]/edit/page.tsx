import EditArticlePage from '@/components/pages/dashboard/article/edit/EditArticlePage'
import { Metadata, NextPage } from 'next'

interface Props {
    params: { slug: string }
}
export const metadata: Metadata = {
    title: 'Edit Article'
}
const Page: NextPage<Props> = ({ params }) => {
    return <EditArticlePage slug={params.slug} />
}

export default Page