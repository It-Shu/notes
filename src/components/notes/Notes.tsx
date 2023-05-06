import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Note from "./Note";
import Modal from "../modal/Modal";
import {useModal} from "../modal/hooks/useModal";
import NoteDetails from "./NoteDetails";
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../store/RootStoreProvider";
import * as C from '../Notes.style'
import {AddNoteButton} from "../Notes.style";
import AddNote from "./AddNote";

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

    const [noteDataChanged, setNoteDataChanged] = useState(false);
    const [addNoteActive, setAddNoteActive] = useState(false)

    useEffect(() => {
        notesStore.fetchNote()
    }, [])

    useEffect(() => {
        if (notesStore.noteId) {
            notesStore.removeNote(notesStore.noteId)
        }
    }, [notesStore.noteId])

    useEffect(() => {
        if (noteDataChanged) {
            handleActive();
            setNoteDataChanged(false);
        }
    }, [notesStore.note])

    const activateModalWindow = () => {
        setNoteDataChanged(true);
        notesStore.editModeIsActive = modalActive
    }

    const addNoteModalActive = () => {
        setAddNoteActive(true)
        handleActive()
    }
    const addNoteModalDeactivate = () => {
        setAddNoteActive(false)
        handleClose()
    }

    if (notesStore.error) {
        return <C.NoteError>
            {notesStore.error}
        </C.NoteError>
    }

    if (addNoteActive) {
        return <NotesContainer>
            <Modal children={<AddNote/>} onClose={addNoteModalDeactivate} active={modalActive}/>
            <Note handleActive={activateModalWindow}/>
            <C.AddNoteButton onClick={addNoteModalActive}>+</C.AddNoteButton>
        </NotesContainer>
    }

    return (
        <>
            <NotesContainer>

                <Modal children={<NoteDetails/>} onClose={handleClose} active={modalActive}/>

                <Note handleActive={activateModalWindow}/>
            </NotesContainer>
            <C.AddNoteButton onClick={addNoteModalActive}>+</C.AddNoteButton>
        </>

    )
})

export default Notes

// test
// const [actionExecuted, setActionExecuted] = useState(false);
//
// const delayedCall = () => {
//     setTimeout(() => {
//         alert("Действие выполнено");
//         setActionExecuted(true);
//     }, 0);
// };
//
// const handleConfirm = useCallback(() => {
//     delayedCall();
// }, []);
//
// const actionCheck = () => {
//     if (!actionExecuted) {
//         return handleActive();
//     } else {
//         return delayedCall();
//     }
// };
// test

{/*<button onClick={actionCheck}>Выполнить действие</button>*/
}
{/*{!actionExecuted*/
}
{/*    ?*/
}

{/*        <Modal*/
}
{/*            active={modalActive}*/
}
{/*            children={*/
}
{/*                <Content*/
}
{/*                    onConfirm={handleConfirm}*/
}
{/*                    isModalActive={modalActive}*/
}
{/*                    onModalClose={handleClose}*/
}
{/*                />}*/
}
{/*            // onClose={handleClose}*/
}
{/*        />*/
}


{/*    : null }*/
}
