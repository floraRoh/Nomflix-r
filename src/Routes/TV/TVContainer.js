import React from "react";
import TVPresenter from "Routes/TV/TVPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    topRated: null,
    airingToday: null,
    popular: null,
    error: null,
    loading: true,
  };

  render() {
    const { topRated, airingToday, popular, error, loading } = this.state;
    return (
      <TVPresenter topRated={topRated} airingToday={airingToday} popular={popular} error={error} loading={loading} />
    );
  }
}
