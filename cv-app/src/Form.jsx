import TextInput from "./TextInput";
import "./styles/Form.css";

function Form() {
  return (
    <form>
      <section className="general-info">
        <h2>General Info</h2>
        <TextInput id="name" label="Name" type="text" />
        <TextInput id="email" label="Email" type="email" />
        <TextInput id="email" label="Phone number" type="tel" />
      </section>
    </form>
  );
}

export default Form;
