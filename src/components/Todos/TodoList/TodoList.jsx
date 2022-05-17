import s from "./TodoList.module.css";
import Todo from "../Todo";
import { useSelector, useDispatch } from "react-redux";
import { remove, toggleCompleted } from "../../../redux/todos/todos-actions";
import { getVisibleTodos } from "../../../redux/todos/todos-selectors";

export default function TodoList() {
  const todos = useSelector(getVisibleTodos);
  const dispatch = useDispatch();
  return (
    <ul className={s.list}>
      {todos &&
        todos.map(({ id, text, completed }) => (
          <li className={s.item} key={id}>
            <Todo
              text={text}
              completed={completed}
              onDelete={() => dispatch(remove(id))}
              onToggleCompleted={() => dispatch(toggleCompleted(id))}
            />
          </li>
        ))}
    </ul>
  );
}

// const mapStateToProps = ({ todos: { items, filter } }) => ({
//   todos: getVisibleTodos(items, filter),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteTodo: (id) => dispatch(actions.remove(id)),
//   onToggleCompleted: (id) => dispatch(actions.toggleCompleted(id)),
// });

//  connect(mapStateToProps, mapDispatchToProps)(TodoList);
