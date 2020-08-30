import React, { useState } from "react";

import { useDispatch } from "../../store/store";
import { Button, Text, TextInput, View } from "react-native";
import styled from "styled-components";

const Wrapper = styled(View)`
  * + * {
    margin-top: 8px;
  }
`;

const StyledInput = styled(TextInput)`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #000;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const NewUser: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const addUser = () => {
    if (typeof text !== "undefined" && text !== null && text !== "") {
      dispatch({ type: "ADD_USER", title: text });
      setText("");
    }
  };
  return (
    <Wrapper>
      <Text>Add another player</Text>
      <StyledInput
        value={text}
        placeholder="Enter name..."
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() => addUser()}
      />
      <StyledButton
        onPress={() => addUser()}
        disabled={text === ""}
        title="Add"
      />
    </Wrapper>
  );
};

export default React.memo(NewUser);
