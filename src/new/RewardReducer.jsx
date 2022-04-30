import { CLOSE_REWARD, OPEN_REWARD } from "./rewardConstants";



const initialState = {
  isOpen:false,
};

export default function rewardReducer(state = initialState,action) {
  switch (action.type) {
    case OPEN_REWARD:
      return {
        ...state,
        isOpen:true,
      };
  
    case CLOSE_REWARD:
      return {
        ...state,
        isOpen:false,
      };
    default:
      return state;
  }
}
