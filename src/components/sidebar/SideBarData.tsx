import React from 'react'
import * as FaIcons from 'react-icons/fa'
import {FaEvernote, FaItunesNote, FaRegStickyNote, FaStickyNote} from "react-icons/fa";

export const SidebarData = [
    {
        title: 'Notes',
        path: '/notes/', // FaTrash
        icon: <FaIcons.FaStickyNote/>
    },
    {
        title: 'Add note',
        path: '/note',
        icon: <FaIcons.FaRegStickyNote/>
    },
    // {
    //     title: 'Tasks',
    //     path: '/tasks',
    //     icon: <FaIcons.FaTasks />
    // },
    // {
    //     title: 'Chats',
    //     path: '/chats',
    //     icon: <FaIcons.FaRocketchat />
    // },
    // {
    //     title: 'Analytics',
    //     path: '/analytics',
    //     icon: <FaIcons.FaRegChartBar />
    // }
]
