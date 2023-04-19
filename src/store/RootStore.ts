import ConnectStore from "./ConnectStore";
import NotesStore from "./NotesStore";
import {makeAutoObservable} from "mobx";


class RootStore {

    notesStore = new NotesStore()
    connectStore = new ConnectStore()

    constructor() {
        makeAutoObservable(this)
    }

}

export default RootStore

