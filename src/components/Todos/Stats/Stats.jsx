import { useSelector } from "react-redux";
import { todoSelectors } from "../../../redux/todos";

export default function Stats() {
  const total = useSelector(todoSelectors.getTotalTodoCount);
  const completed = useSelector(todoSelectors.getCompletedTodoCount);
  return (
    <div>
      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
    </div>
  );
}
