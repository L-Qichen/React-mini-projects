import Question from "./Question";

const List = ({ questions }) => {

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Questions</h1>
          {questions.map((question) => {
            const { id, title, info } = question;
            return (
              <div className="list-element" key={id}>
                <Question title={title} info={info} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default List