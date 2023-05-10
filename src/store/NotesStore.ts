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
    error: string = ''

    constructor(private readonly store: RootStore) {
        makeAutoObservable(this)

        // this.store.connectStore.connectionStatus
    }

    fetchNote = () => {
        notesAPI.GetNotes()
            .then(res => {
                this.notes = res.data.data
                this.deleteStatus = ''
            })
            .catch((err) => {
                this.error = err.message
                console.log(err.message)
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
                alert(`updated error: ${error.message}`)
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
        this.updatedNoteData.title = this.note.title
        this.updatedNoteData.content = this.note.content
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
        if (this.newNoteTitle === '') {
            return this.newNoteStatus = 'title is required'
        }

        if (this.newNoteContent === '') {
            return this.newNoteStatus = 'content is required'
        }

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
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {
                    this.fetchNote()
                })
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


// import { makeAutoObservable } from "mobx";
// import { ChangeEvent } from "react";
// import { NoteType, notesAPI } from "../api/notes-api";
// import RootStore from "./RootStore";
//
// interface Note {
//     id: number;
//     title: string;
//     content: string;
//     status: boolean;
//     date: string;
// }
//
// class NotesStore {
//     notes: Note[] = [];
//     isLoading: boolean = false;
//     error: string = "";
//
//     constructor(private readonly store: RootStore) {
//         makeAutoObservable(this);
//     }
//
//     fetchNotes = async () => {
//         this.isLoading = true;
//         try {
//             const res = await notesAPI.getNotes();
//             this.notes = res.data.data;
//         } catch (error) {
//             this.error = error.message;
//         } finally {
//             this.isLoading = false;
//         }
//     };
//
//     addNote = async (title: string, content: string, status: boolean) => {
//         try {
//             const res = await notesAPI.createNote({
//                 title,
//                 content,
//                 status,
//             });
//             const newNote = res.data.data;
//             this.notes.push(newNote);
//         } catch (error) {
//             this.error = error.message;
//         }
//     };
//
//     updateNote = async (note: Note) => {
//         try {
//             await notesAPI.updateNote(note.id, {
//                 title: note.title,
//                 content: note.content,
//                 status: note.status,
//             });
//         } catch (error) {
//             this.error = error.message;
//         }
//     };
//
//     deleteNote = async (noteId: number) => {
//         try {
//             await notesAPI.deleteNote(noteId);
//             this.notes = this.notes.filter((note) => note.id !== noteId);
//         } catch (error) {
//             this.error = error.message;
//         }
//     };
//
//     clearError = () => {
//         this.error = "";
//     };
//
//     // Optional: separate concerns into different modules
//     // For example:
//     // - NoteFormStore: responsible for managing form state and validation
//     // - NoteEditModeStore: responsible for managing edit mode state
//
//     // Optional: improve error handling with more descriptive error messages and consistent handling
//
//     // Optional: use async/await for more readable and maintainable asynchronous code
//
//     // Optional: use interfaces to define types instead of defining them inline
//
//     // Optional: use more descriptive variable and function names to improve readability and maintainability
//
//     // Optional: use constants for string literals and API endpoints
// }
//
// export default NotesStore;

