import { movieApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "Routes/Search/SearchPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  // componentDidMount() {
  //   this.handleSubmit();
  // }

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm != "") {
      this.searchByTerm();
    }
  };
  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults,
      });
    } catch {
      this.setState({
        error: "Can't find results information",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };
  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTer={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
