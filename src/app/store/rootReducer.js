import { combineReducers } from 'redux';
import eventReducer from '../../features/events/eventReducer';
import modalReducer from '../common/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../async/asyncReducer';
import profileReducer from '../../features/profiles/profileReducer';
import { connectRouter } from 'connected-react-router';
import rewardReducer from '../../new/RewardReducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),

  event: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  profile: profileReducer,
  reward:rewardReducer
})

export default rootReducer;
