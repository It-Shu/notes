import React, {ChangeEvent, FC, useEffect, useRef} from 'react';
import {useRootStore} from "../../store/RootStoreProvider";
import {observer} from "mobx-react-lite";
import * as C from '../Notes.style'
import {NoteInputContainer} from "../Notes.style";

type EditModeTypes = {
    formattedDate: string
}

const EditMode: FC<EditModeTypes> = observer((props) => {

    const {notesStore} = useRootStore()

    return (
        <div>
            <div>
                <C.NoteButton onClick={notesStore.disableEditMode}>Back</C.NoteButton>
                <C.NoteButton onClick={notesStore.updateNote}>update note</C.NoteButton>
            </div>

            <C.NoteNumber>Note №: {notesStore.note.id}</C.NoteNumber>
            <C.NoteInputContainer>
                <C.NoteInput type="text" value={notesStore.updatedNoteData.title}
                                         onChange={notesStore.getNewNoteTitle}
                                         />
                <C.NoteInput type="text" value={notesStore.updatedNoteData.content}
                                           onChange={notesStore.getNewNoteContent}
                />
            </C.NoteInputContainer>

            <C.NoteDate>{props.formattedDate}</C.NoteDate>
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
