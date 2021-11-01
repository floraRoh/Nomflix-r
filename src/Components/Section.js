import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  margin-top:30px;
  margin-left:10px;
  @media screen and (max-width: 320px) {
    margin-left:0;
  }
`;

const Title = styled.span`
  font-size:20px;
  line-height:30px;
  font-weight:600;
`;

const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fill, 150px);
  grid-gap:20px;
  margin-top:20px;
  @media screen and (max-width: 320px) {
    grid-template-columns: auto;
  }
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Section;
