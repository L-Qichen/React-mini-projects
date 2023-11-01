import SingleItem from "./SingleItem"

const Items = ({ itemList, removeItem }) => {

  return (
    <div>
      {
        itemList.map((item) => {
          return <SingleItem key={item.id} item={item} removeItem={removeItem} />
        })
      }
    </div>
  )
}

export default Items;