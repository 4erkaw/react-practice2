import { useSelector } from "react-redux";
import { getTodos } from "./../../../redux/todos/todos-selectors";

export default function Stats() {
  const total = useSelector(getTodos);
  const completed = total.reduce(
    (total, item) => (item.completed ? total + 1 : total),
    0
  );
  return (
    <div>
      <p>Total: {total.length}</p>
      <p>Completed: {completed}</p>
    </div>
  );
}
