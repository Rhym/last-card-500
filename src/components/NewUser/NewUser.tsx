import React, {useState} from "react";

import {useDispatch} from "../../store/store";
import {Keyboard, Text, TextInput, TouchableOpacity, View} from "react-native";
import styled from "styled-components";

const Form = styled(View)`
  margin-top: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled(TextInput)`
  flex: 1 1 auto;
  padding: 0 16px;
  height: 48px;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  background: white;
  margin-right: 2px;
`;

const StyledButton = styled(TouchableOpacity)`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 48px;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  background: #f8da27;
  padding: 0 24px 0 16px;
`;

const StyledButtonText = styled(Text)`
  color: #000;
  font-size: 12px;
  font-weight: bold;
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
    <Form>
      <StyledInput
        value={text}
        placeholder="Enter name..."
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() => addUser()}
      />
      <StyledButton onPress={() => {
        addUser();
        Keyboard.dismiss();
      }} disabled={text === ""}>
        <StyledButtonText>Add player</StyledButtonText>
      </StyledButton>
    </Form>
  );
};

export default React.memo(NewUser);
