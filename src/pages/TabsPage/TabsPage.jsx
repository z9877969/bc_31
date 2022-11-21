import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import s from "./TabsPage.module.css";
import { addColumn } from "../../redux/tabs/tabsOperations";
import { useState } from "react";
import { useEffect } from "react";
import { getColumns } from "../../redux/tabs/tabsSelectors";

const TabsPage = () => {
  const dispatch = useDispatch();

  const [isAddColumn, setIsAddColumn] = useState(false);
  const [columnTitle, setColumnTitle] = useState("");

  const tasksColumns = useSelector(getColumns);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn(columnTitle));
  };

  useEffect(() => {
    setIsAddColumn((prev) => (prev ? !prev : prev));
  }, [tasksColumns]);

  return (
    <div className={s.wrapper}>
      <ul className={s.table}>
        {tasksColumns.map((el) => (
          <li key={el.id} className={s.column}>
            <h2 className={s.columnTitle}>{el.title}</h2>
            <ul className={s.tasksList}>
              {el.tasksList.map((el) => (
                <li key={el.id} className={s.task}>
                  {el.descr}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div key={"btn-add"} className={clsx(s.btn)}>
        {isAddColumn ? (
          <form className={s.form} onSubmit={handleSubmit}>
            <input
              type="text"
              value={columnTitle}
              onChange={(e) => setColumnTitle(e.target.value)}
            />
            <div className={s.btnsWrapper}>
              <button type="submit">Add</button>
              <button type="button" onClick={() => setIsAddColumn(false)}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button type="button" onClick={() => setIsAddColumn(true)}>
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default TabsPage;
