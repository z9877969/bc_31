import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import s from "./TodoForm.module.scss";
import { useState } from "react";

const initialFormState = {
  date: moment().format("YYYY-MM-DD"),
  descr: "",
  priority: "",
};

const TodoForm = ({ addTodo }) => {
  // const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  // const [descr, setDescr] = useState("");
  // const [priority, setPriority] = useState("");
  const [form, setForm] = useState(initialFormState);
  const { date, descr, priority } = form;

  // v1
  // const setMethods = {
  //   date: setDate,
  //   descr: setDescr,
  //   priority: setPriority,
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   // setMethods[name](value)
  //   switch (name) {
  //     case "date":
  //       setDate(value);
  //       break;
  //     case "descr":
  //       setDescr(value);
  //       break;
  //     case "priority":
  //       setPriority(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  // v2 with form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...form, isDone: false, id: uuidv4() });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Date </span>
        <input
          className={s.input}
          onChange={handleChange}
          name="date"
          type="date"
          value={date}
        />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          type="text"
          name="descr"
          value={descr}
          onChange={handleChange}
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
            checked={priority === "low"}
            onChange={handleChange}
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
            checked={priority === "medium"}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioMedium">
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
            checked={priority === "high"}
            onChange={handleChange}
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
};

export default TodoForm;

// class ToDoForm extends Component {
//   state = initialFormState;

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(name, value);
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(this.state);
//     this.props.addTodo({ ...this.state, isDone: false, id: uuidv4() });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       ...initialFormState,
//     });
//   };

//   render() {
//     return (
//       <form className={s.form} onSubmit={this.handleSubmit}>
//         <label className={s.label}>
//           <span> Date </span>
//           <input
//             className={s.input}
//             onChange={this.handleChange}
//             name="date"
//             type="date"
//             value={this.state.date}
//           />
//         </label>
//         <label className={s.label}>
//           <span> Description </span>
//           <input
//             className={s.input}
//             type="text"
//             name="descr"
//             value={this.state.descr}
//             onChange={this.handleChange}
//           />
//         </label>

//         <div className={s.labelWrapper}>
//           <div className={s.radioWrapper}>
//             <input
//               id="formRadioLow"
//               className={s.input}
//               type="radio"
//               name="priority"
//               value="low"
//               checked={this.state.priority === "low"}
//               onChange={this.handleChange}
//             />
//             <label className={`${s.label} ${s.radio}`} htmlFor="formRadioLow">
//               Low
//             </label>
//           </div>
//           <div className={s.radioWrapper}>
//             <input
//               id="formRadioMedium"
//               className={s.input}
//               type="radio"
//               name="priority"
//               value="medium"
//               checked={this.state.priority === "medium"}
//               onChange={this.handleChange}
//             />
//             <label
//               className={`${s.label} ${s.radio}`}
//               htmlFor="formRadioMedium"
//             >
//               Medium
//             </label>
//           </div>
//           <div className={s.radioWrapper}>
//             <input
//               id="formRadioHigh"
//               className={s.input}
//               type="radio"
//               name="priority"
//               value="high"
//               checked={this.state.priority === "high"}
//               onChange={this.handleChange}
//             />
//             <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
//               High
//             </label>
//           </div>
//         </div>
//         <button className={s.submit} type="submit">
//           Ok
//         </button>
//       </form>
//     );
//   }
// }

// export default ToDoForm;
