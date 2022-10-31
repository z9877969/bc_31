import { Component } from "react";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseByEsc);
  }

  handleCloseByEsc = (e) => {
    if (e.code === "Escape") {
      this.props.toggleIsOpen();
    }
  };

  handleBackdropClick = (e) =>
    e.target === e.currentTarget && this.props.toggleIsOpen();

  render() {
    const { children } = this.props;
    return (
      <ModalWrapper onClick={this.handleBackdropClick}>{children}</ModalWrapper>
    );
  }
}

export default Modal;
