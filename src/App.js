import './App.css';
import Form from './components/Form';
import Interests from './components/Interests';
import Filter from './components/Filter';
import { useState } from 'react';
function App() {
  const [next, setNext] = useState(false);
  const [register, setRegister] = useState(false);
  const nextHandler = value => {
    setNext(value);
  };

  const registerHandler = () => {
    setRegister(true);
  };

  const cancelHandler = () => {
    setNext(false);
    setRegister(false);
  };
  return (
    <div className="App">
      {!register && (
        <div className="header">
          <h2>NeoGrammers</h2>
          <button className="register" onClick={registerHandler}>
            Register
          </button>
        </div>
      )}
      {!next
        ? register && <Form onCancel={cancelHandler} onNext={nextHandler} />
        : register && <Interests onCancel={cancelHandler} info={next} />}
      {!register && <Filter register={register} />}
    </div>
  );
}

export default App;
