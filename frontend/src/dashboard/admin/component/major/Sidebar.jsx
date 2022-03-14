import React, { useCallback, useState } from 'react'

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import chevron_left from '../../asset/chevron-left.svg'
import chevron_right from '../../asset/chevron-right.svg'

export default function Sidebar() {
    const [ sideCollapsed, setSideCollapsed ] = useState(false);

    const toggleSideCollapsed = useCallback(() => {
        setSideCollapsed(collapsed => !collapsed)
    }, [ setSideCollapsed ])

    return (
        <>
            <ProSidebar collapsed={sideCollapsed}>
                <Menu iconShape="square"> 
                    <SidebarHeader onClick={toggleSideCollapsed} className='pb-2'>
                        {
                            sideCollapsed === true ? (
                                <div className='bg-slate-100 hover:bg-slate-170 mx-5 my-2 p-2 rounded-lg w-fit duration-300'><img src={chevron_left} alt="" /></div>
                            ) : (
                                <div className='bg-slate-100 hover:bg-slate-170 mx-5 my-2 p-2 rounded-lg w-fit duration-300'><img src={chevron_right} alt="" /></div>
                            )
                        }
                    </SidebarHeader>
                    <SidebarContent>
                        <SubMenu title="Components">
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </SidebarContent>
                </Menu>
            </ProSidebar>
        </>
    )
}
