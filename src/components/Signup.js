import React from 'react'
import styled from "styled-components";
import {useNavigate}  from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

  return (
    <div>
      <Wrap>
        {/* <Box> */}
        <LoginWrap>
          <Title>Selecthing</Title>
          <WriteBox>
            <Subject>닉네임</Subject> 
            <Id type="text" placeholder="닉네임을 입력해주세요" /> 
          </WriteBox>
          <WriteBox>
            <Subject>아이디</Subject> 
            <Id type="text" placeholder="닉네임을 입력해주세요" /> 
          </WriteBox>
          <WriteBox>
            <Subject>비밀번호</Subject> 
            <Id type="text" placeholder="닉네임을 입력해주세요" /> 
          </WriteBox>
          <WriteBox>
            <Subject>비밀번호 재확인</Subject> 
            <Id type="text" placeholder="닉네임을 입력해주세요" /> 
          </WriteBox>
          {/* <WriteBox>아이디 <br/> <Id type="password" placeholder="아이디를 입력해주세요" /></WriteBox>
          <WriteBox>비밀번호<br/> <Id type="password" placeholder="비밀번호를 입력해주세요" /> </WriteBox>
          <WriteBox>비밀번호 재확인<br/><Id type="password" placeholder="비밀번호 재확인" /> </WriteBox> */}
          
          <button onClick={() => {navigate("/Login");}}>뒤로가기</button>
          <button>회원가입</button>
        </LoginWrap>

        {/* </Box> */}
      </Wrap>
    </div>
  )
}


const Wrap = styled.div`
  background-color: rgb(26, 188, 156);
  width: 100%;
  height: 100vh;
  display: flex;
`;

const LoginWrap = styled.div`
  width: 60%;
  height: 80%;
  margin: auto;
  /* border : 1.5px solid lightslategray; */
  border-radius: 3px;
  padding-top: 20px;
  padding-bottom: 5%;
  /* background-color: whitesmoke; */
`;

const Title = styled.h1`
  margin: 0;
  color: #EDFDF8;
  font-size: 38px;
  font-style: italic;
  text-shadow:
    2px 0 2px #2F4858,
    4px 0 5px #0C7586,
    6px 0 8px #2F4858;
`;

const WriteBox =styled.div`
    

`;

const Subject=styled.h3`
    margin: 0;
`;

const Id = styled.input`
  height: 30px;
  width: 60%;
  padding: 5px 5px;
  border-radius: 5px;
  border-bottom: 2px solid rgb(219, 232, 216);
  border: 1.5px solid lightslategray;
  font-size: 12px;
  font-weight: 500;
  margin-top: 0;
`;


export default Signup