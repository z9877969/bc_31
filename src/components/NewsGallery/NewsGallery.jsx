import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import news from "../../data/news.json";
import { Component } from "react";
import { searchNewsApi } from "../../utils/newsApi";

//  = ({ query }) =>
class NewsGallery extends Component {
  state = {
    news: [],
    isLoading: false,
    error: null,
    totalPages: 0,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ isLoading: true });
      searchNewsApi(this.props.query)
        .then((data) =>
          this.setState({
            news: data.articles,
            totalPages: Math.ceil(data.totalResults / 6),
          })
        )
        .catch((err) => this.setState({ error: err.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  updatePage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  render() {
    // const { query } = this.props;
    const { news, isLoading, totalPages, page } = this.state;
    return (
      <>
        <NewsList news={news} />
        {isLoading && <h1>Loading...</h1>}

        {news.length > 0 && totalPages > page && (
          <Button updatePage={this.updatePage} />
        )}
      </>
    );
  }
}

export default NewsGallery;
