const Categories = ({ categories }) => {

  return (
    <div className="btn-container">
      {categories.map((item) => {
        return (
          <button type="button" key={item} className="btn">{item}</button>
        );
      })}
    </div>
  );
}

export default Categories;