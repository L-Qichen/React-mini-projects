import SingleItem from "./SingleItem"

const Items = ({ itemList }) => {

  return (
    <div>
      {
        itemList.map((item) => {
          return <SingleItem key={item.id} item={item} />
        })
      }
    </div>
  )
}

export default Items;