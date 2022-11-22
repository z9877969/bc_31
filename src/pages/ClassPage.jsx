import { Component } from "react";
import { connect } from "react-redux";

class ClassPage extends Component {
  render() {
    return (
      <>
        <h1>{this.props.state.counter}</h1>
        <button onClick={() => this.props.addTodo({ id: 21, title: "qwe" })}>
          Click
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todo: state.todo.items,
  counter: state.counter,
  filter: state.todo.filter,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (form) => dispatch({ type: "addTodo", payload: form }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassPage);
// (props) => <ClassPage {...props} {...stateProps} {...actionProps} />

connect(); // fn(ClassPage)

// HOC
// state, dispatch
{
  const state = {};
  const dispatch = dispatch;
  const ownConnect = (mSTP, mDTP) => (WrappedComponent) => {
    const stateProps = mSTP(state);
    const actionProps = mDTP(dispatch);

    return (props) => (
      <WrappedComponent {...props} {...stateProps} {...actionProps} />
    );
  };

  ownConnect()(ClassPage); // <WrappedClassPage a="qwe" />
}
