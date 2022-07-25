// selecthing.js

// Actions
const LOAD = "selecthing/LOAD";

const initialState = {
  post : [
    {
      username: "spa@dev.com",
      nickname: "스파게티",
      title: "요즘 HOT한 깻잎 논쟁",
      images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU  ",
      contents: "내 절친의 깻잎을 떼어주는 나의 애인, 어떻게 생각하시나요?", 
    },
    {
      username: "seong@dev.com",
      nickname: "정성스럽게",
      title: "요즘 HOT한 새우 논쟁",
      images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU  ",
      contents: "내 절친의 새우를 까서 주는 나의 애인, 어떻게 생각하시나요?",
    },
    {
      username: "spy@dev.com",
      nickname: "스파이",
      title: "요즘 HOT한 롱패딩 논쟁",
      images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU  ",
      contents: "내 절친의 패딩 지퍼를 올려주는 나의 애인, 어떻게 생각하시나요?", 
    }
  ]
}

// Action Creators
export function loadPost(post) {
  return { type: LOAD, post }
}

// Reducer
export default function reducer(state = initialState, action = {} ) {
  switch (action.type) {
    case "selecthing/LOAD": {
      return { post: action.post }
    }

    default: return state;
  }
}