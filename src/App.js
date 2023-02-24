import './App.css';
import { Configuration, OpenAIApi } from "openai";
import { useState } from 'react';
import OptionSelection from './components/OptionSelection';
import { arrayItems } from './AIOptions';
import Translation from './components/Translation';

function App() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const selectOption = (option) => {
    setOption(option);
  }

  const doStuff = async () => {
    let object = {...option, prompt: input};
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
    console.log(response.data.choices[0].text);
    // console.log(option)
  }

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (<OptionSelection arrayItems={arrayItems} selectOption={selectOption} />) : (<Translation setInput={setInput} doStuff={doStuff} result={result} />)}
    </div>
  );
}

export default App;
