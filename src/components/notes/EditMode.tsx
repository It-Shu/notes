import React, {FC} from 'react';
import {useRootStore} from "../../store/RootStoreProvider";
import {observer} from "mobx-react-lite";

const EditMode: FC = observer(() => {

    const {notesStore} = useRootStore()


    return (
        <div>
            <button onClick={notesStore.disableEditMode}>Back</button>
            <div>ID: {notesStore.note.id}</div>
            <input type="text" placeholder={notesStore.updatedNoteData.title} onChange={notesStore.getNewNoteTitle}/>
            <input type="text" placeholder={notesStore.updatedNoteData.content} onChange={notesStore.getNewNoteContent}/>

            <button onClick={notesStore.updateNote}>update note</button>
        </div>
    );
})

export default EditMode;
