import { Component, PureComponent } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import s from "./TodoForm.module.scss";

const initialFormState = {
  date: moment().format("YYYY-MM-DD"),
  descr: "",
  priority: "",
};

class ToDoForm extends PureComponent {
  state = initialFormState;

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextState === this.state) return false;
  //   return true;
  // }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({ ...this.state, isDone: false, id: uuidv4() });
    this.reset();
  };

  reset = () => {
    this.setState({
      ...initialFormState,
    });
  };

  render() {
    // console.log("RENDER_TodoForm");
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span> Date </span>
          <input
            className={s.input}
            onChange={this.handleChange}
            name="date"
            type="date"
            value={this.state.date}
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <input
            className={s.input}
            type="text"
            name="descr"
            value={this.state.descr}
            onChange={this.handleChange}
          />
        </label>

        <div className={s.labelWrapper}>
          <div className={s.radioWrapper}>
            <input
              id="formRadioLow"
              className={s.input}
              type="radio"
              name="priority"
              value="low"
              checked={this.state.priority === "low"}
              onChange={this.handleChange}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioLow">
              Low
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioMedium"
              className={s.input}
              type="radio"
              name="priority"
              value="medium"
              checked={this.state.priority === "medium"}
              onChange={this.handleChange}
            />
            <label
              className={`${s.label} ${s.radio}`}
              htmlFor="formRadioMedium"
            >
              Medium
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioHigh"
              className={s.input}
              type="radio"
              name="priority"
              value="high"
              checked={this.state.priority === "high"}
              onChange={this.handleChange}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
              High
            </label>
          </div>
        </div>
        <button className={s.submit} type="submit">
          Ok
        </button>
      </form>
    );
  }
}

export default ToDoForm;
