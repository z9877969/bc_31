import styled from "styled-components";

export const Wrapper = styled.div`
  width: 200px;
  padding: 10px;
  background-color: green;
  align-self: flex-start;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  padding-left: 10px;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);

    &:checked + label::before {
      border: 2px solid #d9e5f1;
      background-color: #0f7be0;
    }
  }

  & label::before {
    display: inline-block;
    content: "";
    width: 10px;
    height: 10px;
    margin-right: 15px;
    align-self: center;
    border: 2px solid #212121;
    border-radius: 4px;
    /* background-color: olive; */
  }
`;

// export const Input = styled.input`

// `
