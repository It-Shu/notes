import React, {FC} from 'react';
import * as C from '../Notes.style';
import {NotesType} from "./Notes";

type NotesPropsType = {
    notes: NotesType[]
    noteId: null | number
    getNoteDeleteId: (id: number | null) => void
    viewNoteHandler: (id: number | null) => void
    handleActive: () => void
}

const Note: FC<NotesPropsType> = (props) => {

    const {
        notes,
        noteId,
        getNoteDeleteId,
        viewNoteHandler,
        handleActive
    } = props


    return (
        <>
            {notes.filter(n => n.id !== noteId).map((data) => {

                return (
                    <C.Note key={data.id} onClick={() => {
                        viewNoteHandler(data.id)
                        
                        handleActive()
                    }}>
                        <C.HeaderNote>
                            <C.NoteTitle>{data.title}</C.NoteTitle>
                            <C.TrashNote onClick={(e) => {
                                getNoteDeleteId(data.id)
                                e.stopPropagation()
                            }}/>
                        </C.HeaderNote>
                        <C.NoteContent>{data.content}</C.NoteContent>
                    </C.Note>
                )
            })}
        </>
    );
};

export default Note;
