import React from 'react'
import styled from 'styled-components'
import Header from './elements/Header'
import { useParams,useNavigate } from 'react-router-dom'

const Detail = () => {

  const params = useParams();

  console.log(params.title)

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <MainWrap>
        <SubTitle><h2>요즘 HOT한 깻잎논쟁</h2></SubTitle>
        <WriteInfo>작성자 : NICKNAME ( MBTI : CUTE ) 작성일 :22.07.22</WriteInfo>
        <PreView></PreView>
        <Desc>
            <div>주제 내용</div>
          </Desc>

        <BtnWrap>
          <AgreeButton>찬성
            <p>0</p></AgreeButton>
          
          <OppositionButton >반대<p>2</p></OppositionButton>
          
        </BtnWrap>

        <Desc>
            <div>댓글창!!!</div>
          </Desc>

        
          <BackButton type="submit" onClick={() => {
            window.alert("게시글 작성에 성공하셨습니다.")
            navigate("/")
          }}>뒤로가기</BackButton>
        
      </MainWrap>
    </div>
  )
}

const MainWrap = styled.div`
  width: 30%;
  height: 100%;
  margin: 0 auto;
`

const SubTitle = styled.div`
  margin: 120px auto 30px;
  font-family: 'Russo One',sans-serif;
  font-size: 28px;
  /* font-style: italic; */
  color: #E9FEF7;
  text-shadow:
    2px 0 4px #1ABC9C,
    6px 0 4px #5D9D8B;
  h2 {
    font-size: 20px;
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

const WriteInfo =styled.h3`
  font-size: 10px;
  text-align: right;
`;

const PreView = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  border-radius: 8px;
  border: 5px solid #1ABC9C;
  box-sizing: border-box;
`

const Desc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: 100%;
    height: 150px;
    margin: 0 auto 20px;
    box-sizing: border-box;
    border: 2px solid #1ABC9C;
    border-radius: 8px;
    padding: 20px;
    outline: none;
  }
`

const BtnWrap = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 50px;
  
  button {
    width: 48%;
    height: 100%;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
  }
`

const AgreeButton =styled.button`

    padding-top:15px;
    background-color: #1ABC9C;
    border: 2px solid #1ABC9C;
    color: white;
    &:hover{
    background-color: transparent;
    border: 2px solid #1ABC9C;
    color: #1ABC9C;
    }
`;

const OppositionButton =styled.button`
padding-top:15px;
background-color: gray;
    border: 2px solid gray;
    color: white;
    &:hover{
    background-color: transparent;
    border: 2px solid gray;
    color: gray;
    }
`;

const BackButton = styled.button`
    width:100%;
    border-radius: 8px;
    height: 40px;
    background-color: transparent;
    color: #1ABC9C;
    border: 2px solid #1ABC9C;
    &:hover{
      background-color: #1ABC9C;
    color: white;
    border: 2px solid #1ABC9C;
    
    }
`;



export default Detail