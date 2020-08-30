import React, { useState } from "react";

import { useDispatch } from "../../store/store";
import { TextInput, View } from "react-native";

const NewUser: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const addUser = () => {
    dispatch({ type: "ADD_USER", title: text });
    setText("");
  };
  return (
    <View>
      <TextInput
        value={text}
        placeholder="Enter name..."
        onChangeText={(text) => setText(text)}
      />
      <button onClick={addUser}>Add</button>
    </View>
  );
};

export default React.memo(NewUser);
