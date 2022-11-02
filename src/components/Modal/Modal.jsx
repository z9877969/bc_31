import { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

// ({ url, title, closeModal }) =>

const modalRoot = document.querySelector("#modal");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseByEsc);
  }

  handleCloseByEsc = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { url, title } = this.props;
    return createPortal(
      <div className={s.backdrop} onClick={this.handleBackdropClick}>
        <h1 className={s.title}>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h1>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
