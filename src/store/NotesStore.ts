import {makeAutoObservable} from "mobx";
import {NotesType} from "../components/notes/Notes";
import {notesAPI} from "../api/notes-api";
import RootStore from "./RootStore";

class NotesStore {

    note: NotesType = {date: '', id: null, title: '', content: '', status: true}
    noteId: number | null = null
    notes: NotesType[] = [];
    deleteStatus: string = ''

    constructor(private readonly  store: RootStore) {
        makeAutoObservable(this)

        // this.store.connectStore.connectionStatus
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

    viewDetailedNote = (id: number | null) => {
            notesAPI.GetNote(id)
                .then(res => {
                    this.note = res.data.data
                })
    }

    getNoteId = (id: number | null) => {
        if (typeof id == "number")
            this.noteId = id
    }

}

export default NotesStore


