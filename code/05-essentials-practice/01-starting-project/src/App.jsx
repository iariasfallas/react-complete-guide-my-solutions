import Header from './components/Header'
import Results from './components/Results';
import UserInput from './components/UserInput'
import {useState} from 'react'

function App() {

   const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 10
  });

  const inputIsValid = userInput.duration > 0;


  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevInput => {
    return {
      ...prevInput,
      [inputIdentifier]: +newValue,
    }});
  }
  
  return (
    <div>
      <Header/>
      <UserInput userInput={userInput} handleChange={handleChange}/>   
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </div>

  )
}

export default App
