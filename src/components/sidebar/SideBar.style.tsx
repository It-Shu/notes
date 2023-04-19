import styled from 'styled-components'
import {Link} from "react-router-dom";

export const Navbar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 3.5rem;
  background-color: #a5a5ec;
`

export const MenuIconOpen = styled(Link)`
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    margin-left: 2rem;
    color: #ffffff;
`

export const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: #ffffff;
`

export const SidebarMenu = styled.div<{close: boolean}>`
  width: 215px;
  height: 100vh;
  background-color: #a5a5ec;
  position: fixed;
  top: 0;
  left: ${({close}) => close ? '0' : '-100%'};
  transition: .9s;
`

export const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;
`

export const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #ffffff;
        color: #000080;
        //width: 100px;
        height: 50px;
        text-align: center;
        border-radius: 5px;
        margin: 0 0.5rem;
    }
`
