import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [currencyName, setCurrencyName] = React.useState("Dollar");
  const [currencyChange, setCurrencyChange] = React.useState(0);
  const [amount, setAmount] = React.useState(0);

const handleClick = () => {
  setCurrencyChange(document.getElementById("currencyChange").value);
  setAmount(document.getElementById("amount").value);
};

  return (
    <div className="App">
      <label>Currency-name</label>
      <input
        type="text"
        id="currencyName"
        defaultValue={currencyName}
        onChange={() =>
          setCurrencyName(document.getElementById("currencyName").value)
        }
      />
      <br />
      <label>Currency change</label>
      <input type="number" id="currencyChange"/>
      <br />
      <label>Amount</label>
      <input type="number" id="amount"/>

      <br />
      <button onClick={handleClick}>Calculate</button>

      <p>
      With the exchange rate of {currencyChange}, {amount} {currencyName} is worth {currencyChange*amount}€ today.
      </p>
    </div>
  );
}

export default App;
