import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'https://77.79.188.93:8077/'
})

export type NoteType = {
    title: string
    content: string
    status: boolean
}

type ResponseNoteType = {
    data: string
}


export const notesAPI = {
    GetHome() {
        return instance.get<AxiosResponse>('api')
    },
    GetNotes() {
        return instance.get<AxiosResponse>('api/notes')
    },
    CreateNote(payload: NoteType) {
        return instance.post<{payload: NoteType}, AxiosResponse<ResponseNoteType>>('api/notes', payload)
    },
    DeleteNote(id: number) {
        return instance.delete<AxiosResponse>(`api/notes/${id}`)
    },
    GetNote(id: null | number) {
        return instance.get<AxiosResponse>(`api/notes/${id}`)
    },
    UpdateNote(id: null | number, payload: NoteType) {
        return instance.put<{payload: NoteType}, AxiosResponse<ResponseNoteType>>(`api/notes/${id}`, payload)
    }
}
