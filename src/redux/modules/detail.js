// detail.js

import axios from "axios";

// Action
const LOAD_DETAIL = "selecthing/LOAD_DETAIL"
const CREATE_COMMENT = "selecthing/CREATE_COMMENT"

const initialState = {
  detail : {
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
      id: 1,
      comments : []
    }
  }
// Action Creators
export function loadDetail(post) {
  console.log(post)
  return { type: LOAD_DETAIL, post }
}

export function createComment(comment) {
  console.log("코멘트", comment)
  return { type: CREATE_COMMENT, comment }
}

// middlewares
export const loadDetailDB = (params) => {
  console.log(params)
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://lightromance.shop/boards/${params}/details`);
      console.log("params", params)
      console.log("res", res)

      dispatch(loadDetail(res.data))
    } catch(error) {
      console.log(error)
    }
  }
}

export const updatePostDB = ( agree, params ) => {
  return async function (dispatch) {
    console.log(agree, params)
    const res = await axios.patch(`http://lightromance.shop/boards/${params}/details`, {
      agreeCount: agree.agreeCount,
      disagreeCount: agree.disagreeCount,
      agree: agree.agree,
      disagree: agree.disagree,
    })
    console.log(res)
  }
}

// reducer
export default function reducer(state = initialState, action = {} ) {
  switch (action.type) {
    case "selecthing/LOAD_DETAIL" : {
      console.log("state", state, "action", action)
      return { detail : action.post }
    }

    case "selecthing/CREATE_COMMENT" : {
      console.log(state)
      console.log(action.commnet)
      console.log(state.detail.comments)
      // const new_comment = [ ...state.post[action.payload.params].comment, action.payload.comment ]
      state.detail.comments.push(action.comment)
      // console.log(new_comment)
      // console.log({...state.post[action.payload.params]})
      return { ...state }
    }

    default: return state;
  }
}