import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../../redux/todos/todos-actions";

export default function TodoEditor({ closeModal }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      console.log("Zapolni pole suka");
      return;
    }
    dispatch(add(text));
    setText("");
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={handleChange}></textarea>
      <button type="submit">Add</button>
    </form>
  );
}

// export default class TodoEditor extends Component {
//   state = {
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({ message: e.currentTarget.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.message);
//     this.setState({ message: "" });
//   };

//   render() {
//     const { message } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <textarea value={message} onChange={this.handleChange}></textarea>
//         <button type="submit">Add</button>
//       </form>
//     );
//   }
// }
