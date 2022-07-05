import { reviewTypes } from "../types/review.type.js";
const { SHOW_SINGLE_REVIEW, ADD_REVIEW, REMOVE_REVIEW } = reviewTypes;

const reviewsReducer = (state = [], action) => {
  console.log("AQUI", state);
  switch (action.type) {
    case SHOW_SINGLE_REVIEW:
      return {
        ...state,
      };
    case ADD_REVIEW:
      return {
        ...state,
      };
    case REMOVE_REVIEW:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reviewsReducer;
