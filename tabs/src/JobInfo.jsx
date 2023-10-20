import Duties from "./Duties";

const JobInfo = ({ jobs, currentItem }) => {

  const { company, dates, title, duties } = jobs[currentItem];

  return (
    <div className="job-desc">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <div className="job-date">{dates}</div>
      <Duties duties={duties} />
    </div>
  );
}

export default JobInfo;