export const Tour = ({ tour }) => {
  const { image, info, name, price } = tour;
  console.log(image);
  return (
    <>
      <img src={image} alt={name} />
      <span className="price">${price}</span>
      <h3 className="tourName">{name}</h3>
      <p className="info">{info}</p>
    </>
  )
}