import { useSelector, useDispatch } from "react-redux";
import { todoActions, todoSelectors } from "../../../redux/todos";

export default function Filter() {
  const value = useSelector(todoSelectors.getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      Filter by name
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(todoActions.changeFilter(e.target.value))}
      />
    </label>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (e) => dispatch(changeFilter(e.target.value)),
// });
