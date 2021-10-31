import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  margin-top:30px;
  margin-left:10px;
`;

const Title = styled.span`
  font-size:16px;
  line-height:30px;
`;

const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fill, 150px);
  grid-gap:20px;
  margin-top:20px;
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
