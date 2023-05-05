import React from 'react';
import {useRootStore} from "../../store/RootStoreProvider";
import EditMode from "./EditMode";
import {observer} from "mobx-react-lite";
import * as C from '../Notes.style'


const NoteDetails = observer(() => {

    const {notesStore} = useRootStore()

    if (notesStore.editModeIsActive) {
        return <EditMode/>
    }

    return (
        <div>
            <C.NoteButton onClick={notesStore.activateEditMode}>Edit</C.NoteButton>
            <div>ID: {notesStore.note.id}</div>
            <C.NoteInputContainer>
                <p>Title: {notesStore.updatedNoteData.title}</p>
                <p>Content: {notesStore.updatedNoteData.content}</p>
            </C.NoteInputContainer>
            <div>Date: {notesStore.note.date}</div>
            {notesStore.updatedNoteData.status
                ? <div style={{color: "green"}}>Status</div>
                : <div style={{color: "red"}}>Status</div>
            }
        </div>
    );
});

export default NoteDetails;
