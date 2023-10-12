export const MenuItem = ({ title, category, price, img, desc }) => {

  return (
    <>
      <div>
        <div>{title}</div>
        <div>{category}</div>
        <div>{price}</div>
        <img src={img} alt={title} />
        <div>{desc}</div>
      </div>
    </>
  );
}