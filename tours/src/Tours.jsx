import { Tour } from "./Tour"

export const Tours = ({ tours }) => {
  console.log(tours);

  return (
    <>
      <h1 className="header">Our Tours</h1>
      <div className="main">
        {tours.map((tour) => {
          return (
            <div key={tour.id} style={{ border: "1px solid blue" }}>
              <Tour tour={tour} />
            </div>
          )
        })}
      </div>
    </>
  )
}