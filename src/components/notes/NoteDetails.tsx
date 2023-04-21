import React from 'react';
import {NotesType} from "./Notes";
import {useRootStore} from "../../store/RootStoreProvider";
import EditMode from "./EditMode";
import {observer} from "mobx-react-lite";

type NoteDetailsTypes = {
    noteData: NotesType
}

const NoteDetails = observer((props: NoteDetailsTypes) => {

    const {notesStore} = useRootStore()

    if (notesStore.editModeIsActive) {
        return <EditMode/>
    }

    return (
        <div>
            <button onClick={notesStore.activateEditMode}>Edit</button>
            <div>ID: {props.noteData.id}</div>
            <div>Title: {notesStore.updatedNoteData.title}</div>
            <div>Content: {notesStore.updatedNoteData.content}</div>
            <div>Date: {props.noteData.date}</div>

            {notesStore.updatedNoteData.status
                ? <div style={{color: "green"}}>Status</div>
                : <div style={{color: "red"}}>Status</div>
            }
        </div>
    );
});

export default NoteDetails;
