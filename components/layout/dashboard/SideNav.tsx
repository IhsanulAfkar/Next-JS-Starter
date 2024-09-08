'use client'
import route from '@/routes';
import { Sidebar } from 'flowbite-react';
// import { Sidebar } from 'flowbite-react'
import { NextPage } from 'next'
import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';

interface Props {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    triggerRef: RefObject<HTMLButtonElement>
}

const SideNav: NextPage<Props> = ({ isOpen, setIsOpen, triggerRef }) => {
    const sidebarRef = useRef<HTMLDivElement>(null)
    const clickHandler = ({ target }: MouseEvent) => {
        if (!sidebarRef.current || !triggerRef.current) return
        if (!isOpen || sidebarRef.current.contains(target as Node) || triggerRef.current.contains(target as Node)) return
        setIsOpen(false)
    }
    useEffect(() => {
        document.addEventListener('click', clickHandler)
        return () => {
            document.removeEventListener('click', clickHandler)
        }
    }, [])

    return <>
        <div className={`h-screen fixed overflow-hidden w-[270px] sidebar z-50 md:z-0 transition-left duration-300 ease-in-out md:left-0 ${isOpen ? 'left-0' : '-left-[270px]'}`} ref={sidebarRef}>
            <Sidebar aria-label="sidebar" className={`w-full border-r`} >
                <Sidebar.Logo href={route('dashboard')} img="/assets/icons/dashboard/article-icon.png" imgAlt="logo">
                    MyArticle
                </Sidebar.Logo>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href={route('dashboard')}>
                            Articles
                        </Sidebar.Item>
                        <Sidebar.Item href={route('article.create')} >
                            Create Articles
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    </>
}

export default SideNav