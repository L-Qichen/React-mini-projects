import { useState } from 'react'

export const Tour = ({ tour, deleteTour }) => {
  const { image, info, name, price } = tour;

  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <img src={image} alt={name} />
      <span className="price">${price}</span>
      <h3 className="tourName">{name}</h3>
      <p className="info">
        {readMore ? info : `${info.substring(0, 300)}...`}
        <span className="read-more" onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Read Less' : 'Read More'}
        </span>
      </p>
      <div className="btn-block">
        <button type="button" className="btn" onClick={() => deleteTour(tour.id)}>Not Interested</button>
      </div>
    </>
  )
}