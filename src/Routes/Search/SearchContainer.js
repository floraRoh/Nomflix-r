import React from "react";
import SearchPresenter from "Routes/Search/SearchPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: true,
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter movieResults={movieResults} tvResults={tvResults} searchTer={searchTerm} error={error} loading={loading} />
    );
  }
}
