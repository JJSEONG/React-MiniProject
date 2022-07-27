// selecthing.js

import axios from "axios";

// Actions
const LOAD = "selecthing/LOAD";
const UPDATE = "selecthing/UPDATE"
const CREATE_POST = "selecthing/CREATE_POST"

const initialState = {
  post : [
    {
      username: "spa@dev.com",
      nickname: "스파게티",
      title: "요즘 HOT한 깻잎 논쟁",
      images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU",
      contents: "내 절친의 깻잎을 떼어주는 나의 애인, 어떻게 생각하시나요?",
      agreeCount: 4,
      disagreeCount: 8,
      agree: false,
      disagree: false,
      date: "22.07.21",
      mbti: "ESFP",
      comment : [
        {
          nickname: "프랑켄슈타인",
          mbti: "ESFP",
          comment: "찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?"
        },
        {
          nickname: "슈바인",
          mbti: "ESFJ",
          comment: "이걸?"
        },
        {
          nickname: "베컴",
          mbti: "ISFP",
          comment: "난 무조건 반대.."
        }
      ]
    },
    {
      username: "seong@dev.com",
      nickname: "정성스럽게",
      title: "요즘 HOT한 새우 논쟁",
      images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU  ",
      contents: "내 절친의 새우를 까서 주는 나의 애인, 어떻게 생각하시나요?",
      agreeCount: 2,
      disagreeCount: 6,
      agree: false,
      disagree: false,
      date: "22.07.23",
      mbti: "ESFJ",
      comment : [
        {
          nickname: "프랑켄슈타인",
          mbti: "ESFP",
          comment: "찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?"
        },
        {
          nickname: "슈바인",
          mbti: "ESFJ",
          comment: "이걸?"
        },
        {
          nickname: "베컴",
          mbti: "ISFP",
          comment: "난 무조건 반대.."
        }
      ]
    },
    {
      username: "spy@dev.com",
      nickname: "스파이",
      title: "요즘 HOT한 롱패딩 논쟁",
      images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU  ",
      contents: "내 절친의 패딩 지퍼를 올려주는 나의 애인, 어떻게 생각하시나요?",
      agreeCount: 1,
      disagreeCount: 2,
      agree: false,
      disagree: false,
      date: "22.07.25",
      mbti: "ISFP",
      comment : [
        {
          nickname: "프랑켄슈타인",
          mbti: "ESFP",
          comment: "찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?찬성 할 사람이 있나..?"
        },
        {
          nickname: "슈바인",
          mbti: "ESFJ",
          comment: "이걸?"
        },
        {
          nickname: "베컴",
          mbti: "ISFP",
          comment: "난 무조건 반대.."
        }
      ]
    }
  ]
} 

// Action Creators
export function loadPost(post) {
  return { type: LOAD, post }
}

export function updatePost(post, nickname) {
  console.log("확인", post, nickname)
  return { type: UPDATE, post, nickname }
}

export function createPost(post) {
  // console.log(post)
  return { type: CREATE_POST, post }
}

// middlewares
export const loadPostDB = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://lightromance.shop/selecthing");
      console.log(res)
      dispatch(loadPost)
    } catch(error) {
      console.log(error)
    }
  }
}

// Reducer
export default function reducer(state = initialState, action = {} ) {
  switch (action.type) {
    case "selecthing/LOAD": {
      console.log(state, action)
      return { post: action.post }
    }

    case "selecthing/UPDATE": {
      // console.log("스테이트", ...state.post , "액션", action.post, "ID", action.nickname)
      state.post.find((include) => {
        if(include.nickname === action.nickname) {
          include.agree = action.post.agree;
          include.disagree = action.post.disagree;
          include.agreeCount = action.post.agreeCount;
          include.disagreeCount = action.post.disagreeCount;

          return;
        }
      })
        console.log("변경된 값 :", {...state})
        return {...state}
      }

      case "selecthing/CREATE_POST" : {
        const new_post = [ ...state.post, action.post ]
        console.log(new_post)
        return { ...state, post: new_post }
      }

    default: return state;
  }
}