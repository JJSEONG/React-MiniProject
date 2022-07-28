// detail.js

import axios from "axios";

// Action
const LOAD_DETAIL = "selecthing/LOAD_DETAIL"
const LOAD_COUNT = "selecthing/LOAD_COUNT"

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

export function loadCount(post) {
  console.log(post)
  return { type: LOAD_COUNT, post}
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

export const countDetailDB = (params) =>{
  console.log(params)
  return async function(dispatch){
    const res = await axios.patch(`http://lightromance.shop/boards/${params}/details`);
    console.log("res",res.data)
    console.log(params)

    dispatch(loadCount(res.data))
  }
}

// reducer
export default function reducer(state = initialState, action = {} ) {
  switch (action.type) {
    case "selecthing/LOAD_DETAIL" : {
      console.log("state", state, "action", action)
      return { detail : action.post }
    }
    case "selecthing/LOAD_COUNT" :{
      console.log(state, action);
      return {state, action}
    }

    default: return state;
  }
}