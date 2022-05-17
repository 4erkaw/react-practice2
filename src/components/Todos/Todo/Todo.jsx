export default function Todo({ text, completed, onToggleCompleted, onDelete }) {
  return (
    <>
      <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
      <p>{text}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </>
  );
}
