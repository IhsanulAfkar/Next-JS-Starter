'use client'
import { Button } from '@nextui-org/react'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { Dispatch, ReactNode, RefObject, SetStateAction, useEffect, useState } from 'react'

interface Props {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    triggerRef: RefObject<HTMLButtonElement>
}

const DashboardNavbar: NextPage<Props> = ({ triggerRef, isOpen, setIsOpen }) => {
    const { data: session } = useSession()
    return (<nav className='bg-white border-b border-black w-full px-4 py-2 flex items-center justify-between'>
        <div>
            <p className='font-semibold text-lg'>Hello {session?.user?.username}!</p>
        </div>
        <Button size='sm' variant='light' radius='md' className='p-2 block md:hidden' ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
            <img src='/assets/icons/dashboard/menu.svg' width={30} />
        </Button>
    </nav>)
}

export default DashboardNavbar