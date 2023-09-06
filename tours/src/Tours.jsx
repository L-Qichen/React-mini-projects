import { Tour } from "./Tour"

export const Tours = ({ tours }) => {
  console.log(tours);

  return (
    <>
      <h1 className="header">Our Tours</h1>
      <div className="main">
        {tours.map((tour) => {
          return (
            <div key={tour.id} className="card">
              <Tour tour={tour} />
            </div>
          )
        })}
      </div>
    </>
  )
}