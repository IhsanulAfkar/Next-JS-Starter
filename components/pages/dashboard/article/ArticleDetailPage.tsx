'use client'
import Loading from '@/app/(dashboard)/loading'
import { fetchClient } from '@/helper/fetchClient'
import { Article, FetchResponse } from '@/types'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import ArticleDetail from './ArticleDetail'
import route from '@/routes'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

interface Props {
    slug: string
}

const ArticleDetailPage: NextPage<Props> = ({ slug }) => {
    const { push } = useRouter()
    const { data: session } = useSession()
    const [article, setArticle] = useState<Article>()
    const fetchArticle = async () => {
        const result = await fetchClient({
            method: 'GET',
            url: route('backend.getarticle', { slug }),
            user: session?.user
        })
        if (result) {
            if (result.status === 404) {
                toast.error('Article not found')
                push(route('dashboard'))
                return
            }
            const resultData: FetchResponse<Article> = await result.json()
            if (result.ok) {
                setArticle(resultData.data)
                return
            }
            toast.error(resultData.message)
            return
        }
        toast.error('Server Error')
    }
    useEffect(() => {
        if (session?.user) {
            fetchArticle()
        }
    }, [session?.user])

    return <>
        {article ? <>
            <ArticleDetail article={article} />
        </> : <>
            <Loading />
        </>}
    </>
}

export default ArticleDetailPage