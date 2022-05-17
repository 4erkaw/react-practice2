import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/counter/counter-actions";
import { getValue, getStep } from "../../redux/counter/counter-selector";

export default function Counter() {
  const value = useSelector(getValue);
  const step = useSelector(getStep);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{value}</p>
      <button type="button" onClick={() => dispatch(actions.increment(step))}>
        Increment on {step}
      </button>
      <button type="button" onClick={() => dispatch(actions.decrement(step))}>
        Decrement on {step}
      </button>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   value: state.counter.value,
//   step: state.counter.step,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onIncrement: (value) => dispatch(actions.increment(value)),
//   onDecrement: (value) => dispatch(actions.decrement(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
