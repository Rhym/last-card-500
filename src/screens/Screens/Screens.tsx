import React from "react";
import _find from "lodash/find";
import { useTrackedState } from "../../store/store";
import EndScreen from "../EndScreen";
import Round from "../Round";
import Setup from "../Setup";

const Screens = () => {
  const state = useTrackedState();

  const LOSER = _find(state.users, (user) => user.total >= 500);

  // Render
  // -------------------------------------------

  if (state.round > 0 && typeof LOSER !== "undefined" && LOSER !== null) {
    return <EndScreen />;
  }

  if (state.round > 0) {
    return <Round />;
  }

  return <Setup />;
};

export default Screens;
