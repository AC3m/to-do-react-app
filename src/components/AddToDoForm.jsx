import { useState } from "react";

export function AddToDoForm({ onAddToList }) {
  const [description, setDescription] = useState("");

  function handleOnClick(e) {
    e.preventDefault();
    const newItem = {
      description: description,
      isDone: false,
      id: crypto.randomUUID,
    };
    onAddToList(newItem);
    setDescription("");
  }

  return (
    <div className="add-to-do-form">
      <form>
        <input
          type="text"
          placeholder="Type to-do"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button onClick={handleOnClick}>Add to list</button>
      </form>
    </div>
  );
}
