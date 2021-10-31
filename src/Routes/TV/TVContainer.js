import { tvApi } from "api";
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
  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      this.setState({
        topRated,
        airingToday,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find TV information",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { topRated, airingToday, popular, error, loading } = this.state;
    return (
      <TVPresenter topRated={topRated} airingToday={airingToday} popular={popular} error={error} loading={loading} />
    );
  }
}
