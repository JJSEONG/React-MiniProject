import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  let sessionStorage = window.sessionStorage;

  const username = React.useRef(null);
  const password = React.useRef(null);

  const axiosLogin = async () => {
    try {
      const res = await axios.post("http://lightromance.shop/login", {
        username: username.current.value,
        password: password.current.value,
      });
      // console.log(res.headers.authorization)
      if (res.status === 200 && res.headers.authorization) {
        sessionStorage.setItem("token", res.headers.authorization);
        window.alert(`${username.current.value}님💚 \n로그인 하셨습니다.`);
        navigate("/selecthing");
      } else {
        window.alert("ID와 PW를 다시 한번 확인해주세요.");
      }
    } catch (error) {
      // console.log(error);
      window.alert("ID와 PW를 다시 한번 확인해주세요.");
      window.location.reload();
      // window.alert("아이디, 비밀번호를 확인해주세요!");
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <Wrap>
        <LoginWrap>
          <Title>Selecthing</Title>
          <WriteBox>
            <Id type="text" placeholder="ID를 입력해주세요" ref={username} />
          </WriteBox>
          <WriteBox>
            <Id type="password" placeholder="PW를 입력해주세요" ref={password} />
          </WriteBox>
          <WriteBox>
            <TextOne>아직 회원이 아니신가요? </TextOne>
            <Text onClick={() => { navigate("/signup"); }}>
              회원가입
            </Text>
          </WriteBox>
          <WriteBox>
            <Back onClick={() => { axiosLogin(); }}>
              로그인
            </Back>
          </WriteBox>
        </LoginWrap>
      </Wrap>
    </div>
  );
};

const Wrap = styled.div`
  background-color: rgb(26, 188, 156);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
  box-sizing: border-box;
`;

const LoginWrap = styled.div`
  width: 30%;
  height: 60%;
  margin: 0 auto;
  border-radius: 3px;
  padding-top: 20px;
  padding-bottom: 5%;
  @media (max-width: 320px) {
    width: 90%;
  }
  @media (min-width: 321px) and (max-width: 768px) {
    width: 65%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 40%;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: #edfdf8;
  margin-bottom: 20px;
  font-size: 42px;
  font-style: italic;
  text-shadow: 2px 0 2px #2f4858, 4px 0 5px #0c7586, 6px 0 8px #2f4858;
  font-family: "Russo One", sans-serif;
  @media (max-width: 320px) {
    font-size: 26px;
  }
  @media (min-width: 321px) and (max-width: 768px) {
    font-size: 30px;
  }
`;

const WriteBox = styled.div``;

const Id = styled.input`
  height: 45px;
  width: 100%;
  margin-bottom: 15px;
  padding: 5px 20px;
  border-radius: 5px;
  border-bottom: 2px solid rgb(219, 232, 216);
  border: 1.5px solid lightslategray;
  font-size: 12px;
  font-weight: 500;
  box-sizing: border-box;
  outline: none;
  &:hover {
    box-shadow: 0 0 7px #0c7586;
  }
`;

const TextOne = styled.h3`
  margin-top: 0;
  margin-bottom: 20px;
  color: white;
  font-size: 13px;
  display: inline;
`;

const Text = styled.h3`
  margin-top: 0;
  margin-bottom: 20px;
  color: white;
  font-size: 13px;
  display: inline;
  cursor: pointer;
  &:hover {
    text-shadow: 2px 0 2px #2f4858;
  }
`;

const Back = styled.button`
  width: 40%;
  height: 38px;
  border: 2px solid lightslategray;
  margin-top: 5px;
  background-color: white;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
`;

export default Login;
