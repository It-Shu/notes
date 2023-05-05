import React, {useEffect} from 'react';
import './App.css';
import Sidebar from "./components/sidebar/SideBar";
import { Routes, Route } from "react-router-dom";
import Notes from "./components/notes/Notes";
import AddNote from "./components/notes/AddNote";
import {useRootStore} from "./store/RootStoreProvider";
import {observer} from "mobx-react-lite";

const App = observer(() => {

    const {connectStore} = useRootStore()

    useEffect(() => {
        connectStore.fetchConnect()
    }, [])

    return (
        <>
            <div>Connection status: {connectStore.connectionStatus}</div>
                <Sidebar />
                <Routes>
                    <Route path='/notes' element={<Notes />} />
                    <Route path='/note' element={<AddNote />} />
                    {/*<Route path='/tasks' element={<Tasks />} />*/}
                    {/*<Route path='/chats' element={<Chats />} />*/}
                    {/*<Route path='/analytics' element={<Analytics />} />*/}
                </Routes>
        </>
    );
})

export default App;
