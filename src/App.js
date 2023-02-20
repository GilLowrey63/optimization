import { useState, useCallback } from "react";

import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button/Button";
import "./App.css";

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((perviousShowParagraph) => !perviousShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
};

export default App;

/*
useCallback will help use save functions and not have them re-created every time
the component is re-rendered. memo() works like this. In JavaScript if I have
ex1     obj1 {} and obj2 {}, they are not equal
ex2     if I have obj2 {} = obj1 {}, then they become equal. 
ex1 is memo() and I can achieve something more like ex2 with useCallback. 

useCallback needs two arguments. The first is the function I am giving it, the second is
an array of dependencies. They are the same as useEffect. Any states, or props, or context
from the surrounding component should be in there as a dependency. useCallback handles
this component set up automatically, so I have passed nothing in there. 

!!!!156 in udemy does a great job explaining useCallback
*/
