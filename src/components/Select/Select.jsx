import { useContext } from "react";
import { useState } from "react";
import ReactSelect from "react-select";
import sprite from "../../assets/icons/sprite.svg";
import { OptionsContext, useData, useDataContext, useMethod, useMethodContext } from "../App";

const Label = ({ title }) => (
  <>
    <svg style={{ width: "15px", height: "15px", marginRight: "8px" }}>
      <use href={sprite + "#icon-checkbox-checked"}></use>
    </svg>
    {title}
  </>
);

const options = [
  {
    value: "chocolate",
    label: <Label title={"Chocolate"} />,
  },
  { value: "strawberry", label: <Label title={"Strawberry"} /> },
  { value: "vanilla", label: <Label title={"Vanilla"} /> },
];

const Select = () => {
 const method = useMethod();
 const data = useData();

  // const { data, method } = useContext(OptionsContext); // { data: option, method }

  return (
    <ReactSelect
      options={options}
      value={data}
      onChange={(option) => method(option)}
    />
  );
};

export default Select;
