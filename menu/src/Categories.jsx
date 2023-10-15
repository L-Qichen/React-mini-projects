const Categories = ({ categories, onClickHandle }) => {

  return (
    <div className="btn-container">
      {categories.map((item) => {
        return (
          <button type="button"
            key={item}
            className="btn"
            onClick={() => onClickHandle(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;