import { CLOSE_REWARD, OPEN_REWARD } from "./rewardConstants";

export function openRewardSec() {
  return {
    type: OPEN_REWARD,
  };
}
export function closeRewardSec() {
  return {
    type: CLOSE_REWARD,
  };
}
