import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const RightBarContainer = styled.div`
  top: 0;
  width: 285px;
  padding: 30px;
  background-color: #121212;
  color: #d8d8d8;
  position: fixed;
  height: 100%;
  overflow-y: hidden;
  z-index: 19999;
  transition: 0.6s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const CloseIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 20px;
  background: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
`;
export const ProjectsWrapper = styled.div`
  margin-bottom: 40px;
  font-size: 20px;
`;
export const ProjectsItem = styled(LinkR)`
  padding: 2px;
  outline: 0;
  display: inline-block;
  max-with: 105px;
  overflow: hidden
  transition: transform 0.5s ease;
`;
export const ProjectImage = styled.img`
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
export const ContactWrapper = styled.div``;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  margin-top: 20px;
`;
export const TextInfo = styled.p`
  margin-bottom: 0;
  margin-left: 9px;
  font-size: 16px;
`;
