import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons' 

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
        }}>
        <FontAwesomeIcon icon={faDoorOpen} />
        <span>LOGOUT</span>
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
  @media (max-width: 320px) {
    justify-content: flex-start;
  }
  @media (min-width: 321px) and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: #edfdf8;
  font-size: 38px;
  font-style: italic;
  text-shadow: 2px 0 2px #2f4858, 4px 0 5px #0c7586, 6px 0 8px #2f4858;
  font-family: "Russo One", sans-serif;
  cursor: pointer;
  @media (max-width: 320px) {
    margin-left: 20px;
    font-size: 26px;
  }
  @media (min-width: 321px) and (max-width: 768px) {
    margin-left: 20px;
    font-size: 30px;
  }
`;

const LogoutBtn = styled.button`
  position: absolute;
  top: calc(50% - 20px);
  right: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border: 2px solid white;
  background-color: #1abc9c;
  color: white;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  span {
    margin-left: 6px;
    font-size: 11px;
  }
  &:hover {
    background-color: white;
    color: #1abc9c;
    box-shadow: 0 0 20px #0c7586;
  }
  @media (max-width: 320px) {
    right: 10px;
    width: 50px;
    height: 40px;
    span {
      display: none;
    }
  }
  @media (min-width: 321px) and (max-width: 768px) {
    right: 10px;
    width: 50px;
    height: 40px;
    span {
      display: none;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    span {
      font-size: 9px;
    }
  }
`;

export default Header;
