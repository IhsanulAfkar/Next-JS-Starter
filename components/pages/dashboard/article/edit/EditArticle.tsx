import InputForm from '@/components/form/InputForm'
import UploadFile from '@/components/form/UploadFile'
import { fetchClient } from '@/helper/fetchClient'
import { getFileFromUrl } from '@/helper/file'
import route from '@/routes'
import { Article, ArticleForm } from '@/types'
import { Button } from '@nextui-org/react'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

interface Props {
    article: Article
}

const EditArticle: NextPage<Props> = ({ article }) => {
    const { push } = useRouter()
    const [articleFiles, setArticleFiles] = useState<File[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const { handleSubmit, setError, register, formState: { errors } } = useForm<ArticleForm>({
        defaultValues: {
            title: article.title,
            content: article.content
        }
    })
    const { data: session } = useSession()
    const onSubmit = async (formdata: ArticleForm) => {
        if (articleFiles.length === 0) toast.error('No image added')
        setIsLoading(true)

        const body = new FormData()
        // @ts-ignore
        body.set('picture', articleFiles[0].file, articleFiles[0].file.name)
        body.append('title', formdata.title)
        body.append('content', formdata.content)
        const result = await fetchClient({
            method: 'PUT',
            url: route('backend.article', { articleId: article.id }),
            body,
            user: session?.user
        })
        if (!result) toast.error('Server Error')
        if (result?.ok) {
            toast.success('Article Updated Successfully!')
            push(route('dashboard'))
        } else {
            const resultData = await result?.json()
            toast.error(resultData.message)
        }
        setIsLoading(false)
    }
    useEffect(() => {
        if (article.images.length > 0) {
            getFileFromUrl(article.images[0].url, setArticleFiles)
        }
    }, [])
    return <>
        <p className='font-bold text-3xl text-center'>MyArticles</p>
        <p className='font-semibold text-1xl text-center mt-4'>Create Your Articles</p>
        <form className='mt-4 flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
            <InputForm register={register} config={{
                title: 'Title',
                name: 'title',
                type: 'text',
                error: errors.title,
                placeholder: "Enter Article Title Here",
                registerConfig: {
                    required: 'Cannot be empty'
                }
            }} />
            <InputForm register={register} config={{
                title: 'Content',
                name: 'content',
                type: 'text',
                error: errors.content,
                placeholder: "Enter Article Content Here",
                registerConfig: {
                    required: 'Cannot be empty'
                }
            }} />
            <div className=''>
                <UploadFile
                    files={articleFiles}
                    setFiles={setArticleFiles}
                />
            </div>
            <div className='flex justify-end'>
                <Button isLoading={isLoading} type='submit' color='primary' className="rounded-md px-12 py-6">Create</Button>
            </div>
        </form>
    </>
}

export default EditArticle