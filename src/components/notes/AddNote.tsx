import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {notesAPI} from "../../api/notes-api";
import * as C from '../Notes.style'
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../store/RootStoreProvider";

const AddNoteText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #03d203;
  height: 70vh;
`

const AddNote: React.FunctionComponent = observer(() => {

    const {notesStore} = useRootStore()

    // const [newNoteTitle, setNewNoteTitle] = useState<string | undefined>('');
    // const [newNoteContent, setNewNoteContent] = useState<string | undefined>('');
    // const [newNoteStatus, setNewNoteStatus] = useState('')

    // const addNewNotesOnButtonClick = () => {
        // if (newNoteTitle && newNoteContent) {
        //     const newNote = {"title": newNoteTitle, "content": newNoteContent, "status": true}
        //     notesAPI.CreateNote(newNote)
        //         .then((res) => {
        //             if (res.data.data) {
        //                 setNewNoteTitle('')
        //                 setNewNoteContent('')
        //             }
        //             setNewNoteStatus(res.data.data)
        //
        //         })
        // }
        //
        // if (newNoteTitle === '') {
        //     return setNewNoteStatus('title is required')
        // } else if (newNoteContent === '') {
        //     return setNewNoteStatus('content is required')
        // }
    // }

    // const onChangeHandlerTitle = (event: ChangeEvent<HTMLInputElement>) => {
    //     setNewNoteTitle(event.currentTarget.value);
    // };
    //
    // const onChangeHandlerContent = (event: ChangeEvent<HTMLInputElement>) => {
    //     setNewNoteContent(event.currentTarget.value);
    // };

    return (
        <AddNoteText>
            <C.NoteInputContainer>
                <C.NoteInputTitle type="text" value={notesStore.newNoteTitle} placeholder='title' onChange={notesStore.newNoteTitleHandler}/>
                <C.NoteInputContent type="text" value={notesStore.newNoteContent} placeholder='content'
                                    onChange={notesStore.newNoteContentHandler}/>
                <button onClick={notesStore.addNewNote}>add note</button>
            </C.NoteInputContainer>
            <div>{notesStore.newNoteStatus}</div>
        </AddNoteText>
    );
});

export default AddNote;
