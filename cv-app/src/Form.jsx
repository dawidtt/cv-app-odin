import TextInput from "./TextInput";
import "./styles/Form.css";

function Form() {
  return (
    <form>
      <section className="general-info">
        <h2>General Info</h2>
        <TextInput id="name" label="Name" type="text" />
        <TextInput id="email" label="Email" type="email" />
        <TextInput id="tel" label="Phone number" type="tel" />
      </section>
      <section className="education">
        <h2>Education</h2>
        <TextInput id="school-name" label="School name" type="text" />
        <TextInput id="title-of-study" label="Title of study" type="text" />
        <TextInput
          id="date-of-study-start"
          label="Starting date of study
 "
          type="date"
        />
        <TextInput
          id="date-of-study-end"
          label="Ending date of study"
          type="date"
        />
      </section>
      <section className="education">
        <h2>Experience</h2>
        <TextInput id="company-name" label="Company name" type="text" />
        <TextInput id="position" label="Position" type="text" />

        <TextInput id="responsibilities" label="Responsibilities" type="text" />
        <TextInput
          id="date-of-work-start"
          label="Starting date of work"
          type="date"
        />
        <TextInput
          id="date-of-work-end"
          label="Ending date of work"
          type="date"
        />
      </section>
      <button className="generate-cv">Generate CV</button>
    </form>
  );
}

export default Form;
