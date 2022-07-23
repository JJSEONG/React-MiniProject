import React from 'react'
import styled from 'styled-components'
import Header from './elements/Header'

import { useNavigate } from 'react-router-dom'

const AddPost = () => {
  
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <MainWrap>
        <SubTitle>UPLOAD</SubTitle>
        <PreView></PreView>
        <Filewrap>
          <FileInput type="text" placeholder="사진을 등록해주세요." readOnly /> 
          <FileBtn>
            <Label htmlFor="file">파일 찾기</Label>
          </FileBtn>
          <input type="file" id="file" style={{display: "none"}} />
        </Filewrap>
        <MbtiWrap>
          <form style={{ display:"flex", justifyContent:"space-between", alignItems:"center", width: "100%", height: "34px", margin: "0 auto" }}>
            <SelectLabel htmlFor="mbti">MBTI</SelectLabel>
            <SelectBtn defaultValue="default" id="mbti" name="mbti">
              <option value="default" disabled>MBTI를 선택하세요</option>
              <option value="ISTJ">ISTJ [세상의 소금형]</option>
              <option value="ISFJ">ISFJ [임금 뒷편의 권력형]</option>
              <option value="INFJ">INFJ [예언자형]</option>
              <option value="INTJ">INTJ [과학자형]</option>
              <option value="ISTP">ISTP [백과사전형]</option>
              <option value="ISFP">ISFP [성인군자형]</option>
              <option value="INFP">INFP [잔다르크형]</option>
              <option value="INTP">INTP [아이디어 뱅크형]</option>
              <option value="ESTP">ESTP [수완좋은 활동가형]</option>
              <option value="ESFP">ESFP [사교적인 유형]</option>
              <option value="ENFP">ENFP [스파크형]</option>
              <option value="ENTP">ENTP [발명가형]</option>
              <option value="ESTJ">ESTJ [사업가형]</option>
              <option value="ESFJ">ESFJ [친선도모형]</option>
              <option value="ENFJ">ENFJ [언변능숙형]</option>
              <option value="ENTJ">ENTJ [지도자형]</option>
            </SelectBtn>
          </form>
        </MbtiWrap>
        <DescWrap>
          <Topic>
            <label htmlFor="topic">주제</label>
            <input type="text" id="topic" placeholder='주제를 입력해주세요.' />
          </Topic>
          <Desc>
            <textarea id="desc" cols="30" rows="10" placeholder='주제에 대한 내용을 입력해주세요.'></textarea>
          </Desc>
        </DescWrap>
        <BtnWrap>
          <button type="submit" onClick={() => {
            window.alert("메인으로 돌아갑니다.")
            navigate("/")
          }}>취소하기</button>
          <button type="submit" onClick={() => {
            window.alert("게시글 작성에 성공하셨습니다.")
            navigate("/")
          }}>업로드 하기</button>
        </BtnWrap>
      </MainWrap>
    </div>
  )
}

const MainWrap = styled.div`
  width: 30%;
  height: 100%;
  margin: 0 auto;
`

const SubTitle = styled.h2`
  margin: 120px auto 30px;
  font-family: 'Russo One',sans-serif;
  font-size: 28px;
  font-style: italic;
  color: #E9FEF7;
  text-shadow:
    2px 0 4px #1ABC9C,
    6px 0 4px #5D9D8B;
`

const PreView = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  border-radius: 8px;
  border: 5px solid #1ABC9C;
  box-sizing: border-box;
`
const Filewrap = styled.div`
  width: 100%;
  height: 34px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FileInput = styled.input`
  flex-basis: 80%;
  width: 100%;
  height: 100%; 
  border: 2px solid #1ABC9C;
  border-radius: 6px;
  outline: none;
  text-align: left;
  padding: 4px 20px;
  box-sizing: border-box;
`

const FileBtn = styled.button`
  flex-basis: 20%;
  width: 100%;
  height: 100%;
  margin-left: 6px;
  padding: 0;
  border: none;
  border-radius: 6px; 
  background-color: #1ABC9C;
`

const Label = styled.label`
  width: 100%;
  height: 100%;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MbtiWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SelectLabel = styled.label`
  width: 25%;
  height: 100%;
  display: flex;
  justify-Content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px 0 0 8px;
  background-color: #1ABC9C;
  color: white;
`

const SelectBtn = styled.select`
  width: 75%;
  height: 100%;
  border: 2px solid #1ABC9C;
  border-radius: 0 8px 8px 0;
  padding: 5px;
  box-sizing: border-box;
  outline: none;
  text-align: center;
  option[value="default"] {
    display: none;
  }
`

const DescWrap = styled.div`
  width: 100%;
  height: 100%;
`

const Topic = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  label {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1ABC9C;
    border-radius: 8px 0 0 8px;
    color: white;
  }
  input {
    width: 75%;
    height: 100%;
    box-sizing: border-box;
    border: 2px solid #1ABC9C;
    border-radius: 0 8px 8px 0;
    padding: 4px 20px;
    outline: none;
  }
`

const Desc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  textarea {
    width: 100%;
    height: 200px;
    margin: 0 auto 20px;
    box-sizing: border-box;
    border: 2px solid #1ABC9C;
    border-radius: 8px;
    padding: 20px;
    outline: none;
  }
`

const BtnWrap = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 50px;
  button {
    width: 48%;
    height: 100%;
    background-color: transparent;
    border: 2px solid #1ABC9C;
    color: #1ABC9C;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
  }
  button:first-child {
    border: 2px solid gray;
    color: gray;
  }
  button:first-child:hover {
    background-color: gray;
    color: white;
  }
  button:last-child:hover {
    background-color: #1ABC9C;
    color: white;
  }
`

export default AddPost