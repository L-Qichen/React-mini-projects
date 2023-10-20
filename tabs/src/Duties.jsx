import { v4 as uuidv4 } from 'uuid';

const Duties = ({ duties }) => {

  return (
    <div>
      {duties.map((duty) => {
        const id = uuidv4();
        return (
          <div key={id}>{duty}</div>
        );
      })}
    </div>
  );
};

export default Duties;