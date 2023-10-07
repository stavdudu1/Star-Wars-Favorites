import React from 'react';
import BarLoader from "react-spinners/BarLoader";

function Loading({ message = "Loading..." }) {
  return <BarLoader
  color="#d63636"
  height={10}
  speedMultiplier={0.5}
  width={150}
/>;
}

export default Loading;