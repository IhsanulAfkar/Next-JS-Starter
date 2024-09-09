'use client'
import { fetchClient } from '@/helper/fetchClient'
import route from '@/routes'
import { Article } from '@/types'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from '@nextui-org/react'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

interface Props { }

const DashboardPage: NextPage<Props> = ({ }) => {
    const [articles, setArticles] = useState<Article[]>([])
    const { data: session } = useSession()
    const fetchArticles = async () => {
        const result = await fetchClient({
            method: 'GET',
            url: route('backend.articles'),
            user: session?.user
        })
        if (!result) toast.error('Server Error')
        const resultData = await result?.json()
        if (result?.ok) {
            setArticles(resultData.data)
        } else {
            toast.error(resultData.message)
        }
    }
    useEffect(() => {
        if (session?.user) {
            fetchArticles()
        }
    }, [session?.user])
    return <>
        <p className='font-bold text-3xl text-center'>MyArticles</p>
        <p className='font-semibold text-1xl text-center mt-4'>Article Lists</p>
        <div className='mt-4 items-center sm:items-start justify-center flex flex-col sm:flex-row gap-4 flex-nowrap sm:flex-wrap'>
            {articles.map(article => (<>
                <Card key={article.id} className="max-w-sm w-full">
                    <CardHeader className="" as={Link} href={route('article.show', {
                        articleId: article.slug
                    })}>
                        <div className="flex flex-col">
                            <p className="text-lg font-bold">{article.title}</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p>{article.content.substring(0, 40)}</p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <div className='w-full flex gap-2'>
                            <Button variant='light' size='sm' className='w-full' color='primary'>Edit</Button>
                            <Button variant='light' size='sm' className='w-full' color='danger'>Delete</Button>
                        </div>
                    </CardFooter>
                </Card>
            </>))}
        </div>
    </>
}

export default DashboardPage