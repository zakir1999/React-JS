import React, { useState, useRef, useEffect, useReducer } from "react";
import './App.css';

const fibonacci = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

const factorial = (n) => {
  if (n < 0) return 0;
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fibonacci":
      return { ...state, fibonacciResult: fibonacci(action.num) };
    case "factorial":
      return { ...state, factorialResult: factorial(action.num) };
    default:
      return state;
  }
};

export default function App  (){
  const [number, setNumber] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    fibonacciResult: null,
    factorialResult: null,
  });
  const inputRef = useRef(null);
  function handleinpput(e){
    if(e.target.value<0){
      alert("Enter a positive number")
      return;
    }
    setNumber(e.target.value || 0);
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <h2>Fibonacci & Factorial Calculator</h2>
      <input
        ref={inputRef}
        type="number"
        value={number}
        onChange={handleinpput}
      />
      <br /> <br />
      <button onClick={() => dispatch({ type: "fibonacci", num: number })}>
        Fibonacci
      </button>
      <button onClick={() => dispatch({ type: "factorial", num: number })}>
        Factorial
      </button>
      <br /> <br />
      <div className="container">
      <div className="box"><strong>Fibonacci</strong>
      <div>
      {state.fibonacciResult}
      </div>
      
      </div>
      <div className="box"><strong>Factorial</strong>
      <div> {state.factorialResult}</div></div>
      </div>
    
    </div>
  );
};

