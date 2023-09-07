export const Tour = ({ tour, deleteTour }) => {
  const { image, info, name, price } = tour;
  return (
    <>
      <img src={image} alt={name} />
      <span className="price">${price}</span>
      <h3 className="tourName">{name}</h3>
      <p className="info">{info}</p>
      <div className="btn-block">
        <button type="button" className="btn" onClick={() => deleteTour(tour.id)}>Not Interested</button>
      </div>
    </>
  )
}