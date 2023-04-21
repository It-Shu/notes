import {makeAutoObservable} from "mobx";
import {NotesType} from "../components/notes/Notes";
import {notesAPI, NoteType} from "../api/notes-api";
import RootStore from "./RootStore";
import {ChangeEvent} from "react";

class NotesStore {


    note: NotesType = {date: '', id: null, title: '', content: '', status: true}
    noteId: number | null = null
    notes: NotesType[] = [];
    deleteStatus: string = ''
    updatedNoteData: NoteType = {title: '', content: '', status: true}
    editModeIsActive: boolean = false

    newNoteTitle: string | undefined = ''
    newNoteContent: string | undefined = ''
    newNoteStatus: string = ''

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
                    this.updatedNoteData.title = this.note.title
                    this.updatedNoteData.content = this.note.content
                })
    }

    updateNote = () => {
        notesAPI.UpdateNote(this.note.id, this.updatedNoteData)
            .then(res => {
                console.log(`updated status: ${res.data.data}`)
            })
            .catch(error => {
                alert(`updated error: ${error}` )
            })
            .finally(() => {
                this.editModeIsActive = false
                notesAPI.GetNote(this.note.id)
                    .then((res) => {
                        this.updatedNoteData.title = res.data.data.title
                        this.updatedNoteData.content = res.data.data.content
                        this.fetchNote()
                    })
            })
    }

    getNoteId = (id: number | null) => {
        if (typeof id == "number")
            this.noteId = id
    }

    disableEditMode = () => {
        this.editModeIsActive = false
    }

    activateEditMode = () => {
        this.editModeIsActive = true
    }

    getNewNoteTitle = (event: ChangeEvent<HTMLInputElement>) => {
        this.updatedNoteData.title = event.currentTarget.value
    }

    getNewNoteContent = (event: ChangeEvent<HTMLInputElement>) => {
        this.updatedNoteData.content = event.currentTarget.value
    }

    addNewNote = () => {
        if (this.newNoteTitle && this.newNoteContent) {
            const newNote = {"title": this.newNoteTitle, "content": this.newNoteContent, "status": true}
            notesAPI.CreateNote(newNote)
                .then((res) => {
                    if (res.data.data) {
                        this.newNoteTitle = ''
                        this.newNoteContent = ''
                    }
                    this.newNoteStatus = res.data.data

                })
        }

        if (this.newNoteTitle === '') {
            return this.newNoteStatus = 'title is required'
        } else if (this.newNoteContent === '') {
            return this.newNoteStatus ='content is required'
        }
    }

    newNoteTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.newNoteTitle = event.currentTarget.value;
    };

    newNoteContentHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.newNoteContent = event.currentTarget.value;
    };

}

export default NotesStore


