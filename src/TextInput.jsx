import { useState } from "react";
import "./styles/TextInput.css";

function TextInput({ id, label, type, onChange }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };
  return (
    <div className="input-container">
      <label>
        {label}
        <input type={type} id={id} value={value} onChange={handleChange} />
      </label>
    </div>
  );
}

export default TextInput;
