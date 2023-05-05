import React, {useCallback, useEffect, useState} from 'react'
import styled from 'styled-components'
import Note from "./Note";
import Modal from "../modal/Modal";
import {useModal} from "../modal/hooks/useModal";
import NoteDetails from "./NoteDetails";
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../store/RootStoreProvider";
import Content from "../../Test";

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
    }

    // test
    const [actionExecuted, setActionExecuted] = useState(false);

    const delayedCall = () => {
        setTimeout(() => {
            alert("Действие выполнено");
            setActionExecuted(true);
        }, 0);
    };

    const handleConfirm = useCallback(() => {
        delayedCall();
    }, []);

    const actionCheck = () => {
        if (!actionExecuted) {
            return handleActive();
        } else {
            return delayedCall();
        }
    };
// test
    if (notesStore.error) {
        return <div>
            {notesStore.error}
        </div>
    }

    return (
        <>
            {/*<button onClick={actionCheck}>Выполнить действие</button>*/}
            {/*{!actionExecuted*/}
            {/*    ?*/}

            {/*        <Modal*/}
            {/*            active={modalActive}*/}
            {/*            children={*/}
            {/*                <Content*/}
            {/*                    onConfirm={handleConfirm}*/}
            {/*                    isModalActive={modalActive}*/}
            {/*                    onModalClose={handleClose}*/}
            {/*                />}*/}
            {/*            // onClose={handleClose}*/}
            {/*        />*/}


            {/*    : null }*/}

            <NotesContainer>
                <Modal children={<NoteDetails noteData={notesStore.note}/>} onClose={handleClose} active={modalActive}/>
                <Note handleActive={activateModalWindow}/>
            </NotesContainer>
        </>

    )
})

export default Notes
