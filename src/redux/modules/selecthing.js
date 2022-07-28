// selecthing.js

import axios from "axios";

// Actions
const LOAD = "selecthing/LOAD";
const UPDATE = "selecthing/UPDATE"
const CREATE_POST = "selecthing/CREATE_POST"

const initialState = {
  post : [
    {
      username: "",
      nickname: "",
      title: "",
      images: "",
      contents: "",
      agreeCount: 0,
      disagreeCount: 0,
      agree: false,
      disagree: false,
      date: "",
      mbti: "",
      id : 1,
      comment : [
        {
          nickname: "안녕",
          mbti: "안녕",
          comment: "안녕"
        },
        {
          nickname: "안닝",
          mbti: "안닝",
          comment: "안닝"
        },
        {
          nickname: "인닝",
          mbti: "인닝",
          comment: "인닝"
        }
      ]
    },
    {
      username: "",
      nickname: "",
      title: "",
      images: "",
      contents: "",
      agreeCount: 0,
      disagreeCount: 0,
      agree: false,
      disagree: false,
      date: "",
      mbti: "",
      id : 2,
      comment : [
        {
          nickname: "안녕",
          mbti: "안녕",
          comment: "안녕"
        },
        {
          nickname: "안닝",
          mbti: "안닝",
          comment: "안닝"
        },
        {
          nickname: "인닝",
          mbti: "인닝",
          comment: "인닝"
        }
      ]
    },
    {
      username: "",
      nickname: "",
      title: "",
      images: "",
      contents: "",
      agreeCount: 0,
      disagreeCount: 0,
      agree: false,
      disagree: false,
      date: "",
      mbti: "",
      id : 3,
      comment : [
        {
          nickname: "안녕",
          mbti: "안녕",
          comment: "안녕"
        },
        {
          nickname: "안닝",
          mbti: "안닝",
          comment: "안닝"
        },
        {
          nickname: "인닝",
          mbti: "인닝",
          comment: "인닝"
        }
      ]
    }
  ]
} 

// Action Creators
export function loadPost(post) {
  return { type: LOAD, post }
}

export function updatePost(post, params) {
  console.log("확인", post, params)
  return { type: UPDATE, post, params }
}

export function createPost(post) {
  return { type: CREATE_POST, post }
}

// middlewares
export const loadPostDB = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://lightromance.shop/selecthing");

      dispatch(loadPost(res.data))
    } catch(error) {
      console.log(error)
    }
  }
}

// Reducer
export default function reducer(state = initialState, action = {} ) {
  switch (action.type) {
    case "selecthing/LOAD": {
      return { post: action.post }
    }

    case "selecthing/UPDATE": {
      state.post.find((include) => {
        if(include.nickname === action.nickname) {
          include.agree = action.post.agree;
          include.disagree = action.post.disagree;
          include.agreeCount = action.post.agreeCount;
          include.disagreeCount = action.post.disagreeCount;

          return;
        }
      })
        return {...state}
      }

      case "selecthing/CREATE_POST" : {
        const new_post = [ ...state.post, action.post ]
        return { ...state, post: new_post }
      }

    default: return state;
  }
}