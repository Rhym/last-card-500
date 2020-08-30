import React from "react";
import { useTrackedState } from "../../store/store";
import Round from "../Round";
import Setup from "../Setup";

const Screens = () => {
  const state = useTrackedState();

  if (state.round > 0) {
    return <Round />;
  }

  return <Setup />;
};

export default Screens;
