import React, { useState } from "react";

function App() {
  //DEFAULT VALUE =1
  const [count, setCount] = useState(1);
  //INCREASE THE COUNT
  function increase() {
    // if (count == "") {
    //   console.log(typeof(count));
    //   setCount(Number(count+1));
    // }

    if (Number(count) >= 1000) {
      return;
    }
    setCount(Number(count) + 1);
  }
  // DECREASE THE COUNT
  function decrease() {
    // if(isNaN(count)){
    //   setCount(parseInt(count)+1);
    // }

    //IS BY MISTAKE USER MAKES STRING EMPTY(CORNER CASE)
    if (count == "") {
      setCount(Number(count) + 1);
    }
    console.log(isNaN(count) + " " + NaN);
    if (Number(count) <= 1) {
      return;
    }
    setCount(Number(count) - 1);
  }

  //uSER INPUT VALUE COUNT
  function changedInput(event) {
    // console.log(event.target.value);
    // if (isNaN(event.target.value) ) {
    //   setCount(1);
    // }
    if (event.target.value > 1000) {
      setCount(1000);
    } else {
      setCount(event.target.value);
    }
    // console.log(event.target.value);
  }

  return (
    <div className="container">
      <div>
        <h2>Counter App</h2>
      </div>
      <div className="inner">
        <button className="button1" onClick={decrease}>
          -
        </button>
      </div>
      <div className="inner">
        <input
          className="userInput"
          onChange={changedInput}
          type="text"
          size="number"
          value={count}
        />
      </div>

      <div className="inner">
        <button className="button2" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
