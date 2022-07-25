import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
            <InputWrap>
              <Id type="text" placeholder="닉네임을 입력해주세요" maxLength={12}/>
              <Button>중복확인</Button>
            </InputWrap>
          </WriteBox>
          
          <WriteBox>
            <Subject>아이디</Subject>
            <InputWrap>
            <Id type="text" placeholder="아이디를 입력해주세요"  maxLength={12}/>
            <Button>중복확인</Button>
            </InputWrap>
          </WriteBox>

          <WriteBox>
            <Subject>비밀번호</Subject>
            <InputWrap>
            <Pw type="password" placeholder="비밀번호를 입력해주세요" maxLength={16} />
            </InputWrap>
          </WriteBox>

          <WriteBox>
            <Subject>비밀번호 재확인</Subject>
            <InputWrap>
            <Pw type="password" placeholder="비밀번호 재확인" maxLength={16} />
            </InputWrap>
          </WriteBox>
          <br/>

          <ButtonBox>
            <Back
              onClick={() => {
                navigate("/Login");
              }}
            >
              뒤로가기
            </Back>
            <Back>회원가입</Back>
          </ButtonBox>

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
  padding-top: 10%;
  box-sizing: border-box;
`;

const LoginWrap = styled.div`
  width: 32%;
  height: 80%;
  margin: auto;
  /* border : 1.5px solid lightslategray; */
  border-radius: 3px;
  padding-top: 20px;
  padding-bottom: 5%;
  /* background-color: whitesmoke; */
  @media (max-width: 320px) {
    width: 80%;
  }
  @media (min-width: 321px) and (max-width: 768px) {
    width: 60%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 40%;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: #edfdf8;
  font-size: 42px;
  font-style: italic;
  text-shadow: 
    2px 0 2px #2f4858,
    4px 0 5px #0c7586,
    6px 0 8px #2f4858;
  font-family: "Russo One", sans-serif;
  @media (max-width: 320px) {
    font-size: 26px;
  }
  @media (min-width: 321px) and (max-width: 768px) {
    font-size: 30px;
  }
`;

const WriteBox = styled.div`
  width: 100%;
`;

const Subject = styled.h3`
  width: 100%;
  margin: 15px 0 3px 0 ;
  font-size: 16px;
  /* width: 40%; */
  display: flex;
  padding-left: 10px;
  color: white;
  text-shadow: 1px 0 1px #2f4858, 3px 0 4px #0c7586, 2px 0 2px #2f4858;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const InputWrap = styled.div` 
  height: 40px;
  width: 100%;
  margin : 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Id = styled.input`
  width :100%;
  height: 100%;
  padding: 5px 10px;
  border-radius: 5px 0 0 5px;
  border-bottom: 2px solid rgb(219, 232, 216);
  border: none;
  font-size: 12px;
  font-weight: 500;
  outline: none;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0 0 7px #0C7586;
  }
`;

const Pw = styled.input`
  width :100%;
  height: 100%;
  padding: 5px 10px;
  border-radius: 5px 5px;
  border-bottom: 2px solid rgb(219, 232, 216);
  border: none;
  font-size: 12px;
  font-weight: 500;
  outline: none;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0 0 7px #0C7586;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 100%;
  border: none;
  border-radius: 0 5px 5px 0;
  box-sizing: border-box;
  background-color: #C7FCEC;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const Back = styled.button`
  width: 44%;
  height: 100%;
  border: 2px solid #98B0A9;
  background-color: white;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  &:first-child {
    background-color: #98B0A9;
    color: #000;
  }
  &:last-child {
    background-color: #9BDF8F;
    border: 2px solid #9BDF8F;
    color: #000;  
  }
  &:first-child:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  }
  &:last-child:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 320px) {
    width: 46%;
    font-size: 12px;
  }
`;

const ButtonBox = styled.div`
  width : 100%;
  height : 34px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export default Signup;
