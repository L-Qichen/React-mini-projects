import Duties from "./Duties";

const JobInfo = ({ jobs, currentItem }) => {

  const { company, dates, title, duties } = jobs[currentItem];

  return (
    <div>
      <div>{company}</div>
      <div>{dates}</div>
      <div>{title}</div>
      <Duties duties={duties} />
    </div>
  );
}

export default JobInfo;