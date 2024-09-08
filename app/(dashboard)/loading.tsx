'use client'
import { div } from 'framer-motion/client'
import { NextPage } from 'next'
import { PuffLoader } from 'react-spinners'

interface Props { }

const Loading: NextPage<Props> = ({ }) => {
    return <>
        <div className='h-screen w-full flex items-center justify-center'>
            <PuffLoader
                color="#3366FF"
                loading
                size={100}
            />
        </div>
    </>
}

export default Loading