import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from "./components/sidebar/SideBar";
import { Routes, Route } from "react-router-dom";
import {notesAPI} from "./api/notes-api";
import Notes from "./components/notes/Notes";
import AddNote from "./components/notes/AddNote";

function App() {

    const [connectionStatus, setConnectionStatus] = useState('');
    const [connectionErrorStatus, setConnectionErrorStatus] = useState('');

    useEffect(() => {
        notesAPI.GetHome()
            .then((res) => {
                setConnectionStatus(res.data.data)
            })
            .catch(reason => {
                setConnectionErrorStatus(reason)
            })
    }, [])

    return (
        <>
            {/*<div>Connection status: {connection}</div>*/}
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Notes />} />
                    <Route path='/note' element={<AddNote />} />
                    {/*<Route path='/tasks' element={<Tasks />} />*/}
                    {/*<Route path='/chats' element={<Chats />} />*/}
                    {/*<Route path='/analytics' element={<Analytics />} />*/}
                </Routes>
        </>
    );
}

export default App;
