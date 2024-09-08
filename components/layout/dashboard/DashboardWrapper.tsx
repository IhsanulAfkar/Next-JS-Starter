'use client'
import { NextPage } from 'next'
import { ReactNode, Suspense, useEffect, useRef, useState } from 'react'
import SideNav from './SideNav'
import Loading from '@/app/(dashboard)/loading'
import { Button } from '@nextui-org/react'
import DashboardNavbar from './DashboardNavbar'

interface Props {
    children: ReactNode
}

const DashboardWrapper: NextPage<Props> = ({ children }) => {
    const triggerRef = useRef<HTMLButtonElement>(null)
    const [isOpen, setIsOpen] = useState(true)
    return <main className=''>
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} triggerRef={triggerRef} />
        <div className='w-full pl-0 md:pl-[270px] h-screen overflow-hidden'>
            <DashboardNavbar triggerRef={triggerRef} isOpen={isOpen} setIsOpen={setIsOpen} />
            <Suspense fallback={<Loading />}>
                <div className={``}>
                    {isOpen && (<div className={`absolute inset-0 bg-black bg-opacity-30 transition-all duration-300 md:hidden z-10`}></div>)}

                    <div className='overflow-y-auto p-6 max-h-screen'>
                        {children}
                    </div>
                </div>
            </Suspense>
        </div>
    </main>
}

export default DashboardWrapper