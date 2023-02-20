import React from "react";

const Demo = (props) => {
  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default React.memo(Demo);

/*
memo() will only ere-evaluate the component if the props value changes. If the parent value changes
but the props value does not, the component execution will be skipped. This means React needs to store
old value, and compare new value, or at least see if the value has changed. So using this could be a
double edged sword. Sometimes this will help, other times it won't. Would be best for bigger apps where
I can cut off an entire branch of child components. It should not be used on every component. 
*/
