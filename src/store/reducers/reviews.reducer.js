import { reviewTypes } from "../types/review.type";
const { SHOW_SINGLE_REVIEW, ADD_REVIEW, REMOVE_REVIEW } = reviewTypes;

const reviewsReducer = (state, action) => {
  switch (action?.type) {
    case SHOW_SINGLE_REVIEW:
      return {
        ...state,
        reviews: action.reviews,
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
      return { ...state, reviews: [] };
  }
};

export default reviewsReducer;
