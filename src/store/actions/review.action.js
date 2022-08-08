import { reviewTypes } from "../types/review.type";

const { SHOW_SINGLE_REVIEW } = reviewTypes;

export const getReviews = (getAllReviews) => {
  return async (dispatch) => {
    await getAllReviews((reviews) => {
      dispatch({ type: SHOW_SINGLE_REVIEW, reviews: reviews });
    });
  };
};
