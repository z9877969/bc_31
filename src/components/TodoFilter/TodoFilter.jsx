import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/todo/todoSlice";
import { getTodoFilter } from "../../redux/todo/todoSelectors";

const TodoFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getTodoFilter);

  return (
    <select
      name="filter"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      style={{ display: "flex", margin: "20px auto 20px" }}
    >
      <option value="all">All</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};

export default TodoFilter;
