import {makeAutoObservable} from "mobx";
import {createContext} from 'react';
import {NotesType} from "../components/pages/Notes";
import {notesAPI} from "../api/notes-api";

class NotesStore {

    notes: NotesType[] = [];
    deleteStatus: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    fetchNote = () => {
        notesAPI.GetNotes()
            .then(res => {
                this.notes = res.data.data
                this.deleteStatus = ''
            })
    }

    removeNote = (noteId: number) => {
        notesAPI.DeleteNote(noteId)
            .then((res) => {
                this.deleteStatus = res.data.data
                this.fetchNote()
            })
    }

    viewDetailedNote = () => {
    
    }



}

export const notesStore = new NotesStore();

export const NotesStoreContext = createContext(new NotesStore());
