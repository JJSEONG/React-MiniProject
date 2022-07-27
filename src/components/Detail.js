import React, { useRef } from 'react'
import styled from 'styled-components'
import Header from './elements/Header'
import { useParams,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { updatePost } from '../redux/modules/selecthing'
import { useDispatch } from 'react-redux'

const Detail = () => {

  const params = useParams();
  // console.log(params.nickname)
  const dispatch = useDispatch();

  const post_detail = useSelector((state) => state.selecthing.post)
  // console.log(post_detail)

  const include = post_detail.find((post) => {
    if(post.nickname === params.nickname) return post
  })
  // console.log(include);

  const navigate = useNavigate();

  const [selected, setSelected] = React.useState("");
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  // console.log(selected);

  const com_ref = React.useRef(null);

  const agreecount_ref = React.useRef(include.agreeCount)
  const disagreecount_ref = React.useRef(include.disagreeCount)
  const agree_ref = React.useRef(include.agree)
  const disagree_ref = React.useRef(include.disagree)
  
  const [ checked, setChecked ] = React.useState("");

  const post_agree = {
    agreeCount: agreecount_ref.current,
    disagreeCount: disagreecount_ref.current,
    agree: agree_ref.current,
    disagree: disagree_ref.current,
  }
  
  const agree_btn = () => {
    if(disagree_ref.current === true) {
      window.alert(
        "이미 반대를 클릭하셨습니다.\n반대 클릭 해제 후 다시 시도해주세요."
        )
      return;
    }
    if(agree_ref.current === false) {
      agreecount_ref.current = agreecount_ref.current + 1
      agree_ref.current = true
      disagree_ref.current = false

      setChecked("checked")

      window.alert("[찬성] 역시 그럴줄 알았어요 !")

      post_agree.agreeCount = agreecount_ref.current;
      post_agree.agree = agree_ref.current;
      post_agree.disagree = disagree_ref.current;

      console.log(post_agree)
      dispatch(updatePost(post_agree, params.nickname))
    } else {
      agreecount_ref.current = agreecount_ref.current - 1
      agree_ref.current = false
      disagree_ref.current = false

      setChecked("un-checked")

      window.alert("[찬성 취소] 마음이 바뀌셨나요 ?")

      post_agree.agreeCount = agreecount_ref.current;
      post_agree.agree = agree_ref.current;
      post_agree.disagree = disagree_ref.current;

      dispatch(updatePost(post_agree, params.nickname))
    }
  }

  const disagree_btn = () => {
    if(agree_ref.current === true) {
      window.alert("이미 찬성을 클릭하셨습니다.\n찬성 클릭 해제 후 다시 시도해주세요.")
      return;
    }
    if(disagree_ref.current === false) {
      disagreecount_ref.current = disagreecount_ref.current + 1
      agree_ref.current = false
      disagree_ref.current = true
      setChecked("checked")

      window.alert("[반대] 내가 정녕 싫으시오 ?")

      post_agree.disagreeCount = disagreecount_ref.current;
      post_agree.agree = agree_ref.current;
      post_agree.disagree = disagree_ref.current;

      dispatch(updatePost(post_agree, params.nickname))
    } else {
      disagreecount_ref.current = disagreecount_ref.current - 1
      agree_ref.current = false
      disagree_ref.current = false
      setChecked("un-checked")

      window.alert("[반대 취소] 역시 그럴줄 알았소 !")

      post_agree.disagreeCount = disagreecount_ref.current;
      post_agree.agree = agree_ref.current;
      post_agree.disagree = disagree_ref.current;

      dispatch(updatePost(post_agree, params.nickname))
    }
  }

  // console.log("포스트어그리",post_agree)

  return (
    <div>
      <Header />
      <MainWrap>
        <SubTitle>
          { include.title  }
        </SubTitle>
        <WriteInfo>
          <div>작성일: { include.date }</div>
          <div>작성자: { include.nickname } (MBTI: { include.mbti })</div>
        </WriteInfo>
        <PreView>
          <img src={ include.images } alt="" />
        </PreView>
        <Desc>
          <div>{ include.contents }</div>
        </Desc>

        <BtnWrap>
          <AgreeButton onClick={agree_btn}>
            <p style={{fontSize: "17px"}} >
              찬성 { agreecount_ref.current } 표
            </p>
          </AgreeButton>
          
          <OppositionButton onClick={disagree_btn}>
            <p style={{fontSize: "17px"}}>
              반대 { disagreecount_ref.current } 표
            </p>
          </OppositionButton>
          
        </BtnWrap>

        <DescReply>
            <ReplyWriteBox>
              {/* <div>댓글</div> */}
              <SelectBtn defaultValue="default" id="mbti" name="mbti" onChange={handleSelect}>
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
              <ReplyInputBox type="text" placeholder='댓글을 입력하세요.' ref = { com_ref } />
              <ReplyBtn>작성</ReplyBtn>
            </ReplyWriteBox>
            <ReplyBox>
              {
                include.comment.map((v, i) => {
                    return (  
                      <CommentWrap key = { i }>
                        <div><span>{ v.mbti }</span> { v.nickname }</div>
                        <div> → { v.comment }</div>
                      </CommentWrap>
                    )
                  })
                }
            </ReplyBox>
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
  text-align: center;
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
  height: 100%;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
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

const CommentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 6px 0;
  font-size: 14px;
  div:nth-of-type(1) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  span {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1ABC9C;
    padding: 2px 4px;
    border-radius: 4px;
    color: white;
    margin-right: 6px;
  }
  div:nth-of-type(2) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 4px;
    margin-left: 10px;
    text-align: left;
  }
`

export default Detail