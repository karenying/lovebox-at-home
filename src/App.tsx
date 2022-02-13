import React, { FC, useState } from "react";

import {
  StyledButton,
  StyledCenter,
  StyledTextArea,
  StyledTextAreaContainer,
  StyledTitle,
  StyledWrapper,
  StyledH2,
  StyledBody,
} from "./App.styles";

const App: FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [newMsg, setNewMsg] = useState("");
  const currMsg = "Hello world";
  const lastUpdated = Date.now();

  return (
    <StyledWrapper>
      <StyledCenter>
        <StyledTitle>lovebox @ 🏠</StyledTitle>
        {currMsg ? (
          <>
            <div>
              <StyledBody bold color="#979797">
                Currently displayed:{" "}
              </StyledBody>
              <StyledBody>{currMsg}</StyledBody>
            </div>

            <div>
              <StyledBody bold color="#979797">
                Last updated:{" "}
              </StyledBody>
              <StyledBody>{lastUpdated}</StyledBody>
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
            <StyledButton onClick={() => alert()}>send</StyledButton>
          </>
        )}
      </StyledCenter>
    </StyledWrapper>
  );
};

export default App;
