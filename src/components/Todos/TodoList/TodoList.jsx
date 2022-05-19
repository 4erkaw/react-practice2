import s from "./TodoList.module.css";
import Todo from "../Todo";
import { useSelector, useDispatch } from "react-redux";
import { todoActions, todoSelectors } from "../../../redux/todos";

export default function TodoList() {
  const todos = useSelector(todoSelectors.getVisibleTodos);
  const dispatch = useDispatch();
  return (
    <ul className={s.list}>
      {todos &&
        todos.map(({ id, text, completed }) => (
          <li className={s.item} key={id}>
            <Todo
              text={text}
              completed={completed}
              onDelete={() => dispatch(todoActions.remove(id))}
              onToggleCompleted={() =>
                dispatch(todoActions.toggleCompleted(id))
              }
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
