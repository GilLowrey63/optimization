import { useState } from "react";

import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button/Button";
import "./App.css";

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((perviousShowParagraph) => !perviousShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
};

//export default App;

/*
Simple props example

I am giving DemoOutput a props of show, and giving show showParagraph. This will be toggled with the button, 
and this information will be passed to DemoOutput and it will know where to display the populated string
or the blank string based on whether show is truthy or falsey. 

This component will be re-evaluated and re-executed even thought the change is coming from a different component.

With this example, every child component would re-render and every child of child components would as well. 
Probably not the best idea. 
*/

//THIS IS A DIFFERENT COMPONENT

import React from "react";

const Demo = (props) => {
  return <p>{props.show ? "This is new!" : ""}</p>;
};

//export default Demo;

/*
In this example, if the props (properties) for show are truthy, this will show what I am dynamically
calling. If it is falsey, then it will not show. 

with this
<p>{props.show ? 'This is new!' : ''}</p>;
paragraph element is ALWAYS rendered, just not always shown
*/
