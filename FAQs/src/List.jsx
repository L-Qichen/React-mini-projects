import Question from "./Question";

const List = ({ questions }) => {
  console.log(questions);

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Questions</h1>
          {questions.map((question) => {
            return (
              <div className="card" key={question.id} style={{ border: "1px solid red" }}>
                <Question />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default List