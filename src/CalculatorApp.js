import "./App.css";
import { useState } from "react";

function CalculatorApp() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  // Initialize ops to array
  const ops = ["/", "*", "+", "-", "."];
  // End Initialize ops to array

  // Upadate value
  const updateCalc = (val) => {
    if (
      (ops.includes(val) && calc === "") ||
      (ops.includes(val) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + val);

    if (!ops.includes(val)) {
      setResult(eval(calc + val).toString());
    }
  };
  // End Update

  // Create Button
  const createButton = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits
        .push(
          <button onClick={() => updateCalc(i.toString())} key={i}>
            {i}
          </button>,
        )
        .toString();
    }

    return digits;
  };
  // End Create Button

  // Calculation
  const Calculate = () => {
    setCalc(eval(calc).toString());
  };
  //  End Calculation

  // Delete Calc
  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };
  // End Delete Calc

  return (
    <>
      <div className="section">
        <h1>
          {" "}
          Simple<sup>2</sup> Calculator
        </h1>
        <div className="main">
          <div className="display">
            {result ? <span>({result})</span> : ""}
            {calc || "0"}
          </div>
          <div className="operators">
            <button onClick={() => updateCalc("/")}> / </button>
            <button onClick={() => updateCalc("*")}> * </button>
            <button onClick={() => updateCalc("+")}> + </button>
            <button onClick={() => updateCalc("-")}> - </button>

            <button onClick={deleteLast}> C </button>
          </div>

          <div className="digits">
            {createButton()}
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc(".")}> . </button>

            <button onClick={Calculate}> = </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculatorApp;
