import React from "react";

const ToggleButton = ({ setOpen }) => {
  return <buttons onClick={setOpen((prev) => !prev)}>ToggleButtonb</buttons>;
};

export default ToggleButton;
