import { formatTimestamp } from '@/helper/formatter'
import route from '@/routes'
import { Article } from '@/types'
import { Button } from '@nextui-org/react'
import { NextPage } from 'next'
import Link from 'next/link'

interface Props {
    article: Article
}

const ArticleDetail: NextPage<Props> = ({ article }) => {

    return <div className='w-full mx-auto max-w-2xl'>
        <p className='font-bold text-3xl text-center '>{article.title}</p>
        <p className='font-semibold text-end mt-2'>Written at: {formatTimestamp(article.createdAt)}</p>
        {article.images.length > 0 && (<>
            <img src={article.images[0].url} alt="" className='my-4' />
        </>)}
        <hr className='my-2' />
        <p className='font-bold text-xl'>Content</p>
        <p>{article.content}</p>
        <hr className='my-2' />
        <div className='w-full flex gap-2'>
            <Button as={Link} href={route('article.edit', { slug: article.slug })} variant='light' size='sm' className='w-full' color='primary'>Edit</Button>
            <Button variant='light' size='sm' className='w-full' color='danger'>Delete</Button>
        </div>
    </div>
}

export default ArticleDetail