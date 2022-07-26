import React from "react";
import { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useCookies } from 'react-cookie';
import axios from "axios";

const Login = (props) => {


    let [loginId, setLoginId] = useState("");
    let [loginPassword, setLoginPassword] = useState("");
    let [savedLoginId, setSavedLoginId] = useState("");
    let [savedLoginPassword, setSavedLoginPassword] = useState("");
    let tokenId = useRef(null);
    let [savedTokenId, setSavedTokenId] = useState("");


    let sessionStorage = window.sessionStorage;

  const username = React.useRef(null);
  const password = React.useRef(null);

  const axiosLogin=async() =>{
    const res = await axios.post("http://lightromance.shop/user/login",{
      username : username.current.value,
      password : password.current.value
      
    });
    tokenId.current =res.data;
    console.log(res);
    console.log(res.data);
    console.log(tokenId.current);
    window.alert(res.data.answer);
  }

  

  const navigate = useNavigate(); 
  
  // onChange={ (e)=>{
  //   setLoginId(e.res.data) }}


  return (
    
    <div>
      <Wrap>
        {/* <Box> */}
        <LoginWrap>
          <Title>Selecthing</Title>
          <br/>
          <WriteBox>
            <Id type="text" placeholder="ID를 입력해주세요" ref={username} onChange={ (e)=>{
                    setLoginId(e.target.value) }} />
          </WriteBox>
          <WriteBox>
            <Id type="password" placeholder="PW를 입력해주세요" ref={password} onChange={ (e)=>{
                    setLoginPassword(e.target.value)
                } }/>
                
          </WriteBox>
          <WriteBox>
            <TextOne>아직 회원이 아니신가요?</TextOne>
            <Text
              onClick={() => {
                navigate("/user/signup");
              }}
            >
              회원가입
            </Text>
          </WriteBox>
          <WriteBox>
          
          
          <Back  onClick={ ()=>{ 
                    axiosLogin();
                    
                    sessionStorage.setItem("loginId", loginId);
                    sessionStorage.setItem("loginPassword", loginPassword);
                    sessionStorage.setItem("tokenId", tokenId.current);

                    setSavedLoginId(sessionStorage.getItem("loginId"));
                    setSavedLoginPassword(sessionStorage.getItem("loginPassword"));
                    setSavedTokenId(sessionStorage.getItem("tokenId"));

                    
                } }>로그인</Back>
          <button onClick={ ()=>{
                    sessionStorage.removeItem("loginId");
                    sessionStorage.removeItem("loginPassword");
                    sessionStorage.removeItem("tokenId");
                    setSavedLoginId(sessionStorage.getItem("loginId"));
                } }>로그아웃</button>
          {/* <p>{props.text}</p> */}

          <div>
                sessionStorage에 저장된 loginId는 {savedLoginId} 이고 loginPassword는 {savedLoginPassword} tokenId는 {savedTokenId} 이다. 
            </div>
            <div>
                { JSON.stringify(sessionStorage) }
            </div>
          

          </WriteBox>
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
  width: 60%;
  height: 60%;
  margin: auto;
  border-radius: 3px;
  padding-top: 20px;
  padding-bottom: 5%;
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

const Id = styled.input`
  height: 45px;
  width: 40%;
  margin-bottom: 15px;
  padding: 5px 20px ;
  border-radius: 5px;
  border-bottom: 2px solid rgb(219, 232, 216);
  border: 1.5px solid lightslategray;
  font-size: 12px;
  font-weight: 500;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0 0 7px #0C7586;
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
  &:hover {
    text-shadow: 2px 0 2px #2f4858;
  }
  cursor: pointer;
  /* cursor: pointer; */
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
