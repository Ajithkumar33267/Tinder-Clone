import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import TinderForm from './components/TinderForm';

function App() {

  const [form, setForm] = useState(false);

  const clickHandler = () => {
    setForm(!form);
  }

  return (
    <div className="app">
      <Header form={clickHandler} />
      {!form && (
        <TinderCards />
      )}
      {form && (
        <TinderForm />
      )}

    </div>
  );
}

export default App;
