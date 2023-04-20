import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import {notesAPI} from "../../api/notes-api";
import Note from "./Note";
import Modal from "../modal/Modal";
import {useModal} from "../modal/hooks/useModal";
import NoteDetails from "./NoteDetails";
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../store/RootStoreProvider";

const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export type NotesType = {
    date: string,
    id: number | null,
    title: string,
    content: string,
    status: boolean
}


const Notes: React.FunctionComponent = observer(() => {
    const {notesStore} = useRootStore()

    // const note = {date: '', id: null, title: '', content: '', status: true}

    // const [noteId, setNoteId] = useState<null | number>(null)
    // const [noteData, setNoteData] = useState<NotesType>(note)

    const {modalActive, handleClose, handleActive} = useModal(false);

    useEffect(() => {
        notesStore.fetchNote()
    }, [])

    useEffect(() => {

    }, [])

    useEffect(() => {
        if (notesStore.noteId) {
            notesStore.removeNote(notesStore.noteId)
        }
    }, [notesStore.noteId])

    // const getNoteId = (id: number | null) => {
    //     if (id)
    //     setNoteId(id)
    // }

    // todo обновление детальной информации о заметке в модальном окне после edit

    return (
        <NotesContainer>
            <Modal active={modalActive} content={<NoteDetails noteData={notesStore.note}/>} onClose={handleClose}/>
            <Note
                notes={notesStore.notes}
                noteId={notesStore.noteId}
                getNoteDeleteId={notesStore.getNoteId}
                viewNoteHandler={notesStore.viewDetailedNote}
                handleActive={handleActive}
            />
        </NotesContainer>
    )
})

export default Notes
