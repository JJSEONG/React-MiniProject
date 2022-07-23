import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderWrap>
      <Title>Selecthing</Title>
      <LogoutBtn>LOGOUT</LogoutBtn>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #1ABC9C;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px #0C7586;
`

const Title = styled.h1`
  margin: 0;
  color: #EDFDF8;
  font-size: 38px;
  font-style: italic;
  text-shadow:
    2px 0 2px #2F4858,
    4px 0 5px #0C7586,
    6px 0 8px #2F4858;
  font-family: 'Russo One', sans-serif;
`

const LogoutBtn = styled.button`
  position: absolute;
  top: calc(50% - 17px);
  right: 100px;
  width: 100px;
  height: 34px;
  border: 2px solid white;
  background-color: #1ABC9C;
  color: white;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: .3s;
  &:hover {
    background-color: white;
    color: #1ABC9C;
    box-shadow: 0 0 20px #0C7586;
  }
`

export default Header