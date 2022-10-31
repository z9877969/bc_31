import { Component } from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo } from "../../data/todo";
import Modal from "../Modal/Modal";
import TodoListItem from "../TodoListItem/TodoListItem";

class TodoPage extends Component {
  state = {
    todo: JSON.parse(localStorage.getItem("todo")) ?? todo, // [] | [{}, {}] | []
    filter: "all",
    color: "red",
    isOpen: false,
    itemProps: null,
  };

  static getDerivedStateFromProps(newProps, curState) {
    // console.log("newProps :>> ", newProps);
    // console.log("state :>> ", curState);
    console.log("GDSFP_TodoPage");
    if (newProps.isOpen === true) {
      return { ...curState, color: "green" };
    }
    return { ...curState, color: "red" };
  }

  // componentDidMount() {
  //   console.log("CDM_TodoPage");
  //   const todoLS = JSON.parse(localStorage.getItem("todo")) ?? todo;
  //   this.setState({ todo: todoLS });
  // }

  getSnapshotBeforeUpdate() {
    return document.body.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.todo !== this.state.todo) {
      localStorage.setItem("todo", JSON.stringify(this.state.todo));
    }
  }

  addTodo = (newTodo) => {
    this.setState((prev) => ({ todo: [...prev.todo, newTodo] }));
  };

  removeTodo = (id) => {
    this.setState((prev) => ({ todo: prev.todo.filter((el) => el.id !== id) }));
  };

  updateStatus = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.map((el) =>
        el.id !== id ? el : { ...el, isDone: !el.isDone }
      ),
    }));
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  filterTodo = () => {
    const { filter, todo } = this.state;
    if (filter === "all") return todo;
    const filteredTodo = todo.filter((el) => el.priority === filter);
    return filteredTodo;
  };

  setItemProps = (props) => {
    this.setState({ itemProps: props, isOpen: true });
  };

  toggleIsOpen = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  render() {
    console.log("RENDER_TodoPage");
    const filteredTodo = this.filterTodo();
    return (
      <>
        <ToDoForm addTodo={this.addTodo} />
        <select
          style={{
            display: "block",
            margin: "10px auto",
            color: this.state.color,
          }}
          name="filter"
          value={this.state.filter}
          onChange={this.handleChange}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        {filteredTodo.length > 0 && (
          <ToDoList
            todo={filteredTodo}
            updateStatus={this.updateStatus}
            removeTodo={this.removeTodo}
            setContent={this.props.setContent}
          />
        )}
        {/* {this.state.isOpen && (
          <Modal toggleIsOpen={this.toggleIsOpen}>
            <TodoListItem {...this.state.itemProps} />
          </Modal>
        )} */}
      </>
    );
  }
}

export default TodoPage;
