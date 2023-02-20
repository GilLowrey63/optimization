import { useState } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((perviousShowParagraph) => !perviousShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
};

export default App;

/* 
Quick useState run down. I want to have a paragraph appear after a given action (timer or click for ex)
right now, it is not visible, so I set useState() to false. I also destructure an array with the first item
being the showParagraph value (true or false) and the second item being a function I will use to change the state. 
At the beginning showParagraph is FALSE, when I call or point to setShowParagraph, I can change it to TRUE, or back
to FALSE if it is TRUE. 

{showParagraph && <p>This is new!</p>} looks for showParagraph to be TRUE and shows the paragraph

My button will show and hide the paragraph, it will toggle it onClick. the toggleParagraphHandler handles this
it takes the setShowParagraph function, and passes it an argument of an anonymous function that takes a variable 
called perviousShowParagraph and reverses its value (from FALSE to TRUE, or from TRUE to FALSE). I could have done
!showParagraph, but that would depend on the previous useState snap shot, and it is best to avoid that practice. 

Every time there is a state change (the button toggle) the whole component is re-evaluated, and only the <p></p>
or the <div></div> that holds the p and re-rendered when useState is changed
*/
