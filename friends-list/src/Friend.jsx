const Friend = ({ ...friend }) => {

  return (
    <>
      <img src={friend.image} />
      <div>
        <h4>{friend.name}</h4>
        <div style={{ color: '#7e7e7e' }}>{friend.age} years</div>
      </div>
    </>
  )
}

export default Friend;