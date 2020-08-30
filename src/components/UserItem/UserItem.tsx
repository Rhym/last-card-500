import React from "react";

import { useDispatch, UserType } from "../../store/store";
import { Button, Text, View } from "react-native";

type Props = UserType;

const UserItem: React.FC<Props> = ({ id, title }) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{title}</Text>
      <Button
        onPress={() => dispatch({ type: "DELETE_USER", id })}
        title="Remove"
      />
    </View>
  );
};

export default React.memo(UserItem);
