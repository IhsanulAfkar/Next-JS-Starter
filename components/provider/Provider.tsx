'use client';
import { NextPage } from 'next'
import NextAuthProv from './NextAuthProv';
import NextUIProv from './NextUIProv';
import { ReactNode } from 'react';
import ToastProv from './ToastProv';

interface Props {
  children: ReactNode
}

const Index: NextPage<Props> = ({ children }) => {
  return (
    <NextAuthProv>
      <NextUIProv>
        <ToastProv>
          {children}
        </ToastProv>
      </NextUIProv>
    </NextAuthProv>
  )
}

export default Index