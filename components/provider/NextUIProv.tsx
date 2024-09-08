import { NextUIProvider } from '@nextui-org/react'
import { NextPage } from 'next'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const NextUIProv: NextPage<Props> = ({ children }) => {
  return <>
    <NextUIProvider>
      {children}
    </NextUIProvider>
  </>
}

export default NextUIProv