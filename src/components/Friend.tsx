import { FriendsType } from "../Types/friends"
import Button from './Button'

type FriendPropsType = {
    friend:FriendsType
    selectedFriend:FriendsType | null,
    onSelection:(friend:FriendsType)=>void
}


function Friend({friend,onSelection,selectedFriend}:FriendPropsType) {

    const isSelected = selectedFriend?.id === friend.id 
  return (
    <li className={isSelected? 'selected':''}>
      <img src={friend.image} alt={friend.name} /> 
      <h3>{friend.name}</h3> 
      {friend.balance === 0 && (
        <p>Setteled up with {friend.name}</p>
      )}

      {friend.balance > 0 && (
        <p className="green">{friend.name} owe you {friend.balance}</p>
      )}

      {friend.balance < 0 && (
        <p className="red">you owe {friend.name} {Math.abs(friend.balance)}</p>
      )}

      <Button onClick={()=>onSelection(friend)}>{isSelected ? 'Close':'Select'}</Button>
    </li>
  )
}

export default Friend