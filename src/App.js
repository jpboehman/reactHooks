import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import { useState, useEffect, createContext, useContext } from 'react';
const ThemeContext = createContext('green');

function App() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');
  // const [loading, setIsLoading] = useState(true);

  // Form state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    const getMessage = async () => {
      const response = await fetch(
        'https://json.versant.digital/.netlify/functions/fake-api/message'
      );
      const responseMessage = await response
        .text()
        .then((data) => setMessage(data))
        .catch((e) => console.error(e));
    };
    getMessage();
  }, []);

  // Managing side effects with the useEffect hook
  // useEffect(() => {
  //   if (counter > 5) {
  //     setMessage('You are on a click spree, settle down!');
  //   } else {
  //     setMessage('');
  //   }
  // }, [message, counter]);

  return (
    <div className="App">
      <p>Current count: {counter}</p>
      <button onClick={updateCounter}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0) && setMessage('')}>Reset</button>
      <p>{message}</p>

      <form>
        <input name={name} onChange={(e) => setName(e.target.value)}></input>
        <input name={email} onChange={(e) => setEmail(e.target.value)}></input>
      </form>

      <ThemeContext.Provider value={'green'}>
        <Content />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
