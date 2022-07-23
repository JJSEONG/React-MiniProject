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
          <br />
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
            <Id type="text" placeholder="비밀번호를 입력해주세요" />
            </InputWrap>
          </WriteBox>

          <WriteBox>
            <Subject>비밀번호 재확인</Subject>
            <InputWrap>
            <Id type="text" placeholder="비밀번호 재확인" />
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
`;

const LoginWrap = styled.div`
  width: 40%;
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
  color: #edfdf8;
  font-size: 42px;
  font-style: italic;
  text-shadow: 2px 0 2px #2f4858, 4px 0 5px #0c7586, 6px 0 8px #2f4858;
  font-family: "Russo One", sans-serif;
`;

const WriteBox = styled.div``;



const Subject = styled.h3`
  margin: 15px 0 3px 0 ;
  font-size: 12px;
  /* width: 40%; */
  display: flex;
  padding-left: 18%;
  color: white;
  text-shadow: 1px 0 1px #2f4858, 3px 0 4px #0c7586, 2px 0 2px #2f4858;
`;

const InputWrap = styled.div` 
  height: 43px;
  width: 65%;
  margin : 0 auto;
  position: relative;
`;

const Id = styled.input`
  width :100%;
  height: 100%;
  padding: 5px 5px;
  border-radius: 5px;
  border-bottom: 2px solid rgb(219, 232, 216);
  border: 1.5px solid lightslategray;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 15px;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0 0 7px #0C7586;
  }
 
`;

const Button = styled.button`
  width:70px;
  height: 26px;
  position: absolute;
  right: 10px;
  top:calc(50% - 13px);
  cursor: pointer;

`;

const Back = styled.button`
  width: 48%;
  height: 34px;
  border: 2px solid lightslategray;
  background-color: white;
 
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  /* position: absolute; */
  /* top: calc(50% - 17px); */
  /* right: 100px; */
  /* transition: .3s; */
  /* &:hover {
    background-color: white;
    color: #1ABC9C;
    box-shadow: 0 0 20px #0C7586; */
`;

const ButtonBox = styled.div`
  width : 65%;
  height : 26px;
  margin: 10px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Signup;
