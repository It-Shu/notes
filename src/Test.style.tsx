import styled from "styled-components";

export const ContentCloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ContentButton = styled.button`
  border: 0;
  box-shadow: -4px 4px 6px #454841;
  border-radius: 2px;
  width: content-box;
  height: 25px;

  &:hover {
    color: #d2a178;
    cursor: pointer;
  }
`;

export const ContentButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ContentText = styled.p`
  display: flex;
  text-align: center;
`;
