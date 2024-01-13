import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
//   const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [success,setSuccess] = useState("")
  const [errorMessage, setErrorMessage] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
    setErrorMessage('');
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
    setErrorMessage('');
  };

  const handleOperatorClick = (selectedOperator) => {
    // setOperator(selectedOperator);
    setErrorMessage('');
    calculateResult(selectedOperator);
  };

  const calculateResult = (operator) => {
    if (!num1 || !num2 || !operator) {
      setErrorMessage('Please fill in both number fields and select an operator');
      setResult('');
      return;
    }

    let resultValue;

    switch (operator) {
      case '+':
        resultValue = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        resultValue = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        resultValue = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        if(num1 == 0 || num2 == 0){
            setErrorMessage('Cannot perform / with 0')
            setSuccess("")
            resultValue = ""
            return
        }
        else{
        resultValue = parseFloat(num1) / parseFloat(num2);
        }
        break;
      default:
        resultValue = '';
    }

      setResult(resultValue);
      setSuccess("SUCCESS!")
  };

  return (
    <div className='body'>
    <div className='calculator'>
    <h1 className='h1'>React Calculator</h1>
        <div className='num'>
            <input type="text" value={num1}  placeholder='num1'onChange={handleNum1Change} />
            <input type="text" value={num2} placeholder='num2' onChange={handleNum2Change} />
        </div>
        <div className='buttons'>
            <button onClick={() => handleOperatorClick('+')}>+</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
            <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>

        {
        (errorMessage && <div style={{ color: 'red' }}> <h1>error!</h1>
            <p>{errorMessage}</p></div>) }

      <div>
        {success && <h1 style = {{color:'green'}}>SUCCESS!</h1>}
        <span>{result}</span>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
