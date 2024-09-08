'use client'
import InputForm from '@/components/form/InputForm'
import route from '@/routes'
import { LoginForm } from '@/types'
import { Button } from '@nextui-org/react'
import { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { RegisterOptions, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

interface Props { }

const Login: NextPage<Props> = ({ }) => {
    const searchParams = useSearchParams()
    const { push } = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const { handleSubmit, setError, register, formState: { errors } } = useForm<LoginForm>()
    const onSubmit = async (formdata: LoginForm) => {
        setIsLoading(true)
        const login = await signIn('login', {
            redirect: false,
            phonenumber: formdata.phonenumber,
            password: formdata.password
        })
        if (!login?.error) {
            push(searchParams.has('callbackUrl') ? searchParams.get('callbackUrl')! : route('dashboard'))
        } else if (login.status === 401) {
            toast.error('Invalid Credentials')
            setError('phonenumber', { type: 'custom' })
            setError('password', { type: 'custom' })
        } else {
            toast.error('Server Error')
        }
        setIsLoading(false)
    }
    return <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <div>
            <p className='text-center font-bold text-lg'>Welcome to MyArticle</p>
            <p className='text-center'>Your number <b className='text-primary text-lg'>1</b> article management</p>
        </div>
        <InputForm register={register} config={{
            title: 'Phone Number',
            name: 'phonenumber',
            type: 'text',
            error: errors.phonenumber,
            registerConfig: {
                required: 'cannot be empty'
            }
        }} />
        <InputForm register={register} config={{
            title: 'Password',
            name: 'password',
            type: 'password',
            error: errors.password,
            registerConfig: {
                required: 'cannot be empty'
            }
        }} />
        <Link href={'#'} className='text-sm text-primary'>lupa password?</Link>
        <Button isLoading={isLoading} type='submit' color='primary' className="rounded-md px-12 py-6">Submit</Button>
        <hr />
        <p className='text-sm'>Belum punya akun? <Link href={route('register')} className='text-primary'>Register</Link></p>
    </form>
}

export default Login