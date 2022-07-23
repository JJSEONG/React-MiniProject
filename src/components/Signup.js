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
          <Title>Selecthing</Title><br />
          닉네임 <br/><Id type="text" placeholder="닉네임을 입력해주세요" /> <br />
          아이디 <br/> <Id type="password" placeholder="아이디를 입력해주세요" /> <br />
          비밀번호<br/> <Id type="password" placeholder="비밀번호를 입력해주세요" /> <br />
          비밀번호 재확인<br/><Id type="password" placeholder="비밀번호 재확인" /> <br />
          
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
  height: 60%;
  margin: auto;
  /* border : 1.5px solid lightslategray; */
  border-radius: 3px;
  padding-top: 20px;
  padding-bottom: 5%;
  /* background-color: whitesmoke; */
`;

const Title = styled.h1`
  margin: 0;
  color: white;
  font-size: 40px;
`;

const Id = styled.input`
  height: 30px;
  width: 60%;
  margin-bottom: 15px;
  padding: 5px 5px;
  border-radius: 5px;
  border-bottom: 2px solid rgb(219, 232, 216);
  border: 1.5px solid lightslategray;
  font-size: 12px;
  font-weight: 500;
`;

const Text = styled.h3`
  margin-top: 0;
  margin-bottom :5px;
  color: white;
  font-size: 15px;
`;

export default Signup