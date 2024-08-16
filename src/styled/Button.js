import styled from "styled-components";


export const Button = styled.button`
  /* position: absolute; */
  padding: 10px 18px;
  min-width: 100px;
  font-size: 16px;
  border: 2.5px solid currentColor;
  border-radius: 3rem;
  color: #420202;
  overflow: hidden;
  text-decoration: none;
  transition: 0.2s transform ease-in-out;
  will-change: transform;
  z-index: 0;

  &::after {
    background-color: #420202;
    border-radius: 3rem;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-100%, 0) rotate(10deg);
    transform-origin: top left;
    transition: 0.2s transform ease-out;
    will-change: transform;
    z-index: -1;
  }
  &:hover::after {
    transform: translate(0, 0);
  }

  &:hover {
    border: 2px solid transparent;
    color: #f8f8f8;
    transform: scale(1.05);
    will-change: transform;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 15px;
  }
`;