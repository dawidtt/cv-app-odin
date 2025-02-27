import { useState } from "react";
import Responsibilitie from "./Responsibilitie.jsx";
import "./styles/ResponsibilitiesList.css";

function Responsibilities({ inputs, removeInput, changeInput, addInput }) {
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
            onChange={(e) => changeInput(id, e.target.value)}
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
