import { Tour } from "./Tour"

export const Tours = ({ tours }) => {
  console.log(tours);

  return (
    <>
      <h1>Our Tours</h1>
      <div style={{ border: "1px solid red" }}>
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