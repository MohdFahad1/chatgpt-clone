import './App.css';
import { useState } from 'react';
import OptionSelection from './components/OptionSelection';
import { arrayItems } from './AIOptions';
import Translation from './components/Translation';

function App() {

  const [option, setOption] = useState({});

  const selectOption = (option) => {
    setOption(option);
  }

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (<OptionSelection arrayItems={arrayItems} selectOption={selectOption} />) : (<Translation />)}
    </div>
  );
}

export default App;
