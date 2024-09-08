import CardWrapper from '@/components/layout/auth/CardWrapper'
import CustomCarousel from '@/components/layout/auth/CustomCarousel'
import { NextPage } from 'next'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
    return <main className='h-[100vh] flex justify-center items-center bg-neutral-75'>
        <div className='container w-full xl:w-[85%] mx-auto flex items-center h-[80%] gap-28 mt-24 lg:mt-0'>
            <div className='lg:basis-1/2 h-full hidden lg:flex justify-end'>
                <CustomCarousel />
            </div>
            <div className='lg:basis-1/2 w-full'>
                <CardWrapper>
                    {children}
                </CardWrapper>
            </div>
        </div>
    </main>
}

export default Layout