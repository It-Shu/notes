import React, {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import {useRootStore} from "../../store/RootStoreProvider";
import {observer} from "mobx-react-lite";
import * as C from '../Notes.style'
import {NoteInputContainer} from "../Notes.style";
import Input from "../pages/Input";

type EditModeTypes = {
    formattedDate: string
}

const EditMode: FC<EditModeTypes> = observer((props) => {

    //todo refactor length counter
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
        <div>
            <div>
                <C.NoteButton onClick={notesStore.disableEditMode}>Back</C.NoteButton>
                <C.NoteButton onClick={notesStore.updateNote} disabled={isValueLength}>update note</C.NoteButton>
            </div>

            <C.NoteNumber>Note №: {notesStore.note.id}</C.NoteNumber>
            <C.NoteInputContainer>
                <Input add={false} valueLength={'30'} newNoteValue={notesStore.updatedNoteData.title} newNoteHandler={notesStore.getNewNoteTitle}/>
                {/*<C.NoteInput type="text" value={notesStore.updatedNoteData.title}*/}
                {/*                         onChange={notesStore.getNewNoteTitle}*/}
                {/*                         />*/}
                <Input add={false} valueLength={'200'} newNoteValue={notesStore.updatedNoteData.content} newNoteHandler={notesStore.getNewNoteContent}/>
                {/*<C.NoteInput type="text" value={notesStore.updatedNoteData.content}*/}
                {/*                           onChange={notesStore.getNewNoteContent}*/}
                {/*/>*/}
            </C.NoteInputContainer>
            <div>{notesStore.newNoteStatus}</div>
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
