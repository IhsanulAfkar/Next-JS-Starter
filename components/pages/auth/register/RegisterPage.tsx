'use client'
import InputForm from '@/components/form/InputForm'
import { fetchClient } from '@/helper/fetchClient'
import route from '@/routes'
import { RegisterForm } from '@/types'
import { Button } from '@nextui-org/react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

interface Props { }

const RegisterPage: NextPage<Props> = ({ }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const { handleSubmit, setError, register, formState: { errors } } = useForm<RegisterForm>()
    const onSubmit = async (formdata: RegisterForm) => {
        console.log(formdata)
        setIsLoading(true)

        const body = new FormData()
        body.append('phonenumber', formdata.phonenumber)
        body.append('name', formdata.name)
        body.append('password', formdata.password)
        const result = await fetchClient({
            method: "POST",
            url: route('backend.register'),
            body
        })
        if (result) {
            if (result.ok) {
                toast.success('User has been registered')
                router.push(route('login'))
                return
            }
            const resultData = await result.json()
            if (result.status === 400) {
                toast.error(resultData.message)
                setError('phonenumber', { message: resultData.data[0].msg ?? '', type: 'custom' })
                console.log(resultData.data[0].msg)
            } else {
                toast.error(resultData.msg)
            }

        }
        toast.error('Server Error')
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
            title: 'Name',
            name: 'name',
            type: 'text',
            error: errors.name,
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
        <Button type='submit' color='primary' className="rounded-md px-12 py-6" isLoading={isLoading}>Register</Button>
        <hr />
        <p className='text-sm'>Sudah punya akun? <Link href={route('login')} className='text-primary'>Login</Link></p>
    </form>
}

export default RegisterPage