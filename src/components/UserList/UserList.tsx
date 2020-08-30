import React from "react";

import { useTrackedState } from "../../store/store";
import UserItem from "../UserItem";
import NewUser from "../NewUser";
import { View } from "react-native";

const UserList: React.FC = () => {
  const state = useTrackedState();

  return (
    <View>
      <View>
        {state.users.map(({ id, title }) => (
          <UserItem key={id} id={id} title={title} />
        ))}
        <NewUser />
      </View>
    </View>
  );
};

export default UserList;
