import React, {MouseEvent} from 'react';
import * as C from '../Notes.style';
import {NotesType} from "./Notes";

type NotesPropsType = {
    notes: NotesType[]
    noteId: null | number
    getNoteDeleteId: (id: number | null) => void
    viewNoteHandler: (id: number | null) => void
    handleActive: () => void
}

const Note = (props: NotesPropsType) => {


    return (
        <>
            {props.notes.filter(n => n.id !== props.noteId).map((data) => {

                return (
                    <C.Note key={data.id} onClick={() => {
                        props.viewNoteHandler(data.id)
                        props.handleActive()
                    }}>
                        <C.HeaderNote>
                            <C.NoteTitle>{data.title}</C.NoteTitle>
                            <C.TrashNote onClick={(e) => {
                                props.getNoteDeleteId(data.id)
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
