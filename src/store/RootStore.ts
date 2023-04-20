import ConnectStore from "./ConnectStore";
import NotesStore from "./NotesStore";
import {makeAutoObservable} from "mobx";


class RootStore {

readonly  notesStore: NotesStore
readonly  connectStore: ConnectStore

    constructor() {
        // makeAutoObservable(this)
        this.notesStore = new NotesStore(this)
        this.connectStore = new ConnectStore(this)
    }

}

export default RootStore

