import {makeAutoObservable} from "mobx";
import {notesAPI} from "../api/notes-api";
import RootStore from "./RootStore";


class ConnectStore {

    connectionStatus: string = ''
    connectionErrorStatus: string = ''

    constructor(private readonly  store: RootStore) {
    makeAutoObservable(this)
    }

    fetchConnect = () => {
        notesAPI.GetHome()
            .then((res) => {
                this.connectionStatus = res.data.data
            })
            .catch(err => {
                this.connectionErrorStatus = err
            })
    }


}

export default ConnectStore
