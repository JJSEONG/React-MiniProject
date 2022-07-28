// detail.js

import axios from "axios";

// Action
const LOAD_DETAIL = "selecthing/LOAD_DETAIL"
const UPDATE = "selecthing/UPDATE"

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
      comments : []
    }
  }
// Action Creators
export function loadDetail(post) {
  return { type: LOAD_DETAIL, post }
}

export function loadCount(post) {
  return { type: UPDATE, post}
}

// middlewares
export const loadDetailDB = (params) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://lightromance.shop/boards/${params}/details`);

      dispatch(loadDetail(res.data))
    } catch(error) {
      console.log(error)
    }
  }
}

export const updatePostDB = ( agree, params ) => {
  return async function (dispatch) {
    const res = await axios.patch(`http://lightromance.shop/boards/${params}/details`, {
        agreeCount: agree.agreeCount,
        disagreeCount: agree.disagreeCount,
        agree: agree.agree,
        disagree: agree.disagree,
      })
    }
  }

// reducer
export default function reducer(state = initialState, action = {} ) {
  switch (action.type) {
    case "selecthing/LOAD_DETAIL" : {
      return { detail : action.post }
    }
    case "selecthing/UPDATE" :{
      return {state, action}
    }

    default: return state;
  }
}