import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100vw;
  margin-top:80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-weight: 600;
  color: ${props => props.color};
`;

const Error = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Error.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default Error;
