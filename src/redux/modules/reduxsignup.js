
// Actions
const LOAD = "lists/LOAD";
const CREATE = "lists/CREATE";

const initialState = {
  post : [
    {
      nickname: "정옴",
      id: "rrr123@naver.com",
      password:"rrr123!",
      password2: "rrr123!", 
    }
  ]
}

// Action Creators
export function loadPost(lists) {
  return { type: LOAD, lists}
}
export function createList(lists) {
    return { type: CREATE, lists };
  }

// Reducer
export default function reducer(state = initialState, action = {} ) {
  switch (action.type) {
    case "lists/LOAD": {
      return state;
    }
    case "lists/CREATE": {
        console.log(state);
        const new_list = [...state.post, action.lists];
        return { post: new_list };
      }

    default: return state;
  }
}