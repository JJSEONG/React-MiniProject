import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Posts = ({ data }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  

  const loadDetail = () => {
    try {
      navigate(`/boards/${data.id}/details`)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <Post onClick={loadDetail}>
      <Wrap>
        <ImgWrap>
          <img src={data.image} alt="" />
        </ImgWrap>
        <ConWrap>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
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
    transform: scale(1.05);
  }
  &:hover h2 {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    &:hover h2 {
      font-size: 17px;
    }
  }
`

const Wrap = styled.div`
  width: 85%;
  height: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 420px) {
    flex-direction: column;
    height: 100%;
  }
`

const ImgWrap = styled.div`
  width: 140px;
  height: 140px;
  background-color: #1ABC9C;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 95%;
    height: 95%;
    border-radius: 50%;
  }
  @media (max-width: 420px) {
    width: 70px;
    min-height: 70px;
    margin: 20px 0 0;
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
  @media (max-width: 320px) {
    width: 100%;
    h2 {
      font-size: 13px;
    }
    p {
      font-size: 11px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
  }
`

export default Posts