import React, {useEffect} from 'react'
import styled from 'styled-components'
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

    const {modalActive, handleClose, handleActive} = useModal(false);

    useEffect(() => {
        notesStore.fetchNote()
    }, [])

    useEffect(() => {
        if (notesStore.noteId) {
            notesStore.removeNote(notesStore.noteId)
        }
    }, [notesStore.noteId])

    // todo открытые модального окна только после изменения данных

    if (notesStore.error) {
        return <div>
            {notesStore.error}
        </div>
    }

    return (
        <NotesContainer>
            <Modal active={modalActive} content={<NoteDetails noteData={notesStore.note}/>} onClose={handleClose}/>
            <Note handleActive={handleActive}/>
        </NotesContainer>
    )
})

export default Notes
