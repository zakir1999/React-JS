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
      return { ...state, fibonacciResult: fibonacci(action.payload) };
    case "factorial":
      return { ...state, factorialResult: factorial(action.payload) };
    default:
      return state;
  }
};

const App = () => {
  const [number, setNumber] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    fibonacciResult: null,
    factorialResult: null,
  });
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Fibonacci & Factorial Calculator</h2>
      <input
        ref={inputRef}
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <br /> <br />
      <button onClick={() => dispatch({ type: "fibonacci", payload: number })}>
        Fibonacci
      </button>
      <button onClick={() => dispatch({ type: "factorial", payload: number })}>
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

export default App;
