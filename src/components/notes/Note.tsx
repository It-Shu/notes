import React, {useState} from 'react';
import * as C from '../Notes.style';
import {NotesType} from "../pages/Notes";

type NotesPropsType = {
    notes: NotesType[]
    noteId: null | number
    getNoteDeleteId: (id: number | null) => void
    viewNoteHandler: (id: number | null) => void
}

const Note = (props: NotesPropsType) => {

    return (
        <>
            {props.notes.filter(n => n.id !== props.noteId).map((data) => {

                return (
                    <C.Note key={data.id} onClick={() => {
                        props.viewNoteHandler(data.id)
                    }}>
                        <C.HeaderNote>
                            <C.NoteTitle>{data.title}</C.NoteTitle>
                            <C.TrashNote onClick={() => {
                                props.getNoteDeleteId(data.id)
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
