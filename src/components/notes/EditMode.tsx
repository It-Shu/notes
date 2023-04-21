import React, {ChangeEvent} from 'react';
import {useRootStore} from "../../store/RootStoreProvider";

const EditMode = () => {

    const {notesStore} = useRootStore()

    const getNewNoteTitle = (event: ChangeEvent<HTMLInputElement>) => {
        notesStore.updatedNoteData.title = event.currentTarget.value
    }

    const getNewNoteContent = (event: ChangeEvent<HTMLInputElement>) => {
        notesStore.updatedNoteData.content = event.currentTarget.value
    }

    return (
        <div>
            <button onClick={notesStore.disableEditMode}>Back</button>
            <div>ID: {notesStore.note.id}</div>
            <input type="text" placeholder={notesStore.updatedNoteData.title} onChange={getNewNoteTitle}/>
            <input type="text" placeholder={notesStore.updatedNoteData.content} onChange={getNewNoteContent}/>

            <button onClick={() => {
                notesStore.updateNote()
                // notesAPI.UpdateNote(props.noteData.id, notesStore.updatedNoteData)
                //     .then(res => {
                //         console.log('updated status',res.data.data)
                //     })
                //     .catch(error => {
                //         console.log('updated error',error)
                //     })
                //     .finally(() => {
                //         activateEditMode()
                //         notesAPI.GetNote(props.noteData.id)
                //             .then((res) => {
                //                 notesStore.updatedNoteData.title = res.data.data.title
                //                 notesStore.updatedNoteData.content = res.data.data.content
                //                 notesStore.fetchNote()
                //             })
                //     })

            }}>update note
            </button>
        </div>
    );
};

export default EditMode;
