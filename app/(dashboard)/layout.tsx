import SideNav from '@/components/layout/dashboard/SideNav';
import { Sidebar } from 'flowbite-react';
import { NextPage } from 'next'
import { lazy, ReactNode, Suspense } from 'react'
import Loading from './loading';
import DashboardWrapper from '@/components/layout/dashboard/DashboardWrapper';

interface Props {
    children: ReactNode
}
// simulate loading
// const LazyComponent = lazy(() => new Promise(resolve => {
//     setTimeout(() => resolve(import('@/app/(dashboard)/dashboard/page')), 3000);
// }));
const Layout: NextPage<Props> = ({ children }) => {
    return (<>
        <DashboardWrapper>
            {children}
            {/* <LazyComponent /> */}
        </DashboardWrapper>
    </>
    );
}

export default Layout