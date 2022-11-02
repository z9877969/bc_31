import { Component } from "react";
import SearchForm from "./SearchForm/SearchForm";
import NewsGallery from "./NewsGallery/NewsGallery";

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
      </>
    );
  }
}

export default App;
