import React from "react";
import { Child } from "./Child";

const Parent = () => {
  return (
    <Child
      color="blue"
      onClick={() => {
        console.log("gogogog");
      }}
    >
      Test
    </Child>
  );
};
export default Parent;
