export function ToDoListItem({ item, onIsDone, onRemoveItem }) {
  const { description, isDone, id } = item;
  return (
    <li>
      <input type="checkbox" checked={isDone} onChange={() => onIsDone(id)} />
      <span style={isDone ? { textDecoration: "line-through" } : {}}>
        {description}
      </span>
      <button onClick={() => onRemoveItem(id)}>❌</button>
    </li>
  );
}
