import Responsibilities from "./ResponsibilitiesList";
import TextInput from "./TextInput";
import "./styles/Form.css";

function Form({
  onSubmit,
  addInput,
  removeInput,
  changeResponsibilityInput,
  onChange,
  inputs,
}) {
  return (
    <form onSubmit={onSubmit}>
      <section className="general-info">
        <h2>General Info</h2>
        <TextInput
          id="name"
          label="Name"
          type="text"
          value={inputs.find((input) => input.id === "name").value}
          onChange={(e) => onChange("name", e.target.value)}
        />
        <TextInput
          id="email"
          label="Email"
          type="email"
          value={inputs.find((input) => input.id === "email").value}
          onChange={(e) => onChange("email", e.target.value)}
        />
        <TextInput
          id="tel"
          label="Phone number"
          type="tel"
          value={inputs.find((input) => input.id === "phoneNumber").value}
          onChange={(e) => onChange("phoneNumber", e.target.value)}
        />
      </section>
      <section className="education">
        <h2>Education</h2>
        <TextInput
          id="school-name"
          label="School name"
          type="text"
          value={inputs.find((input) => input.id === "schoolName").value}
          onChange={(e) => onChange("schoolName", e.target.value)}
        />
        <TextInput
          id="title-of-study"
          label="Title of study"
          type="text"
          value={inputs.find((input) => input.id === "titleOfStudy").value}
          onChange={(e) => onChange("titleOfStudy", e.target.value)}
        />
        <TextInput
          id="date-of-study-start"
          label="Starting date of study
 "
          type="date"
          value={inputs.find((input) => input.id === "startSchoolDate").value}
          onChange={(e) => onChange("startSchoolDate", e.target.value)}
        />
        <TextInput
          id="date-of-study-end"
          label="Ending date of study"
          type="date"
          value={inputs.find((input) => input.id === "endSchoolDate").value}
          onChange={(e) => onChange("endSchoolDate", e.target.value)}
        />
      </section>
      <section className="experience">
        <h2>Experience</h2>
        <TextInput
          id="company-name"
          label="Company name"
          type="text"
          value={inputs.find((input) => input.id === "companyName").value}
          onChange={(e) => onChange("companyName", e.target.value)}
        />
        <TextInput
          id="position"
          label="Position"
          type="text"
          value={inputs.find((input) => input.id === "postion").value}
          onChange={(e) => onChange("postion", e.target.value)}
        />
        <Responsibilities
          inputs={inputs.find((input) => input.id === "responsibilities").value}
          removeInput={removeInput}
          changeInput={changeResponsibilityInput}
          addInput={addInput}
        />

        <TextInput
          id="date-of-work-start"
          label="Starting date of work"
          type="date"
          value={inputs.find((input) => input.id === "startJobDate").value}
          onChange={(e) => onChange("startJobDate", e.target.value)}
        />
        <TextInput
          id="date-of-work-end"
          label="Ending date of work"
          type="date"
          value={inputs.find((input) => input.id === "endJobDate").value}
          onChange={(e) => onChange("endJobDate", e.target.value)}
        />
      </section>
      <button className="generate-cv">Generate CV</button>
    </form>
  );
}

export default Form;
