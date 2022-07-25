import React from 'react'
import styled from 'styled-components'
import Header from './elements/Header'
import { useParams,useNavigate } from 'react-router-dom'
import Logo from '../깻잎논쟁.png'

const Detail = () => {

  const params = useParams();

  console.log(params.title)

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <MainWrap>
        <SubTitle>
          요즘 HOT한 깻잎논쟁
        </SubTitle>
        <WriteInfo>
          <div>작성일: 22.07.22</div>
          <div>작성자: NICKNAME(MBTI: CUTE)</div>
        </WriteInfo>
        <PreView>
          <img src={Logo} alt="" />
        </PreView>
        <Desc>
          <div>내 절친의 깻잎을 떼어주는 나의 애인, 어떻게 생각하시나요?</div>
        </Desc>

        <BtnWrap>
          <AgreeButton onClick={() => {
            window.alert("[찬성] 역시 그럴줄 알았어요 !")
          }}>찬성
            <p style={{fontSize: "17px"}} >0</p>
          </AgreeButton>
          
          <OppositionButton onClick={() => {
            window.alert("[반대] 정녕 내가 싫으시오 ?")
          }}>반대
            <p style={{fontSize: "17px"}}>2</p>
          </OppositionButton>
          
        </BtnWrap>

        <DescReply>
            <ReplyWriteBox>
              {/* <div>댓글</div> */}
              <SelectBtn defaultValue="default" id="mbti" name="mbti">
                <option value="default" disabled>MBTI</option>
                <option value="ISTJ">ISTJ </option>
                <option value="ISFJ">ISFJ</option>
                <option value="INFJ">INFJ </option>
                <option value="INTJ">INTJ </option>
                <option value="ISTP">ISTP </option>
                <option value="ISFP">ISFP</option>
                <option value="INFP">INFP </option>
                <option value="INTP">INTP </option>
                <option value="ESTP">ESTP</option>
                <option value="ESFP">ESFP </option>
                <option value="ENFP">ENFP </option>
                <option value="ENTP">ENTP </option>
                <option value="ESTJ">ESTJ</option>
                <option value="ESFJ">ESFJ </option>
                <option value="ENFJ">ENFJ </option>
                <option value="ENTJ">ENTJ </option>
              </SelectBtn>
            <ReplyInputBox type="text" placeholder='댓글을 입력하세요.'></ReplyInputBox>
            <ReplyBtn>작성</ReplyBtn>

            </ReplyWriteBox>
            <ReplyBox><div>닉네임, 댓글</div></ReplyBox>
          </DescReply>

        
          <BackButton type="submit" onClick={() => {
            navigate("/")
          }}>뒤로가기</BackButton>
        
      </MainWrap>
    </div>
  )
}

const MainWrap = styled.div`
  width: 35%;
  height: 100%;
  margin: 0 auto;
`

const SubTitle = styled.h2`
  margin: 120px auto 30px;  
  font-size: 28px;
  /* font-style: italic; */
  color: white;
  text-shadow:
    2px 0 2px #5D9D8B,
    6px 0 4px #5D9D8B;
  box-sizing: border-box;
  transition: 0.6s;
`

const WriteInfo =styled.h3`
  font-size: 12px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  /* float: right; */
  div {
    margin: 0 2px;
  }
`;


const PreView = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  border-radius: 8px 8px 0 0;
  border: 5px solid #1ABC9C;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Desc = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
  border: 5px solid #1ABC9C;
  border-top: none;
  border-radius: 0 0 8px 8px;
  background-color: rgba(199, 252, 236, 0.2);
`

const DescReply = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 25px;
  box-sizing: border-box;
  border: 2px solid #1ABC9C;
  border-radius: 8px;
`

const ReplyWriteBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  padding: 6px;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 2px solid #1ABC9C;
  
`

const SelectBtn = styled.select`
  width: 20%;
  height: 90%;
  background-color: #C7FCEC;
  border: 2px solid #1ABC9C;
  border-radius: 8px;
  margin: auto 3px;
  padding: 5px;
  box-sizing: border-box;
  outline: none;
  text-align: center;
  option[value="default"] {
    display: none;
  }
`

const ReplyInputBox = styled.input`
    width: 60%;
    height: 80%;
    /* background-color: #1ABC9C; */
    color: black;
    border: none; 
    border-bottom: 1.5px solid #1ABC9C;
    margin-left: 3px;
    padding: 0 6px; 
    box-sizing: border-box;
    outline: none;
`;

const ReplyBtn = styled.button`
    width:15%;
    border-radius: 8px;
    height: 90%;
    background-color: #1ABC9C;
    color: white;
    border: 1.5px solid #1ABC9C;
    margin:auto 1px;
    cursor: pointer;
`;

const ReplyBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  /* border: 2px solid black; */
`

const BtnWrap = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0 10px;
  button {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 0;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
  }
  p{
    margin: 5px auto 0; 
  }
`

const AgreeButton =styled.button`

    padding-top:15px;
    background-color: #1ABC9C;
    border: 2px solid #1ABC9C;
    color: white;
    &:hover{
    background-color: transparent;
    color: #1ABC9C;
    }
`;

const OppositionButton =styled.button`
padding-top:15px;
background-color: gray;
    border: 2px solid gray;
    color: white;
    &:hover{
    background-color: transparent;
    color: gray;
    }
`;

const BackButton = styled.button`
    width:100%;
    border-radius: 8px;
    height: 40px;
    margin-bottom: 50px;
    background-color: transparent;
    color: #1ABC9C;
    border: 2px solid #1ABC9C;
    cursor: pointer;
    &:hover{
      background-color: #1ABC9C;
    color: white;
    border: 2px solid #1ABC9C;
    }
`;



export default Detail