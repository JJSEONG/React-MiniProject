import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from './elements/Header'
import Posts from './elements/Posts'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { loadPostDB } from '../redux/modules/selecthing'
import Bannerimg from '../AorB.png'

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostDB())
  }, [])

  const data = useSelector((state) => state.selecthing.post)

  return (
    <div>
      <Header />
      <MainWrap>
        <Banner>
          <img src={Bannerimg} alt="" />
        </Banner>
        {
          data.map((v, idx) => {
            return (
              <Posts data = { v } key = { idx } />
            )
          })
        }
      </MainWrap>
      <AddBtn onClick = {() => {
        navigate('/newBoards')
      }}></AddBtn>
    </div>
  )
}

const MainWrap = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 320px) {
    width: 95%;
  }
  @media (min-width: 321px) and (max-width: 768px) {
    width: 80%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 70%;
  }
`

const Banner = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  border: 5px solid #1ABC9C;
  background-image: url("../AorB.jpeg");
  background-repeat: no-repeat;
  background-position: 30% 70%;
  background-size: cover;
  margin: 140px auto 30px;
  box-sizing: border-box;
  overflow: hidden;
  /* 1024보다 작으면 ! */
  /* Desktop 1028 ~ 1440 / tablet 768 ~ 1027 / mobile 320 ~ 767 */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 320px) {
    height: 160px;
  }
  @media (min-width: 321px) and (max-width: 768px) {
    height: 220px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 260px;
  }
`

const AddBtn = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 60px;
  height: 60px;
  background-color: #1ABC9C;
  border-radius: 50%;
  transition: 0.8s;
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
    box-shadow: 0 0 10px #0C7586;
  }
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    right: 20px;
    bottom: 40px;
    &:before {
    position: absolute;
    top: calc(50% - 2px);
    left: calc(50% - 7px);
    content: '';
    width: 14px;
    height: 4px;
    background-color: white;
  }
  &:after {
    position: absolute;
    top: calc(50% - 7px);
    left: calc(50% - 2px);
    content: '';
    width: 4px;
    height: 14px;
    background-color: white;
  }
  }
`

export default Main