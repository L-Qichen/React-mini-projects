import { MenuItem } from "./MenuItem";

const Menu = ({ menu }) => {

  return (
    <div className="main">
      {
        menu.map((item) => {
          return (
            <MenuItem key={item.id} {...item} />
          );

        })
      }
    </div>
  );
}

export default Menu;