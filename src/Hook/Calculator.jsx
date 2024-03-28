import React, { useState } from 'react';
import './Calculator.css';


function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult(Number(num1) + Number(num2)); // Toplama işlemi
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Number 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Number 2"
      />
      <button onClick={handleCalculate}>Topla</button>
      <div>Netice: {result}</div>
    </div>
  );
}

export default Calculator;
