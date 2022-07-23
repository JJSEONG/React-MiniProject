import React from 'react'
import styled from 'styled-components'
import Header from './elements/Header'
import Posts from './elements/Posts'

const Main = () => {
  return (
    <div>
      <Header />
      <MainWrap>
        <Banner></Banner>
        <Posts></Posts>
      </MainWrap>
      <AddBtn></AddBtn>
    </div>
  )
}

const MainWrap = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
`

const Banner = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  border: 5px solid #1ABC9C;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNg7TaPYPekSG6ZQBJJjdDaFq5PoCIMLgjw&usqp=CAU");
  background-repeat: no-repeat;
  background-position: 30% 70%;
  background-size: cover;
  margin: 140px auto 30px;
  box-sizing: border-box;
`

const AddBtn = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 60px;
  height: 60px;
  background-color: #1ABC9C;
  border-radius: 50%;
  transition: 0.6s;
  cursor: pointer;
  &:before {
    position: absolute;
    top: calc(50% - 3px);
    left: calc(50% - 15px);
    content: '';
    width: 30px;
    height: 6px;
    background-color: white;
  }
  &:after {
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 3px);
    content: '';
    width: 6px;
    height: 30px;
    background-color: white;
  }
  &:hover {
    transform: rotate(180deg);
  }
`

export default Main