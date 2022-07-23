import React from "react";
import styled from "styled-components";
import {useNavigate}  from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

  return (
    <div>
      <Wrap>
        {/* <Box> */}
        <LoginWrap>
          <Title>Selecthing</Title>
          <br /> <Id type="text" placeholder="ID를 입력해주세요" /> <br />
          <Id type="password" placeholder="PW를 입력해주세요" /> <br />
          <Text>아직 회원이 아니신가요?</Text> <Text onClick={() => {navigate("/Login/Signup");}}>회원가입</Text>
          <br/><button>로그인</button>
        </LoginWrap>

        {/* </Box> */}
      </Wrap>
    </div>
  );
};

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
  color: #EDFDF8;
  font-size: 38px;
  font-style: italic;
  text-shadow:
    2px 0 2px #2F4858,
    4px 0 5px #0C7586,
    6px 0 8px #2F4858;
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
  margin-bottom :10px;
  color: white;
  font-size: 15px;
  display: inline;
  /* cursor: pointer; */
`;

export default Login;
