import React from "react";
import HomePresenter from "Routes/Home/HomePresenter";
import { movieApi, tvApi } from "api";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: upComing },
      } = await movieApi.upComing();
      const {
        data: { results: popular },
      } = await movieApi.popular();
      this.setState({
        nowPlaying,
        upComing,
        popular
      })
    } catch {
      this.setState({
        error: "Can't find information",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />
    );
  }
}
