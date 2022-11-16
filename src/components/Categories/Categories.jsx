import Container from "../Container/Container";
import Header from "../Header/Header";
import "./Categories.scss";
import { categories } from "../../data/categories";
import { useNavigate } from "react-router-dom";

const Categories = ({ setCategory }) => {
  const navigate = useNavigate();

  const handleSetCategory = (category) => {
    setCategory(category);
    navigate(-1);
  };

  return (
    <>
      <Header title={"Категорії"} withBtn />
      <section>
        <Container>
          <ul class="list">
            {categories.map((el) => (
              <li key={el.id} class="item">
                <button
                  class="content"
                  onClick={() => handleSetCategory(el.title)}
                >
                  {el.title}
                </button>
                <div class="btn-wrapper">
                  <button class="btn-action" type="button">
                    <svg>
                      <use href="../sprite.svg#icon-edit-pencil"></use>
                    </svg>
                  </button>
                  <button class="btn-action" type="button">
                    <svg>
                      <use href="../sprite.svg#icon-trash"></use>
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <form class="form">
            <label class="label">
              <input
                type="text"
                name="text"
                placeholder="Введіть категорію..."
              />
            </label>
            <button type="submit" class="btn-form">
              Додати
            </button>
          </form>
        </Container>
      </section>
    </>
  );
};

export default Categories;
