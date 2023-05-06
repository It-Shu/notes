import React from 'react';
import styled from "styled-components";
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

    return (
        <AddNoteText>
            <C.NoteInputContainer>
                <C.NoteInput type="text" value={notesStore.newNoteTitle} placeholder='title' onChange={notesStore.newNoteTitleHandler}/>
                <C.NoteInput type="text" value={notesStore.newNoteContent} placeholder='content'
                                    onChange={notesStore.newNoteContentHandler}/>
                <C.NoteButton onClick={notesStore.addNewNote}>add note</C.NoteButton>
            </C.NoteInputContainer>
            <div>{notesStore.newNoteStatus}</div>
        </AddNoteText>
    );
});

export default AddNote;
