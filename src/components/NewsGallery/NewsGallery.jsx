// import { createRef } from "react";
import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import { Component } from "react";
import { searchNewsApi } from "../../utils/newsApi";

class NewsGallery extends Component {
  state = {
    news: [],
    isLoading: false,
    error: null,
    totalPages: 0,
    page: 1,
    query: "",
  };

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.query !== state.query) {
      return { page: 1, query: nextProps.query };
    }
    return state; // {page: 1}
  }

  // getSnapshotBeforeUpdate() {
  //   console.log(window.innerHeight);
  //   return this.newsListRef.current?.clientHeight || 0;
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.query !== this.props.query ||
      prevState.page !== this.state.page
    ) {
      this.searchNews();
    }

    // if (this.state.news !== prevState.news && this.state.page !== 1) {
    //  v.1
    //   // window.scrollTo({
    //   //   top: snapshot + 70,
    //   //   behavior: "smooth",
    //   // });
    //  v.2
    //   // window.scrollBy({
    //   //   top: window.innerHeight,
    //   //   behavior: "smooth",
    //   // });
    // }
  }

  // newsListRef = createRef(null);

  searchNews = () => {
    this.setState({ isLoading: true });
    searchNewsApi(this.props.query, this.state.page)
      .then((data) =>
        this.setState((prev) => ({
          news:
            this.state.page === 1
              ? data.articles
              : [...prev.news, ...data.articles],
          totalPages: Math.ceil(data.totalResults / 6),
        }))
      )
      .catch((err) => this.setState({ error: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  };

  updatePage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  render() {
    const { news, isLoading, totalPages, page } = this.state;
    return (
      <>
        {/* <div ref={this.newsListRef}> */}
        <NewsList news={news} openModal={this.openModal} />
        {/* </div> */}
        {isLoading && <h1>Loading...</h1>}

        {news.length > 0 && totalPages > page && (
          <Button updatePage={this.updatePage} />
        )}
      </>
    );
  }
}

export default NewsGallery;
