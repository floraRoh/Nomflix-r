import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 200px;
  border-radius: 4px;
  transition: opacity 0.2s ease-in-out;
`;
const Rating = styled.span`
  display: block;
  margin: 7px 0;
  position: absolute;
  bottom: 0;
  right: 10px;
  opacity: 0;
`;
const ImageContainer = styled.div`
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.6;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin: 10px 0 4px;
`;
const Year = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, star, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/images/noPosterSmall.png")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>
          {rating} / 10
        </Rating>
      </ImageContainer>
      <Title>{title.length > 15 ? `${title.substring(0, 15)}...` : title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  star: PropTypes.string,
  isMovie: PropTypes.bool,
};
export default Poster;
