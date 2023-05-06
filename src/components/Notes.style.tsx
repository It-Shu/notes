import styled from 'styled-components';
import * as FaIcons from "react-icons/fa";

export const Note = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: content-box;
  box-shadow: -2px -2px 7px #454841;
  border-radius: 10px;
  margin: 20px 10px 10px 20px;
  padding: 10px 10px 10px 10px;
  background-color: #eae284;
  cursor: pointer;
`;

export const NoteModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const HeaderNote = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const TrashNote = styled(FaIcons.FaTrash)`
  color: #f5ad66;
  width: 15px;
  height: 15px;
  cursor: pointer;

  &:hover {
    color: #f67b01;
    margin: 0 0.1rem;
  }
`

export const NoteTitle = styled.div`
  font-weight: bold;
`

export const NoteError = styled.div`
display: flex;
  justify-content: center;
`

export const NoteInput = styled.input`
  padding: 10px;
  margin: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.09);
  border-radius: 5px;
  outline: none;
  
  :hover {
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.2);
  }
  
  :active {
    
  }
`

export const EditNoteButtonContainer = styled.div`
display: flex;
  justify-content: flex-end;
`
export const NoteButton = styled.button`
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border: 0;
  border-radius: 5px;
  color: #fff;
  background-color: #a5a5ec;

  :hover {
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.4);
  }

  :active {
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.2);
  }

`

export const NoteDate = styled.div`
opacity: 0.5;
`

export const NoteInputContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

`
