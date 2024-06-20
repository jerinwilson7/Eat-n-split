
import { FriendsType } from "../Types/friends"
import Friend from "./Friend"

type FriendListPropsType = {
    friends:FriendsType[],
    selectedFriend:FriendsType | null,
    onSelection:(friend:FriendsType)=>void
}

function FriendList({friends,selectedFriend,onSelection}:FriendListPropsType) {
    
  return (
    <div>
      <ul>
        {friends.map((friend)=>(
            <Friend key={friend.id} friend={friend} selectedFriend={selectedFriend} onSelection={onSelection}/>
        ))}
      </ul>
    </div>
  )
}

export default FriendList