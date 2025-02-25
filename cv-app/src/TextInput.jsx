import { useState } from "react";
import "./styles/TextInput.css";

function TextInput({ id, label, type }) {
  const [value, setValue] = useState("");
  return (
    <div className="input-container">
      <label>
        {label}
        <input
          type={type}
          id={id}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
    </div>
  );
}

export default TextInput;
