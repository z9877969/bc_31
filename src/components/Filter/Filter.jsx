import { Item, List, Wrapper } from "./Filter.styled";

export const Filter = () => {
  return (
    <Wrapper>
      <List>
        <Item>
          <input name="filter" value="apple" type="checkbox" id="apple" />
          <label htmlFor="apple">Apple</label>
        </Item>
        <Item>
          <input name="filter" value="xiaomi" type="checkbox" id="xiaomi" />
          <label htmlFor="xiaomi">Xiaomi</label>
        </Item>
        <Item>
          <input
            className="filter-input"
            name="filter"
            value="samsung"
            type="checkbox"
            id="samsung"
          />
          <label className="filter-label" htmlFor="samsung">
            Samsung
          </label>
        </Item>
        <Item className="filter-item">
          <input
            className="filter-input"
            name="filter"
            value="zte"
            type="checkbox"
            id="zte"
          />
          <label className="filter-label" htmlFor="zte">
            Zte
          </label>
        </Item>
        <Item className="filter-item">
          <input
            className="filter-input"
            name="filter"
            value="huawei"
            type="checkbox"
            id="huawei"
          />
          <label className="filter-label" htmlFor="huawei">
            Huawei
          </label>
        </Item>
      </List>
    </Wrapper>
  );
};
