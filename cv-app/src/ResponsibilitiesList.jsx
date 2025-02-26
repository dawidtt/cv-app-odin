import { useState } from "react";
import Responsibilitie from "./Responsibilitie.jsx";
import "./styles/ResponsibilitiesList.css";

function Responsibilities() {
  function addInput(e) {
    e.preventDefault();
    setInputs([...inputs, { id: crypto.randomUUID(), value: "" }]);
  }
  function removeInput(id) {
    setInputs(inputs.filter((input) => input.id !== id));
  }
  function changeInput(id, value) {
    setInputs(
      inputs.map((input) => (input.id === id ? { ...input, value } : input))
    );
  }
  const [inputs, setInputs] = useState([
    { id: crypto.randomUUID(), value: "" },
  ]);

  return (
    <fieldset>
      <legend>Responsibilities</legend>
      <div className="responsibilities-inputs">
        {inputs.map(({ id, value }) => (
          <Responsibilitie
            key={id}
            id={id}
            value={value}
            onRemove={removeInput}
            onChange={changeInput}
          />
        ))}
        <button className="add" onClick={addInput}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ffffff"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </button>
      </div>
    </fieldset>
  );
}

export default Responsibilities;
