import React, { FC, useState } from "react";

import {
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
        <StyledTitle>Lovebox at home 🏠</StyledTitle>
        <StyledTextAreaContainer isFocused={isFocused}>
          <StyledTextArea
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows={4}
            placeholder="New message..."
          />
        </StyledTextAreaContainer>
      </StyledCenter>
    </StyledWrapper>
  );
};

export default App;
