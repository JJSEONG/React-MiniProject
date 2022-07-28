import React from 'react'
import styled from 'styled-components'
import Header from './elements/Header'
import { storage } from '../shared/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

const AddPost = () => {
  
  const navigate = useNavigate();

  const file_link_ref = React.useRef(null);
  
  const temp_img = "https://iconbjjbelfast.com/wp-content/uploads/2017/04/default-image.jpg"
  const [ files, setFiles ] = React.useState(temp_img);
  const [ filestxt, setFilesTxt ] = React.useState("");

  // console.log(files)

  const saveFileImage = async (e) => {
    const uploaded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );

    const file_url = await getDownloadURL(uploaded_file.ref)

    file_link_ref.current = { url: file_url };

    const file = e.target.files

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]); // 내가 올릴 img
    reader.onload = () => {
      setFiles(file_url);
      setFilesTxt(file[0].name)
    };
  }

  const mbti_ref = React.useRef(null);
  const title_ref = React.useRef(null);
  const desc_ref = React.useRef(null);

  const newPost = async (e) => {

    if(filestxt === "") {
      window.alert("사진을 선택해주세요.")
      return;
    } else if(mbti_ref.current.value === "default") {
      window.alert("MBTI를 선택해주세요.")
      return;
    } else if(title_ref.current.value === "") {
      window.alert("주제를 입력해주세요.")
      return;
    } else if(desc_ref.current.value === "") {
      window.alert("내용을 입력해주세요.")
      return;
    } else {
      const Token = sessionStorage.getItem("token")
      const res = await axios.post("http://lightromance.shop/newBoards",
        {
          title: title_ref.current.value,
          image: files,
          content: desc_ref.current.value,
          mbti: mbti_ref.current.value,
        }, {
          headers: {
            "Authorization": Token
          }
        });

      e.preventDefault();
      window.alert("게시글 작성에 성공하셨습니다.")
      navigate("/selecthing")
    }
  }

  return (
    <div>
      <Header />
      <MainWrap>
        <SubTitle>UPLOAD</SubTitle>
        <PreView>
          <img src={files} alt="" />
        </PreView>
        <Filewrap>
          <FileInput type="text" placeholder="사진을 등록해주세요." value = { filestxt } readOnly /> 
          <FileBtn>
            <Label htmlFor="file">파일 찾기</Label>
          </FileBtn>
          <input type="file" id="file" onChange={saveFileImage} style={{display: "none"}} />
        </Filewrap>
        <MbtiWrap>
          <form style={{ display:"flex", justifyContent:"space-between", alignItems:"center", width: "100%", height: "34px", margin: "0 auto" }}>
            <SelectLabel htmlFor="mbti">MBTI</SelectLabel>
            <SelectBtn defaultValue="default" id="mbti" name="mbti" ref={mbti_ref}>
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
            <input type="text" id="topic" ref={title_ref} placeholder='주제를 입력해주세요.' />
          </Topic>
          <Desc>
            <textarea id="desc" cols="30" rows="10" ref={desc_ref} placeholder='주제에 대한 내용을 입력해주세요.'></textarea>
          </Desc>
        </DescWrap>
        <BtnWrap>
          <button type="submit" onClick={() => {
            window.alert("메인으로 돌아갑니다.")
            navigate("/selecthing")
          }}>취소하기</button>
          <button type="submit" onClick={newPost}>업로드 하기</button>
        </BtnWrap>
      </MainWrap>
    </div>
  )
}

const MainWrap = styled.div`
  width: 35%;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 320px) {
    width: 95%;
  }
  @media (min-width: 321px) and (max-width: 768px) {
    width: 80%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 70%;
  }
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
  overflow: hidden;
  background-color: #c3c3c3;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 320px) {
    height: 200px;
  }
  @media (min-width: 321px) and (max-width: 768px) {
    height: 260px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 320px;
  }
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
  @media (max-width: 320px) {
    font-size: 10px;
  }
  @media (min-width: 321px) and (max-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
  }
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
  @media (max-width: 320px) {
    font-size: 10px;
  }
  @media (min-width: 321px) and (max-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
  }
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
  @media (max-width: 320px) {
    font-size: 10px;
  }
  @media (min-width: 321px) and (max-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
  }
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
  @media (max-width: 320px) {
    font-size: 10px;
  }
  @media (min-width: 321px) and (max-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
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
  @media (max-width: 320px) {
    font-size: 10px;
    input {
      font-size: 10px;
    }
  }
  @media (min-width: 321px) and (max-width: 768px) {
    font-size: 12px;
    input {
      font-size: 12px;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
    input {
      font-size: 16px;
    }
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
  @media (max-width: 320px) {
    font-size: 10px;
    textarea {
      font-size: 10px;
    }
  }
  @media (min-width: 321px) and (max-width: 768px) {
    font-size: 12px;
    textarea {
      font-size: 12px;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
    textarea {
      font-size: 16px;
    }
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