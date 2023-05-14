// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import UintControl from "./components/UnitControl";
import CardFooter from "./components/CardFooter";
import UnitCoveter from "./components/UnitCoveter";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far);

function App() {
  const [inputValue, setInputValue] = useState(0);
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };
  return (
    <div className="container">
      <div className="card-header">網速轉換</div>
      <div className="card-bpdy">
        <UintControl />
        <UnitCoveter
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
      </div>
      <CardFooter inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}

export default App;
