import Friend from "./Friend";

const List = ({ friends }) => {


  return (
    <ol>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <Friend {...friend} />
          </li>)
      })}
    </ol >
  )
}

export default List;