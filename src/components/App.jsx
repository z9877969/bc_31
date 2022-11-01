import SearchForm from "./SearchForm/SearchForm";
import NewsGallery from "./NewsGallery/NewsGallery";
import { Component } from "react";
// import Modal from "./Modal/Modal";

class App extends Component {
  state = {
    query: "",
  };

  setQuery = (query) => {
    this.setState({ query });
  };

  // handle

  render() {
    return (
      <>
        <SearchForm setQuery={this.setQuery} />
        <NewsGallery query={this.state.query} />
        {/* <Modal /> */}
      </>
    );
  }
}

export default App;
