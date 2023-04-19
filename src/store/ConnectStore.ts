import {makeAutoObservable} from "mobx";


class ConnectStore {

    constructor() {
    makeAutoObservable(this)
    }


}

export default ConnectStore
