import React, {FC, useCallback} from 'react';
import * as C from '../Notes.style';
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../store/RootStoreProvider";

type NotesPropsType = {
    handleActive: () => void
}

const Note: FC<NotesPropsType> = observer((props) => {

    const {
        handleActive
    } = props

    const {notesStore} = useRootStore()

    const activateDetailedModal = useCallback((id: number | null) => {
        if (id)
            notesStore.viewDetailedNote(id)
        handleActive()
    }, [])

    const getNoteId = (e: React.MouseEvent<SVGElement>, id: number | null) => {
        if (id)
        notesStore.getNoteId(id)
        e.stopPropagation()
    }

    return (
        <>
            {notesStore.notes.filter(n => n.id !== notesStore.noteId).map((data) => {

                return (
                    <C.Note key={data.id} onClick={() => activateDetailedModal(data.id)}>
                        <C.HeaderNote>
                            <C.NoteTitle>{data.title}</C.NoteTitle>
                            <C.TrashNote onClick={(e) => getNoteId(e, data.id)}/>
                        </C.HeaderNote>
                        <div>{data.content}</div>
                    </C.Note>
                )
            })}
        </>
    );
});

export default Note;
