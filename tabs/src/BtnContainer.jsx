const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {

  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            type="button"
            key={job.id}
            onClick={() => setCurrentItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
}

export default BtnContainer;