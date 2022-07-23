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
  background-color: rgb(26, 188, 156);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  color: white;
`

const LogoutBtn = styled.button`
  position: absolute;
  top: calc(50% - 17px);
  right: 100px;
  width: 100px;
  height: 34px;
  border: 2px solid white;
  background-color: rgb(26, 188, 156);
  color: white;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: .3s;
  &:hover {
    background-color: white;
    color: rgb(26, 188, 156);
    box-shadow: 0 0 20px rgb(16, 108, 90);
  }
`

export default Header