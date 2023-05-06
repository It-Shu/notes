import React from 'react';
import {useRootStore} from "../../store/RootStoreProvider";
import EditMode from "./EditMode";
import {observer} from "mobx-react-lite";
import * as C from '../Notes.style'


const NoteDetails = observer(() => {

    const {notesStore} = useRootStore()

    const date = new Date(notesStore.note.date);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const formattedDate = date.toLocaleDateString('en-US', options);

    if (notesStore.editModeIsActive) {
        return <EditMode formattedDate={formattedDate}/>
    }

    return (
        <>
            <C.EditNoteButtonContainer>
                <C.NoteButton onClick={notesStore.activateEditMode}>Edit</C.NoteButton>
            </C.EditNoteButtonContainer>

            <C.NoteNumber>Note №: {notesStore.note.id}</C.NoteNumber>
            <C.NoteInputContainer>
                <h2>{notesStore.updatedNoteData.title}</h2>
                <p>{notesStore.updatedNoteData.content}</p>
            </C.NoteInputContainer>
            <C.NoteDate>{formattedDate}</C.NoteDate>
            {notesStore.updatedNoteData.status
                ? <div style={{color: "green"}}>Status</div>
                : <div style={{color: "red"}}>Status</div>
            }
        </>
    );
});

export default NoteDetails;
