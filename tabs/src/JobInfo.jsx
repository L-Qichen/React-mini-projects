const JobInfo = ({ jobs }) => {

  const { company, dates, title, duties } = jobs[0];

  return (
    <div>
      <div>{company}</div>
      <div>{dates}</div>
      <div>{title}</div>
      <div>{duties}</div>
    </div>
  );
}

export default JobInfo;