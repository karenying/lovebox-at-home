import styled from "@emotion/styled";

export const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #282c34;
`;

export const StyledCenter = styled.div`
  width: 400px;
  margin-top: 100px;
`;

export const StyledTitle = styled.h1`
  color: pink;
  margin-bottom: 16px;
`;

export const StyledTextAreaContainer = styled.div<{ isFocused: boolean }>`
  transition: border 200ms ease;
  border: 2px solid ${({ isFocused }) => (isFocused ? "#cad8ff" : "#979797")};
  padding: 8px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    ${({ isFocused }) => !isFocused && "border-color: white;"}
  }
`;

export const StyledTextArea = styled.textarea`
  border: none;
  box-shadow: none;
  outline: none;
  background: transparent;
  flex-grow: 1;
  font-weight: 500;
  font-size: 15px;
  font-family: inherit;
  line-height: 20px;
  color: white;
  resize: none;
  height: 100%;

  &::placeholder {
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: #f2f2f2;
  }
`;

export const StyledButton = styled.button`
  padding: 8px 16px;
  color: #282c34;
  background-color: pink;
  font-weight: 600;
  font-size: 15px;
  font-family: inherit;
  display: flex;
  transition: background-color 200ms ease;
  border-radius: 16px;
  margin-top: 8px;
  margin-left: auto;
  border: none;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: white;
  }
`;
