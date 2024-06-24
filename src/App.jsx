import { useState } from 'react'

import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Results from './components/Results.jsx'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const inputIsValid = userInput.duration >= 1; // duration should be greater than or equal to 1 (cannot be a negative number).  If not, the user will be prompted to enter a duration greater than zero

function handleChange(inputIdentifier, newValue) {
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue,// + operator converts string data in the investment.js to number
      };
  });
};

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className='center'>Please enter a duration greater than zero</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App