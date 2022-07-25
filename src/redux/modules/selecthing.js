// selecthing.js

// Actions
const LOAD = "selecthing/LOAD";

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
      agree: "false",
      disagree: "false",
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
      agree: "false",
      disagree: "false",
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
      agree: "false",
      disagree: "false",
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

// Reducer
export default function reducer(state = initialState, action = {} ) {
  switch (action.type) {
    case "selecthing/LOAD": {
      return { post: action.post }
    }

    default: return state;
  }
}