import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../../redux/todos/todos-actions";
import { getFilter } from "../../../redux/todos/todos-selectors";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      Filter by name
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (e) => dispatch(changeFilter(e.target.value)),
// });
