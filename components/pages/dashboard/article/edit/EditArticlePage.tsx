'use client'
import Loading from '@/app/(dashboard)/loading'
import { fetchClient } from '@/helper/fetchClient'
import route from '@/routes'
import { Article, FetchResponse } from '@/types'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import EditArticle from './EditArticle'

interface Props {
    slug: string
}

const EditArticlePage: NextPage<Props> = ({ slug }) => {
    const { push } = useRouter()
    const { data: session } = useSession()
    const [article, setArticle] = useState<Article>()
    const fetchArticle = async () => {
        const result = await fetchClient({
            method: 'GET',
            url: route('backend.getarticle', { slug }),
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
            <EditArticle article={article} />
        </> : <>
            <Loading />
        </>}</>
}

export default EditArticlePage