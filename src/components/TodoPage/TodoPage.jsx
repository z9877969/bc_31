import { Component } from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo } from "../../data/todo";

class TodoPage extends Component {
  state = {
    todo: todo,
    filter: "all",
  };

  addTodo = (newTodo) => {
    this.setState((prev) => ({ todo: [...prev.todo, newTodo] }));
  };

  removeTodo = (id) => {
    this.setState((prev) => ({ todo: prev.todo.filter((el) => el.id !== id) }));
  };

  updateStatus = (id) => {
    console.log(id);
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

  render() {
    const filteredTodo = this.filterTodo();
    return (
      <>
        <ToDoForm addTodo={this.addTodo} />
        <select
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
          />
        )}
      </>
    );
  }
}

export default TodoPage;
