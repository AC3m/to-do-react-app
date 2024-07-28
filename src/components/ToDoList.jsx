import { ToDoListItem } from "./ToDoListItem";

export function ToDoList({ list, onIsDone, onRemoveItem }) {
  return (
    <div className="to-do-list">
      <ul>
        {list.map((item) => (
          <ToDoListItem
            item={item}
            key={item.id}
            onIsDone={onIsDone}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </ul>
    </div>
  );
}
