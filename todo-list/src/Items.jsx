import SingleItem from "./SingleItem"

const Items = ({ itemList, removeItem, editItem }) => {

  return (
    <div className="items">
      {
        itemList.map((item) => {
          return <SingleItem key={item.id} item={item} removeItem={removeItem} editItem={editItem} />
        })
      }
    </div>
  )
}

export default Items;