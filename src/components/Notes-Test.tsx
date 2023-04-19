import React, {ChangeEvent, useState} from 'react';
import {notesAPI} from "../api/notes-api";
import {useModal} from "./modal/hooks/useModal";

// export type NotesType = {
//     date: string,
//     id: number,
//     title: string,
//     content: string,
//     status: boolean
// }

function NotesTest() {

    // const [notes, setNotes] = useState<NotesType[]>([]);
    // const [connection, setConnection] = useState('');
    const [title, setTitle] = useState('');
    const [newNoteTitle, setNewNoteTitle] = useState<string | undefined>('');
    const [newNoteContent, setNewNoteContent] = useState<string | undefined>('');
    // const [note, setNote] = useState<NoteType[]>([])
    const [newNoteStatus, setNewNoteStatus] = useState('')

    const { modalActive, handleClose } = useModal(true);

    // useEffect(() => {
    //     todolistAPI.GetHome()
    //         .then((res) => {
    //             setConnection(res.data.data)
    //         })
    // }, [])

    // const getNotesOnButtonClick = () => {
    //     todolistAPI.GetNotes()
    //         .then((res) => {
    //             setNotes(res.data.data)
    //         })
    //     setTimeout(() => {
    //         setNewNoteStatus('')
    //     }, 2000)
    // }

    // const addNewNotesOnButtonClick = () => {
    //     debugger
    //     if (newNoteTitle) {
    //         const newNote = {"title": newNoteTitle, "content": newNoteContent, "status": true}
    //         todolistAPI.CreateNote(newNote)
    //             .then((res) => {
    //                 setNewNoteStatus(res.data.data)
    //                 debugger
    //                 if (res.data.data !== '') {
    //                     // getNotesOnButtonClick()
    //                 }
    //             })
    //     }
    //     if (newNoteTitle === '') {
    //         return setNewNoteStatus('title is required')
    //     }
    // }
    //
    // const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     const value = event.currentTarget.value
    //     setTitle(value);
    //     const contentArray = value.split(' ')
    //     const newTitle = value.split(' ').shift()
    //     setNewNoteTitle(newTitle)
    //     setNewNoteContent(contentArray.join(' '))
    // };

    return (
        <div className="App">
            {/*<div>Connection status: {connection}</div>*/}
            {/*<button onClick={getNotesOnButtonClick}>get notes</button>*/}
            <div>
                {/*<input type="text" onChange={onChangeHandler}/>*/}
                {/*<button onClick={addNewNotesOnButtonClick}>add note*/}
                {/*</button>*/}
            </div>
            <div>{newNoteStatus}</div>
            {/*<Note notes={notes}/>*/}
        </div>
    );
}

export default NotesTest;
