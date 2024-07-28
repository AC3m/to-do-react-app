import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { AddToDoForm } from "./AddToDoForm";
import { ToDoList } from "./ToDoList";
import { Footer } from "./Footer";

// const initialList = [
//   { description: "Pay elecricity", isDone: false, id: 3213 },
//   { description: "Create to-do app", isDone: false, id: 32323 },
//   { description: "Do shopping", isDone: true, id: 32985 },
// ];

export default function App() {
  const [list, setList] = useState([]);
  console.log(list);

  function handleAddToList(newItem) {
    setList([...list, newItem]);
  }

  function handleIsDone(id) {
    setList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }

  function handleRemoveItem(id) {
    setList((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Header />
      <AddToDoForm onAddToList={handleAddToList} />

      {list.length > 0 && (
        <ToDoList
          list={list}
          onIsDone={handleIsDone}
          onRemoveItem={handleRemoveItem}
        />
      )}
      <Footer />
    </div>
  );
}
