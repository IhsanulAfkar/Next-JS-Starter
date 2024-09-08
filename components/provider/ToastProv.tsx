import { NextPage } from 'next'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
interface Props {
    children: ReactNode
}

const ToastProv: NextPage<Props> = ({ children }) => {
    return <>
        <ToastContainer position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />
        {children}
    </>
}

export default ToastProv