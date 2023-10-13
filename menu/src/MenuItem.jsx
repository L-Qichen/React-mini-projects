export const MenuItem = ({ title, category, price, img, desc }) => {

  return (
    <>
      <div className="menu-item">
        <img className="img" src={img} alt={title} />
        <div>{title}</div>
        <div>{category}</div>
        <div>{price}</div>
        <div>{desc}</div>
      </div>
    </>
  );
}