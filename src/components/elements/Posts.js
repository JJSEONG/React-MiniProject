import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import Logo from '../../logo.png'

const Posts = () => {

  const navigate = useNavigate()

  return (
    <Post onClick={() => {
      navigate('/boards/details/Post_id')
    }}>
      <Wrap>
        <ImgWrap>
          <img src={Logo} alt="" />
        </ImgWrap>
        <ConWrap>
          <h2>요즘 HOT한 깻잎 논쟁</h2>
          <p>내 절친의 깻잎을 떼어주는 나의 애인, 어떻게 생각하시나요?</p>
        </ConWrap>
      </Wrap>
    </Post>
  )
}

const Post = styled.div`
  width: 100%;
  height: 200px;
  background-color: #C7FCEC;
  border-radius: 20px;
  border: 4px solid #1ABC9C;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
  cursor: pointer;
  margin: 30px auto;
  &:hover {
    box-shadow: 0 0 14px #0C7586;
  }
  &:hover h2 {
    font-size: 25px;
  }
`

const Wrap = styled.div`
  width: 85%;
  height: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImgWrap = styled.div`
  width: 140px;
  height: 140px;
  background-color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    height: 90%;
  }
`

const ConWrap = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 0;
    border-radius: 10px;
    color: white;
    text-shadow:
      0px 0 4px #0C7586,
      1px 0 6px #2F4858;
    box-sizing: border-box;
    transition: 0.6s;
  }
`

export default Posts