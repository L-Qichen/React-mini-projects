const Duties = ({ duties }) => {

  return (
    <div>
      {duties.map((duty, index) => {
        return (
          <div key={index}>{duty}</div>
        );
      })}
    </div>
  );
};

export default Duties;