export const Tour = ({ tour }) => {
  const { image, info, name, price } = tour;
  console.log(image);
  return (
    <>
      <div className="card">
        <img src={image} alt={name} />
        <span>${price}</span>
        <h3>{name}</h3>
        <p>{info}</p>
      </div>
    </>
  )
}