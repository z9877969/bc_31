import PropTypes from "prop-types";
import { createRef } from "react";
import { Component } from "react";
import Modal from "../Modal/Modal";
import s from "./NewsList.module.scss";

// instance

class NewsList extends Component {
  state = {
    modalData: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.news !== this.props.news) {
      this.itemRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }

  itemRef = createRef(null);

  changeModalData = (modalData = null) => {
    this.setState({ modalData });
  };

  render() {
    const { news } = this.props;
    const { modalData } = this.state;
    return (
      <>
        <ul className={s.news}>
          {news.map((item, idx) => (
            <li
              ref={idx % 6 === 0 ? this.itemRef : null}
              key={idx}
              className={s.item}
              onClick={() =>
                this.changeModalData({ url: item.url, title: item.title })
              }
            >
              <img className={s.img} src={item.urlToImage} alt="" />
              <div className={s.textWrapper}>
                <h3 className={s.title}>{item.title}</h3>
                <p className={s.author}>{item.author}</p>
                <p className={s.date}>{item.publishedAt}</p>
                <p className={s.descr}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        {modalData && (
          <Modal closeModal={this.changeModalData} {...modalData} />
        )}
      </>
    );
  }
}

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsList;
