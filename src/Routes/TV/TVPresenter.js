import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.div``;

const TVPresenter = ({ topRated, airingToday, popular, error, loading }) =>
  loading ? null : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          <Container>{topRated.map((tv) => tv.name)}</Container>
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          <Container>{airingToday.map((tv) => tv.name)}</Container>
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          <Container>{popular.map((tv) => tv.name)}</Container>
        </Section>
      )}
    </Container>
  );

TVPresenter.prototype = {
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
