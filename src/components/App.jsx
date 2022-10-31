import { Component } from "react";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import TodoListItem from "./TodoListItem/TodoListItem";
import TodoPage from "./TodoPage/TodoPage";

class App extends Component {
  state = {
    isOpen: false,
    isLoading: false,
    content: null, // comp
  };

  setContent = (content = null) => this.setState({ content });

  toggleIsOpen = () => this.setState((prev) => ({ isOpen: !prev.isOpen }));

  render() {
    const { content } = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleIsOpen}>
          Click
        </button>
        <TodoPage isOpen={this.state.isOpen} setContent={this.setContent} />
        {this.state.isLoading && <Loader />}
        {this.state.content && (
          <Modal toggleIsOpen={this.setContent}>{content}</Modal>
        )}
      </>
    );
  }
}

export default App;
