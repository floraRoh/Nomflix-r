import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";
import { Helmet } from "react-helmet";

const Container = styled.div`
  margin-top: 30px;
  margin-left: 10px;
  @media screen and (max-width: 320px) {
    margin-left:0;
    padding:0 10px;
  }
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 30px;
  width: 100%;
  @media screen and (max-width: 512px) {
    font-size: 1.2rem;
  } 
`;
const SearchPresenter = ({ movieResults, tvResults, searchTerm, error, loading, handleSubmit, updateTerm }) => (
  <Container>
    <Helmet>
      <title>Search | Nomfilx-r</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm} />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Results">
            {tvResults.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Message color="#e74c3c" text={error} />}
    {tvResults && movieResults && movieResults.length === 0 && tvResults.length === 0 && (
      <Message color="#95a5a6" text={`Nothing Found for : ${searchTerm}`} />
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
