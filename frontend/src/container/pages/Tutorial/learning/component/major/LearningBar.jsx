import React, { useState } from 'react'
import styled from 'styled-components';
import LearningContent from './LearningContent';

const SidebarNav = styled.nav`
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
`;

function LearningBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className='inter-600 tracking-wide sticky lg:relative top-0 z-10 bg-white text-black dark:text-white dark:bg-[#09080c] duration-200'>
                <div className='flex items-center gap-4 px-10 md:px-16 py-5 lg:py-8 border-t border-b dark:border-[#23202e] duration-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='feather feather-menu block lg:hidden' onClick={showSidebar} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    <p className='text-[16px] lg:text-[25px]'>Basic Internet / Fundamental of internet</p>
                </div>
            </div>
            <SidebarNav className='fixed top-0 flex flex-col pl-10 bg-white text-black dark:text-white dark:bg-[#100e17] duration-200 w-[375px] h-screen z-10 border-r' sidebar={sidebar}>
                <div className='py-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='feather feather-x' onClick={showSidebar}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
                <div className='flex flex-col gap-10 overflow-y-scroll h-screen'>
                    <div className='py-5'>
                        <LearningContent/>
                    </div>
                </div>
            </SidebarNav>
        </>
    )
}

export default LearningBar