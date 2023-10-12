import { MenuItem } from "./MenuItem";

const Menu = ({ menu }) => {

  return (
    <>
      {
        menu.map((item) => {
          return (
            <div className="card" key={item.id}>
              <MenuItem {...item} />
            </div >
          );

        })
      }
    </>
  );
}

export default Menu;