'use client'
import { NextPage } from 'next'
import { ReactNode } from 'react'
import { animated, useSpring } from '@react-spring/web'
interface Props {
    children: ReactNode
}

const CardWrapper: NextPage<Props> = ({ children }) => {
    const componentSpring = useSpring({
        from: {
            transform: "translateX(100px)",
            opacity: "0",
        },
        to: {
            transform: "translateX(0px)",
            opacity: "1",
        },
    })
    return <>
        <animated.div style={componentSpring} className='bg-white shadow-xl px-8 py-10 rounded-xl mx-auto max-w-md lg:max-h-[80vh] overflow-y-scroll'>
            {children}
        </animated.div>
    </>
}

export default CardWrapper