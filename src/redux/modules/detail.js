// detail.js

import axios from "axios";

// Action
const LOAD_DETAIL = "selecthing/LOAD_DETAIL"

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
  console.log(post)
  return { type: LOAD_DETAIL, post }
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

// reducer
export default function reducer(state = initialState, action = {} ) {
  switch (action.type) {
    case "selecthing/LOAD_DETAIL" : {
      console.log("state", state, "action", action)
      return { detail : action.post }
    }

    default: return state;
  }
}