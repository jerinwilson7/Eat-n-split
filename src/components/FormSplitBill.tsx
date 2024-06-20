import React, { useState } from "react"
import { FriendsType } from "../Types/friends"
import Button from "./Button"


type FormSplitBillPropsType ={
    selectedFriend :FriendsType | null
    onSplit:(value:number)=>void

}


function FormSplitBill({selectedFriend,onSplit}:FormSplitBillPropsType) {

    const [bill, setBill] = useState(0)
    const [ownExpense, setOwnExpense] = useState(0)
    const [whoIsPaying, setWhoIsPaying] = useState('user')
    const friendExpense = bill? bill - ownExpense : 0


  

    const handleSplit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!bill) return
        onSplit(whoIsPaying === 'user'? friendExpense : -ownExpense)

    }

  return (
    <form className="form-split-bill" onSubmit={handleSplit}>
        <h2>SPLIT A BILL WITH {selectedFriend?.name}</h2>

        <label>Bill value</label>
        <input type="text" 
        value={bill} 
        onChange={(e)=>setBill(Number(e.target.value))} />

        <label>Your expense</label>
        <input type="text" 
          value={ownExpense}
          onChange={(e)=>setOwnExpense(Number(e.target.value) > bill ? ownExpense : Number(e.target.value))} />

        <label>{selectedFriend?.name}`s Expense</label>
        <input type="text"
         disabled  value={friendExpense}/>

        <label>Who is paying for the bill</label>
        <select value={whoIsPaying} onChange={(e)=>setWhoIsPaying(e.target.value)}>
            <option value={selectedFriend?.name}>{selectedFriend?.name}</option>
            <option value='user'>You</option>
        </select>
        <Button>Split Bill</Button>
    </form>
  )
}

export default FormSplitBill