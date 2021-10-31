import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import { movieApi } from "api";

const Container = styled.div`
  padding: 0 10px;
`;
const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) =>
  loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">{nowPlaying.map((movie) => movie.title)}</Section>
      )}
      {upComing && upComing.length > 0 && <Section title="Up Coming">{upComing.map((movie) => movie.title)}</Section>}
      {popular && popular.length > 0 && <Section title="Popular">{popular.map((movie) => movie.title)}</Section>}
    </Container>
  );

HomePresenter.prototype = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
