import React from 'react'
import styled from 'styled-components'
import Header from './elements/Header'
import { useParams } from 'react-router-dom'

const Detail = () => {

  const params = useParams();

  console.log(params.title)

  return (
    <div>
        <Header/>
        <DetailWrap>
            <Title>주제 제목</Title>
            <WriteInfo>작성자 : NICKNAME ( MBTI : CUTE ) 작성일 :22.07.24</WriteInfo>
            <Image>Image</Image>
            <Content>주제 내용</Content>
            <ButtonBox>찬성/반대 버튼 박스 !!</ButtonBox>
            <ReplyBox>댓글 박스</ReplyBox>
            <BackButtonBox>뒤로가기 버튼 박스!!</BackButtonBox>
        </DetailWrap>
    </div>
  )
}

const DetailWrap = styled.div`
  width: 50%;
  height: 100vh;
  margin: 80px auto;
  border : 1.5px solid lightslategray;
  background-color: whitesmoke;
`;

const Title = styled.div`
width: 50%;
  height: 40px;
  border-radius: 10px;
  border: 3px solid #1ABC9C;
  /* background-position: 30% 70%; */
  /* background-size: cover; */
  margin: 10% auto 30px;
  box-sizing: border-box;
`;

const WriteInfo = styled.div`
   width: 100%;
  height: 20px;
  border-radius: 5px;
  border: 1px solid lightslategray;
  background-position: 30% 70%;
  background-size: cover;
  /* margin: 10% auto 30px; */
  box-sizing: border-box;
  text-align: right;
  font-size: 10px;
`;

const Image = styled.div`
   width: 100%;
  height: 170px;
  border-radius: 5px;
  border: 1px solid lightslategray;
  background-position: 30% 70%;
  background-size: cover;
  /* margin: 10% auto 30px; */
  box-sizing: border-box;
`;

const Content = styled.div`
   width: 100%;
  height: 100px;
  border-radius: 5px;
  border: 1px solid lightslategray;
  background-position: 30% 70%;
  background-size: cover;
  /* margin: 10% auto 30px; */
  box-sizing: border-box;
`;

const ButtonBox = styled.div`
   width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid lightslategray;
  background-position: 30% 70%;
  background-size: cover;
  /* margin: 10% auto 30px; */
  box-sizing: border-box;
`;

const ReplyBox = styled.div`
   width: 100%;
  height: 150px;
  border-radius: 5px;
  border: 1px solid lightslategray;
  background-position: 30% 70%;
  background-size: cover;
  /* margin: 10% auto 30px; */
  box-sizing: border-box;
`;

const BackButtonBox= styled.div`
   width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid lightslategray;
  background-position: 30% 70%;
  background-size: cover;
  /* margin: 10% auto 30px; */
  box-sizing: border-box;
`;




export default Detail