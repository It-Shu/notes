import React, {ChangeEvent, FC} from 'react';
import * as C from "../Notes.style";

type InputType = {
    add: boolean
    placeholder?: string
    newNoteValue: string | undefined
    valueLength?: string
    newNoteHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputType> = (props) => {
    const {
        newNoteValue,
        valueLength,
        newNoteHandler,
        placeholder,
        add
    } = props

    if (add) {
        return <div>
            <C.NoteInput type="text" value={newNoteValue} placeholder={placeholder} onChange={newNoteHandler}/>
            <C.InputCheckValueLength>{newNoteValue?.length}/{valueLength}</C.InputCheckValueLength>
        </div>
    }

    return (
        <div>
            <C.NoteInput type="text" value={newNoteValue} onChange={newNoteHandler}/>
            <C.InputCheckValueLength>{newNoteValue?.length}/{valueLength}</C.InputCheckValueLength>
        </div>
    );
};

export default Input;
