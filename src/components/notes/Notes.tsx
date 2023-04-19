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

    // const notes = useContext(NotesStoreContext);
    const {notesStore} = useRootStore()

    const note = {date: '', id: null, title: '', content: '', status: true}

    // const [notes, setNotes] = useState<NotesType[]>([]);
    // const [deleteStatus, setDeleteStatus] = useState('')

    const [noteId, setNoteId] = useState<null | number>(null)
    const [noteData, setNoteData] = useState<NotesType>(note)

    const {modalActive, handleClose, handleActive} = useModal(false);

    const viewNoteHandler = (id: number | null) => {
        if (id)
        notesAPI.GetNote(id)
                .then(res => {
                    setNoteData(res.data.data)
                    handleActive()
                })
    }

    useEffect(() => {
        notesStore.fetchNote()
    }, [])

    useEffect(() => {
        if (noteId) {
            notesStore.removeNote(noteId)
        }
    }, [noteId])

    const getNoteId = (id: number | null) => {
        if (id)
        setNoteId(id)
    }

    // todo обновление детальной информации о заметке в модальном окне после edit

    return (
        <NotesContainer>
            <Modal active={modalActive} content={<NoteDetails noteData={noteData}/>} onClose={handleClose}/>
            <Note
                notes={notesStore.notes}
                noteId={noteId}
                getNoteDeleteId={getNoteId}
                viewNoteHandler={viewNoteHandler}
            />
        </NotesContainer>
    )
})

export default Notes
