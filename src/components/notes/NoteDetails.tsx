import React, {ChangeEvent, useEffect, useState} from 'react';
import {NotesType} from "./Notes";
import {notesAPI, NoteType} from "../../api/notes-api";

type NoteDetailsTypes = {
    noteData: NotesType
}

const NoteDetails = (props: NoteDetailsTypes) => {

    let updatedNoteData: NoteType = {title: props.noteData.title, content: props.noteData.content, status: true}

    // const [updatedNote, setUpdatedNote] = useState(updatedNoteData)
    // const [updatedNoteTitle, setUpdatedNoteTitle] = useState('')

    const [editModeIsActive, setEditModeIsActive] = useState(false)

    // useEffect(() => {

    // }, [])

    const getNewNoteTitle = (event: ChangeEvent<HTMLInputElement>) => {
        updatedNoteData.title = event.currentTarget.value
    }

    const getNewNoteContent = (event: ChangeEvent<HTMLInputElement>) => {
        updatedNoteData.content = event.currentTarget.value
    }

    const activateEditMode = () => {
        setEditModeIsActive(!editModeIsActive)
    }

    if (editModeIsActive) {

        return <div>
            <button onClick={activateEditMode}>Edit</button>
            <div>ID: {props.noteData.id}</div>
            <input type="text" placeholder={updatedNoteData.title} onChange={getNewNoteTitle}/>
            <input type="text" placeholder={updatedNoteData.content} onChange={getNewNoteContent}/>

            <button onClick={() => {
                console.log(updatedNoteData)
                notesAPI.UpdateNote(props.noteData.id, updatedNoteData)
                    .then(res => {
                        console.log(res.data.data)
                    })
                    .catch(rejects => {
                        console.log(rejects)
                    })
                    .finally(() => {
                        activateEditMode()

                        notesAPI.GetNote(props.noteData.id)
                            .then((res) => {
                                debugger
                                updatedNoteData.title = res.data.data.title
                                updatedNoteData.content = res.data.data.content
                                console.log(updatedNoteData)
                            })
                    })

            }}>update note
            </button>
        </div>
    }

    return (
        <div>
            <button onClick={activateEditMode}>Edit</button>
            <div>ID: {props.noteData.id}</div>
            <div>Title: {updatedNoteData.title}</div>
            <div>Content: {updatedNoteData.content}</div>
            <div>Date: {props.noteData.date}</div>

            {updatedNoteData.status
                ? <div style={{color: "green"}}>Status</div>
                : <div style={{color: "red"}}>Status</div>
            }

        </div>
    );
};

export default NoteDetails;
