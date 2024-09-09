import ArticleDetailPage from '@/components/pages/dashboard/article/ArticleDetailPage'
import { Metadata, NextPage } from 'next'

interface Props {
  params: { slug: string }
}
export const metadata: Metadata = {
  title: 'Article'
}
const Page: NextPage<Props> = ({ params }) => {
  return <ArticleDetailPage {...params} />
}

export default Page