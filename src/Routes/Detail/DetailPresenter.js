import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet } from "react-helmet";

const Container = styled.div`
  width: 80%;
  height: calc(100vh - 80px);
  padding: 50px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 30px;
  }
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(2px);
  opacity: 0.5;
  z-index: -1;
`;

const Cover = styled.div`
  flex: 0.6;
  height: 100%;
  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    flex: 1;
  }
  @media screen and (max-width: 768px) {
    flex: auto;
    width: 40%;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Data = styled.div`
  margin-left: 50px;
  margin-top: 30px;
  flex: 1;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
const Title = styled.div`
  font-size: 32px;
  line-height: 1.4;
`;
const List = styled.ul`
  display: flex;
  height: 40px;
  align-items: center;
  li {
    &:not(:first-child) {
      list-style: disc;
      margin-left: 30px;
    }
  }
`;
const OverView = styled.p`
  font-size: 15px;
  text-align: justify;
  line-height: 1.5;
  margin-top: 20px;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loader | Nomfilx-r</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{result.original_title ? result.original_title : result.original_name} | Nomfilx-r</title>
      </Helmet>
      <BackDrop bgImg={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
      <Content>
        <Cover
          bgImg={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/images/noPosterSmall.png")
          }
        />
        <Data>
          <Title>{result.original_title ? result.original_title : result.original_name}</Title>
          <List>
            <li>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}</li>
            <li>{result.runtime ? result.runtime : result.episode_run_time[0]} min</li>
            <li>{result.vote_average} / 10 </li>
            <li>👍 {result.vote_count}</li>
          </List>
          <OverView>{result.overview}</OverView>
        </Data>
      </Content>
    </Container>
  );
DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
