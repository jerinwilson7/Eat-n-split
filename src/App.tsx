
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import FormAddFriend from './components/FormAddFriend'
import FormSplitBill from './components/FormSplitBill'
import FriendList from './components/FriendList'
import { initialFriends } from './Data/initialfriends'
import { FriendsType } from './Types/friends'

function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState<FriendsType | null>(null)
  const [showAddFriend, setShowAddFriend] = useState(false)
    // console.log(setFriends)




    // the function which is responsible for selecting the friend
    const handleSelection = (friend:FriendsType)=>{
      setSelectedFriend((currentlySelected)=>{
       return currentlySelected?.id === friend.id ? null:friend
      })
    }

// function responsible for displaying add friend box
    const handleShowAddFriend = () =>[setShowAddFriend((show)=>!show)]


    // function responsible for adding new friend from FormAddFriend component

    const addNewFriend =(newFriend:FriendsType)=>{
      console.log("Adding New Friend")
      setFriends((previousFriends)=>[...previousFriends,newFriend])
      console.log(friends)
    }

     const onSplitBill = (value:number)=>{



      console.log('first',value)

      setFriends((friends)=>
        friends.map((friend)=>
          friend.id === selectedFriend?.id ? {...friend,balance:friend.balance+value}:friend
        )
      )

      setSelectedFriend(null)
     }


  return (
   <div className="app">
    <div className="sidebar">
      <FriendList friends={friends} selectedFriend={selectedFriend} onSelection={handleSelection} />4

      {showAddFriend && <FormAddFriend onAddFriend={addNewFriend} />}

      <Button onClick={handleShowAddFriend}>
        {showAddFriend ? 'Close':'Add Friend'}
        </Button>

    </div>
   {selectedFriend &&
    <FormSplitBill selectedFriend={selectedFriend} onSplit={onSplitBill}/>}
   </div>
  )
}

export default App
