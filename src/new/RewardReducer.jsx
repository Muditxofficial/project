const OPEN_REWARD = 'OPEN_REWARD';
const CLOSE_REWARD = 'CLOSE_REWARD';

export function openReward(payload) {
  return {
    type: OPEN_REWARD,
    payload,
  };
}

export function closeReward() {
  return {
    type: CLOSE_REWARD,
  };
}

const initialState = null;

export default function modalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_REWARD:
      const { modalType, modalProps } = payload;
      return { modalType, modalProps };
    case CLOSE_REWARD:
      return null;
    default:
      return state;
  }
}
