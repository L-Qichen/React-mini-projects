export const Tour = ({ tour }) => {
  const { image, info, name, price } = tour;
  console.log(image);
  return (
    <>
      <img src={image} alt={name} />
      <span className="price">${price}</span>
      <h3>{name}</h3>
      <p>{info}</p>
    </>
  )
}