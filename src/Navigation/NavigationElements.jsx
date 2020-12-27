import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const NavContainer = styled.div`
  background: #ffc107;
  height: 55px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 10;
  padding-left: 20px;
  max-with: 1100px;
  padding-right: 50px;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    height: 100%;
  }
`;

export const Navlinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  height: 100%;

  margin-left: 24px;

  @media (max-width: 960px) {
    display: none;
  }
`;
export const NavItem = styled.div`
  display: flex;
  height: 40px;
`;
export const NavA = styled(LinkR)`
  padding: 10px;
  margin-right: 1px;
  line-height: 16px;
  font-weight: bold;
  font-size: 15px;
  position: relative;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: Poppins;
  color: #1b1b1b;
  &:hover {
    color: white;
    text-decoration: none;
    border-bottom: 3px solid black;
   
}
  }
`;
export const SideBar = styled.div`
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
`;
