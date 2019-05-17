import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: inline-block;
  color: var(--mainViolet);
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--mainViolet)"};
  border-radius: 3px;
  display: block;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: var(--mainBlue);
  }

  &:focus {
    outline: none;
  }
`;
