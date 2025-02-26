import Responsibilities from "./ResponsibilitiesList";
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
      <section className="experience">
        <h2>Experience</h2>
        <TextInput id="company-name" label="Company name" type="text" />
        <TextInput id="position" label="Position" type="text" />
        <Responsibilities />
        {/* <div className="responsibilities">
          <TextInput id="responsibilitie" label="" type="text" />
          <button className="add">
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
        </div> */}

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
