import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as C from './SideBar.style'
import {SidebarData} from "./SideBarData";

const Sidebar: React.FunctionComponent = () => {

    const [sideBarIsActive, setSideBarIsActive] = useState(false)

    return (
        <>
            <C.Navbar>
                <C.MenuIconOpen to="#" onClick={() => {
                    setSideBarIsActive(!sideBarIsActive)
                }}>
                    <FaIcons.FaBars />
                </C.MenuIconOpen>
            </C.Navbar>

            <C.SidebarMenu close={sideBarIsActive}>
                <C.MenuIconClose to="#" onClick={() => {
                    setSideBarIsActive(!sideBarIsActive)
                }}>
                    <FaIcons.FaTimes />
                </C.MenuIconClose>

                {SidebarData.map((item, index) => {
                    return (
                        <C.MenuItems key={index}>
                            <C.MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{marginLeft: '16px'}}>{item.title}</span>
                            </C.MenuItemLinks>
                        </C.MenuItems>
                    )
                })}
            </C.SidebarMenu>
        </>
    )
}
export default Sidebar
