import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import * as C from '../Notes.style'
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../store/RootStoreProvider";
import Input from "../pages/Input";

const AddNoteText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  //color: #03d203;
  //height: 70vh;
`

const AddNote: React.FunctionComponent = observer(() => {

    const {notesStore} = useRootStore()

    const [isValueLength, setIsValueLength] = useState(false)

    useEffect(() => {
        if (notesStore.newNoteTitle!.length > 30 || notesStore.newNoteContent!.length > 200) {
            setIsValueLength(true);
            if (notesStore.newNoteTitle!.length > 30) {
                notesStore.newNoteStatus = 'title must be less than 30 characters';
            }
            if (notesStore.newNoteContent!.length > 200) {
                notesStore.newNoteStatus = 'content must be less than 200 characters';
            }
        } else {
            setIsValueLength(false);
            notesStore.newNoteStatus = '';
        }
    }, [notesStore.newNoteTitle!.length, notesStore.newNoteContent!.length])



    return (
        <AddNoteText>
            <C.NoteInputContainer>
                <Input add={true} placeholder={'title'} newNoteValue={notesStore.newNoteTitle} newNoteHandler={notesStore.newNoteTitleHandler} valueLength={'30'}/>
                <Input add={true} placeholder={'content'} newNoteValue={notesStore.newNoteContent} newNoteHandler={notesStore.newNoteContentHandler} valueLength={'200'}/>

                <C.NoteButton onClick={notesStore.addNewNote} disabled={isValueLength} isValueLength={isValueLength}>add note</C.NoteButton>
            </C.NoteInputContainer>
            <div>{notesStore.newNoteStatus}</div>
        </AddNoteText>
    );
});

export default AddNote;
