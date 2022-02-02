import React, { FC, useState } from "react";

import {
  StyledButton,
  StyledCenter,
  StyledTextArea,
  StyledTextAreaContainer,
  StyledTitle,
  StyledWrapper,
} from "./App.styles";

const App: FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledWrapper>
      <StyledCenter>
        <StyledTitle>lovebox @ 🏠</StyledTitle>
        <StyledTextAreaContainer isFocused={isFocused}>
          <StyledTextArea
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows={4}
            placeholder="new message..."
          />
        </StyledTextAreaContainer>
        <StyledButton>send</StyledButton>
      </StyledCenter>
    </StyledWrapper>
  );
};

export default App;
