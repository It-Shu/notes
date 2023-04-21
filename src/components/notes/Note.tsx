import React, {FC} from 'react';
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


    return (
        <>
            {notesStore.notes.filter(n => n.id !== notesStore.noteId).map((data) => {

                return (
                    <C.Note key={data.id} onClick={() => {
                        notesStore.viewDetailedNote(data.id)
                        handleActive()
                    }}>
                        <C.HeaderNote>
                            <C.NoteTitle>{data.title}</C.NoteTitle>
                            <C.TrashNote onClick={(e) => {
                                notesStore.getNoteId(data.id)
                                e.stopPropagation()
                            }}/>
                        </C.HeaderNote>
                        <C.NoteContent>{data.content}</C.NoteContent>
                    </C.Note>
                )
            })}
        </>
    );
});

export default Note;
