import React, { FC, useState, useEffect } from "react";

import axios from "axios";

import {
  StyledButton,
  StyledCenter,
  StyledTextArea,
  StyledTextAreaContainer,
  StyledTitle,
  StyledWrapper,
  StyledBody,
} from "./App.styles";
import useData from "./useData";

const App: FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [newMsg, setNewMsg] = useState("");

  const { currentMessage, pastMessages } = useData();

  const handleSend = () => {
    axios
      .post("api/message", {
        message: newMsg,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <StyledWrapper>
      <StyledCenter>
        <StyledTitle>lovebox @ 🏠</StyledTitle>
        {currentMessage ? (
          <>
            <div>
              <StyledBody bold color="#979797">
                Currently displayed:{" "}
              </StyledBody>
              <StyledBody>{currentMessage.content}</StyledBody>
            </div>

            <div>
              <StyledBody bold color="#979797">
                Last updated:{" "}
              </StyledBody>
              <StyledBody>{currentMessage.timestamp}</StyledBody>
            </div>
          </>
        ) : (
          <>
            <StyledTextAreaContainer isFocused={isFocused}>
              <StyledTextArea
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                rows={4}
                placeholder="new message..."
                value={newMsg}
                onChange={(e) => setNewMsg(e.target.value)}
              />
            </StyledTextAreaContainer>
            <StyledButton onClick={handleSend}>send</StyledButton>
          </>
        )}
      </StyledCenter>
    </StyledWrapper>
  );
};

export default App;
