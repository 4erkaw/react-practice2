import { useState } from "react";
import { generate } from "shortid";
import { Route, Routes } from "react-router-dom";
import TodoList from "./components/Todos/TodoList";
import TodoEditor from "./components/Todos/TodoEditor";
import Modal from "./components/Modal";
import Filter from "./components/Todos/Filter";
import Counter from "./components/Counter";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <button type="button" onClick={toggleModal}>
        Open modal
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <TodoEditor closeModal={toggleModal} />
          <button type="button" onClick={toggleModal}>
            Close
          </button>
        </Modal>
      )}
      <Filter />
      <TodoList />
      <Counter />
    </>
  );
}

// export default class App extends Component {
//   state = {
//     todoList: [],
//     filter: "",
//     showModal: false,
//   };

//   componentDidMount() {
//     const todos = localStorage.getItem("todoList");
//     const parsedTodos = JSON.parse(todos);
//     if (parsedTodos) {
//       this.setState({
//         todoList: parsedTodos,
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.todoList !== prevState.todoList) {
//       localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
//     }
//   }

//   addTodo = (text) => {
//     const todo = {
//       id: shortid.generate(),
//       text: text,
//       completed: false,
//     };

//     this.setState(({ todoList }) => ({
//       todoList: [...todoList, todo],
//     }));
//     this.toggleModal();
//   };

//   delete = (todoId) => {
//     this.setState((prevState) => ({
//       todoList: prevState.todoList.filter((todo) => todo.id !== todoId),
//     }));
//   };

//   completedCount = () => {
//     const { todoList } = this.state;
//     return todoList.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0
//     );
//   };

//   toggleCompleted = (todoId) => {
//     this.setState(({ todoList }) => ({
//       todoList: todoList.map((todo) =>
//         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };

//   changeFilter = (e) => {
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };

//   formSubmitHandler = (data) => {
//     console.log(data);
//   };

//   getVisibleTodo = () => {
//     const { todoList, filter } = this.state;
//     const toLowerCaseFilter = filter.toLowerCase();
//     return todoList.filter(({ text }) =>
//       text.toLowerCase().includes(toLowerCaseFilter)
//     );
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { todoList, filter, showModal } = this.state;
//     const total = todoList.length;
//     const completed = this.completedCount();
//     const filtered = this.getVisibleTodo();
//     return (
//       <>
//         <div>
//           <p>Total: {total}</p>
//           <p>Completed: {completed}</p>
//         </div>
//         <button type="button" onClick={this.toggleModal}>
//           Open modal
//         </button>
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <TodoEditor onSubmit={this.addTodo} />
//             <button type="button" onClick={this.toggleModal}>
//               Close
//             </button>
//           </Modal>
//         )}
//         <br />
//         <Filter value={filter} onChange={this.changeFilter} />
//         <TodoList
//           todo={filtered}
//           onDeleteTodo={this.delete}
//           onToggleCompleted={this.toggleCompleted}
//         />
//       </>
//     );
//   }
// }
