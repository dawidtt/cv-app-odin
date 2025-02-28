import "./App.css";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState([
    { id: "name", value: "" },
    { id: "phoneNumber", value: "" },
    { id: "email", value: "" },
    { id: "schoolName", value: "" },
    { id: "titleOfStudy", value: "" },
    { id: "startSchoolDate", value: "" },
    { id: "endSchoolDate", value: "" },
    { id: "companyName", value: "" },
    { id: "postion", value: "" },
    { id: "responsibilities", value: [{ id: crypto.randomUUID(), value: "" }] },
    { id: "startJobDate", value: "" },
    { id: "endJobDate", value: "" },
  ]);

  function onSubmit() {}

  function addInput(e) {
    e.preventDefault();
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === "responsibilities"
          ? {
              ...input,
              value: [...input.value, { id: crypto.randomUUID(), value: "" }],
            }
          : input
      )
    );
  }

  function removeInput(id) {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === "responsibilities"
          ? { ...input, value: input.value.filter((res) => res.id !== id) }
          : input
      )
    );
  }
  function changeResponsibilityInput(responsibilityId, newValue) {
    setInputs((prevInputs) => {
      return prevInputs.map((input) => {
        if (input.id === "responsibilities") {
          return {
            ...input,
            value: input.value.map((res) =>
              res.id === responsibilityId ? { ...res, value: newValue } : res
            ),
          };
        }
        return input;
      });
    });
  }

  function onChange(id, value) {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, value: value } : input
      )
    );
  }
  return (
    <Form
      onSubmit={onSubmit}
      addInput={addInput}
      removeInput={removeInput}
      changeResponsibilityInput={changeResponsibilityInput}
      onChange={onChange}
      inputs={inputs}
    />
  );
}

export default App;
