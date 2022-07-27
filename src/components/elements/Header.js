import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { reload } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrap>
      <Title
        onClick={() => {
          navigate("/selecthing");
        }}
      >
        Selecthing
      </Title>
      <LogoutBtn
        onClick={() => {
          sessionStorage.removeItem("token");

          window.alert("로그아웃 하셨습니다. 로그인 화면으로 돌아갑니다.");
          navigate("/");
        }}
      >
        LOGOUT
      </LogoutBtn>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #1abc9c;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px #0c7586;
`;

const Title = styled.h1`
  margin: 0;
  color: #edfdf8;
  font-size: 38px;
  font-style: italic;
  text-shadow: 2px 0 2px #2f4858, 4px 0 5px #0c7586, 6px 0 8px #2f4858;
  font-family: "Russo One", sans-serif;
  cursor: pointer;
`;

const LogoutBtn = styled.button`
  position: absolute;
  top: calc(50% - 20px);
  right: 100px;
  width: 100px;
  height: 40px;
  border: 2px solid white;
  background-color: #1abc9c;
  color: white;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: #1abc9c;
    box-shadow: 0 0 20px #0c7586;
  }
`;

export default Header;
