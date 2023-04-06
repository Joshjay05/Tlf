import React from 'react'
import styled from 'styled-components';
const Button = () => {
const Button = styled.button`
     background-color:  #fa8c4c;
  color: ${({ color }) => color || "blue"};
  padding: 10px;
  border: 1px solid ${({ color }) => color || " #fa8c4c"};
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #fa8c4c;

    ${props => props.$primary && css`
    background: #f5f1f3;
    color: #fff9f9;
  `}
`


  return (

    <Button></Button>
  )
}

export default Button