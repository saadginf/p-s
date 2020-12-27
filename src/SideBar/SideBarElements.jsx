import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SideBarContainer = styled.div`
  z-index: 999;
  height: 100vh;
  background-color: #ffc107;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  display: grid;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.3s ease-in-out;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  height: 55px;
  display: flex;
  align-items: center;

  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SideBarLink = styled(LinkR)`
  padding: 10px;
  margin-bottom: 10px;
  line-height: 16px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;

  cursor: pointer;

  font-family: Poppins;
  color: #1b1b1b;

  &:hover {
    color: white;
    text-decoration: none;
    border-bottom: 3px solid black;
    transition: 0.3s ease-in-out;

}
  }
`;
