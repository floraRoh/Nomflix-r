import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const HeaderWrap = styled.header`
  color: white;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-item: center;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0 1px 10px 5px rgba(0, 0, 0, 0.9);
  z-index:10;
`;
const List = styled.ul`
  display: flex;
  &:hover {
    backgrond-color: blue;
  }
`;
const Item = styled.li`
  width: 80px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-bottom: 4px solid ${(props) => (props.current ? "skyblue" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;
const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

function Header({location:{pathname}}) {
  return (
    <HeaderWrap>
      <List>
        <Item current={pathname==="/home"}>
          <SLink to="/home">HOME</SLink>
        </Item>
        <Item current={pathname==="/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname==="/search"}>
          <SLink to="/search">SEARCH</SLink>
        </Item>
      </List>
    </HeaderWrap>
  );
}

export default withRouter(Header);