export const MenuItem = ({ title, category, price, img, desc }) => {

  return (
    <>
      <div className="menu-item">
        <img className="img" src={img} alt={title} />
        <div className="item-info">
          <div className="title">
            <h3>{title}</h3>
            <div className="item-price">{price}</div>
          </div>
          <div className="item-text">{desc}</div>
        </div>
      </div>
    </>
  );
}