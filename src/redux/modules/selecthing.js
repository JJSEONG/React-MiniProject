// selecthing.js

import axios from "axios";

// Actions
const LOAD = "selecthing/LOAD";
const UPDATE = "selecthing/UPDATE"
const CREATE_POST = "selecthing/CREATE_POST"
const LOAD_DETAIL = "selecthing/LOAD_DETAIL"

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
      comment : [
        {
          nickname: "",
          mbti: "",
          comment: ""
        },
        {
          nickname: "",
          mbti: "",
          comment: ""
        },
        {
          nickname: "",
          mbti: "",
          comment: ""
        }
      ]
    },
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
  return { type: CREATE_POST, post }
}

export function detailPost(detail){
  console.log(detail);
  return{ type: LOAD_DETAIL, detail}
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

export const detailPostDB =(params) =>{
  return async function(dispatch){
    const res = await axios.get(`http://lightromance.shop/boards/${params}/details`)  
    console.log(res);
    console.log(params);
    dispatch(detailPost(res.data));
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
      case "selecthing/LOAD_DETAIL" :{
        console.log(state, action.detail);
        return {detail : action.detail}
      }

    default: return state;
  }
}