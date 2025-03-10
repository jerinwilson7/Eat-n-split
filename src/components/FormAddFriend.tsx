import React, { useState } from "react";
import Button from "./Button";
import { FriendsType } from "../Types/friends";

type FormAddFriendPropsType = {
    onAddFriend:(newFriend:FriendsType)=>void
}

function FormAddFriend({onAddFriend}:FormAddFriendPropsType) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = crypto.randomUUID()

    const newFriend = {
        id,
        name,
        image:`${image}?=${id}`,
        balance:0
    }

    onAddFriend(newFriend)
  };

  return (
    <form className="add-friend" onSubmit={handleSubmit}>
      <label>Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
