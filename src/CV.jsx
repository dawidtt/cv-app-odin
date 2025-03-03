import "./styles/CV.css";
function CV({ inputs }) {
  let name;
  let phoneNumber;
  let email;
  let schoolName;
  let titleOfStudy;
  let startSchoolDate;
  let endSchoolDate;
  let companyName;
  let postion;
  let responsibilities;
  let startJobDate;
  let endJobDate;

  inputs.forEach((input) => {
    if (input.id === "name") name = input.value;
    else if (input.id === "phoneNumber") phoneNumber = input.value;
    else if (input.id === "email") email = input.value;
    else if (input.id === "schoolName") schoolName = input.value;
    else if (input.id === "titleOfStudy") titleOfStudy = input.value;
    else if (input.id === "startSchoolDate") startSchoolDate = input.value;
    else if (input.id === "endSchoolDate") endSchoolDate = input.value;
    else if (input.id === "companyName") companyName = input.value;
    else if (input.id === "postion") postion = input.value;
    else if (input.id === "responsibilities")
      responsibilities = input.value
        .filter((responsibilitie) => responsibilitie.value !== "")
        .map((responsibilitie) => (
          <li key={responsibilitie.id}>{responsibilitie.value}</li>
        ));
    else if (input.id === "startJobDate") startJobDate = input.value;
    else if (input.id === "endJobDate") endJobDate = input.value;
  });

  function formatTimespan(startDate, endDate) {
    const formatStartDate = new Date(startDate);
    const formatEndDate = new Date(endDate);
    if (
      !(formatStartDate instanceof Date) ||
      isNaN(formatStartDate.getTime()) ||
      !(formatEndDate instanceof Date) ||
      isNaN(formatEndDate.getTime())
    )
      return "";
    return `${
      formatStartDate.getMonth() + 1
    }.${formatStartDate.getFullYear()} - ${
      formatEndDate.getMonth() + 1
    }.${formatEndDate.getFullYear()}`;
  }
  return (
    <div className="cv">
      <h1>Curriculum Vitae</h1>
      <section className="general-info-container">
        <h2>{name}</h2>
        <p className="phone-number">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f"
          >
            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
          {phoneNumber}
        </p>
        <p className="email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          {email}
        </p>
      </section>
      <section className="education">
        <div className="section-heading-container">
          <h2>Education</h2>
        </div>
        <p className="time-of-study">
          {formatTimespan(startSchoolDate, endSchoolDate)}
        </p>
        <p className="school-name">{schoolName}</p>
        <p className="title-of-study">{titleOfStudy}</p>
      </section>
      <section className="experience-container">
        <div className="section-heading-container">
          <h2>Experience</h2>
        </div>
        <p className="time-of-work">
          {formatTimespan(startJobDate, endJobDate)}
        </p>
        <p className="company-name">{companyName}</p>
        <p className="position">{postion}</p>
        <p className="responsibilities-text">Responsibilities:</p>
        <ul>{responsibilities}</ul>
      </section>
    </div>
  );
}

export default CV;
