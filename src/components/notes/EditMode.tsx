import React, {ChangeEvent, FC, useEffect, useRef} from 'react';
import {useRootStore} from "../../store/RootStoreProvider";
import {observer} from "mobx-react-lite";
import * as C from '../Notes.style'
import {NoteInputContainer} from "../Notes.style";

const EditMode: FC = observer(() => {

    const {notesStore} = useRootStore()

    return (
        <div>
            <div>
                <C.NoteButton onClick={notesStore.disableEditMode}>Back</C.NoteButton>
                <C.NoteButton onClick={notesStore.updateNote}>update note</C.NoteButton>
            </div>

            <div>ID: {notesStore.note.id}</div>
            <C.NoteInputContainer>
                <div>Title: <C.NoteInput type="text" value={notesStore.updatedNoteData.title}
                                         onChange={notesStore.getNewNoteTitle}
                                         /></div>
                <div>Content: <C.NoteInput type="text" value={notesStore.updatedNoteData.content}
                                           onChange={notesStore.getNewNoteContent}
                /></div>
                <div>Date: {notesStore.note.date}</div>
            </C.NoteInputContainer>


            {notesStore.updatedNoteData.status
                ? <div style={{color: "green"}}>Status</div>
                : <div style={{color: "red"}}>Status</div>
            }
            {/*<input type="text" value={notesStore.updatedNoteData.title} onChange={notesStore.getNewNoteTitle}/>*/}
            {/*<input type="text" value={notesStore.updatedNoteData.content} onChange={notesStore.getNewNoteContent}/>*/}
        </div>
    );
})

export default EditMode;
