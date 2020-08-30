const initialState = {};
export default function (state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case 'SIGN_IN':
      return {...state, user: action.payload};
    case 'SIGN_OUT': 
      return {...state, user: initialState };
    default:
      return state;
  }
}