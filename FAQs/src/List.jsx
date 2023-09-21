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
              <div className="card" key={id} style={{ border: "1px solid red" }}>
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