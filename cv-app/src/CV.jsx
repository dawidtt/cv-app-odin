function CV({
  name,
  phoneNumber,
  email,
  schoolName,
  titleOfStudy,
  startSchoolDate,
  endSchoolDate,
  companyName,
  postion,
  responsibilities,
  startJobDate,
  endJobDate,
}) {
  function formatTimespan(startDate, endDate) {}
  return (
    <div className="cv">
      <h1>Curiculum Vitae</h1>
      <section className="general-info-container">
        <h2>{name}</h2>
        <p className="phone-number">{phoneNumber}</p>
        <p className="email">{email}</p>
      </section>
      <section className="education">
        <div className="section-heading-container">
          <h2>Education</h2>
        </div>
        <p className="school-name">{schoolName}</p>
        <p className="title-of-study">{titleOfStudy}</p>
        <p className="time-of-study">
          {formatTimespan(startSchoolDate, endSchoolDate)}
        </p>
      </section>
      <section className="experience-container">
        <div className="section-heading-container">
          <h2>Experience</h2>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="position">{postion}</p>
        <ul>{responsibilities}</ul>
        <p className="time-of-work">
          {formatTimespan(startJobDate, endJobDate)}
        </p>
      </section>
    </div>
  );
}
