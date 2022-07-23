import React from 'react'
import styled from 'styled-components'
import Header from './elements/Header'

const Main = () => {
  return (
    <div>
      <Header />
      <Banner></Banner>
      <AddBtn></AddBtn>
    </div>
  )
}

const Banner = styled.div`
  width: 800px;
  height: 400px;
  border-radius: 20px;
  border: 2px solid rgb(26, 188, 156);
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNg7TaPYPekSG6ZQBJJjdDaFq5PoCIMLgjw&usqp=CAU");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 140px auto 60px;
`

const AddBtn = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 60px;
  height: 60px;
  background-color: rgb(26, 188, 156);
  border-radius: 50%;
  &:before {
    position: absolute;
    top: calc(50% - 4px);
    left: calc(50% - 10px);
    content: '';
    width: 20px;
    height: 8px;
    background-color: white;
  }
`

export default Main