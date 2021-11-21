import './App.scss';
import {useState} from 'react';


function App() {
  const [display, setDisplay] = useState("");
  const [operationDisplay, setOperationDisplay] = useState("");
  const [operationAnswer, setOperationAnswer] = useState(0);
  const setDisplayWithEvent = (event) => {
    let newDisplay = display + event.target.value;
    setDisplay(newDisplay);
  };
  const operatorClicked = (event) => {
    let lastOperator = event.target.value;
    let inputtedValue = display;
    if (operationAnswer == 0) {
      if (inputtedValue == 0) {
        setOperationDisplay(operationDisplay.slice(0, -1) + lastOperator);
      }
      else if (operationDisplay == "") {
        setOperationDisplay(inputtedValue + lastOperator);
      } else {
      setOperationDisplay(operationDisplay + inputtedValue + lastOperator);
      }
    } else {
      if (inputtedValue == 0) {
        setOperationDisplay(operationAnswer + lastOperator)
      } else {
        setOperationDisplay(operationDisplay + inputtedValue + lastOperator)
      }
    }
    
    setDisplay("");
  };
  const equalClicked = () => {
    let result = eval(operationDisplay + display);
    setDisplay("");
    setOperationDisplay(operationDisplay + display);
    setOperationAnswer(result);
 
  };
  const clearClicked = () => {
    setDisplay("");
    setOperationDisplay("");
    setOperationAnswer(0)
  };
  return (
    
    <div className="App">
      <div className="Child">
        {[1, 2, 3].map((number) => (
          <button id="button" 
          onClick={setDisplayWithEvent} value={number}>{number}</button>
        ))}
        <br />
        {[4, 5, 6].map((number) => (
          <button id="button" 
          onClick={setDisplayWithEvent} value={number}>{number}</button>
        ))}
        <br />
        {[7, 8, 9].map((number) => (
          <button id="button" 
          onClick={setDisplayWithEvent} value={number}>{number}</button>
        ))}
        <br />
        {[0].map((number) => (
          <button id="button" 
          onClick={setDisplayWithEvent} value={number}>{number}</button>
        ))}
        <button id="button1" value="C" onClick={clearClicked}>C</button>
        <button id="button2" value="=" onClick={equalClicked}>=</button>
        <br />
        <button id="button3" value="+" onClick={operatorClicked}>+</button>
        <button id="button4" value="-" onClick={operatorClicked}>-</button>
        <button id="button5" value="*" onClick={operatorClicked}>*</button>
        <button id="button6" value="/" onClick={operatorClicked}>/</button>
        
        <br />
        <input type="text" value={display}></input>
        <br />
        <span>
          Equation: {operationDisplay}
        </span>
        <br />
        <span>
          Answer: {operationAnswer}
        </span>
      </div>
    </div>
  )
}

export default App;
