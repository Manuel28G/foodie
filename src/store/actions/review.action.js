import { reviewTypes } from "../types/review.type";

const { SHOW_SINGLE_REVIEW } = reviewTypes;

export const getReviews = (getAllReviews) => {
  return async (dispatch) => {
    await getAllReviews((reviews) => {
      if (reviews != undefined) {
        if (!Array.isArray(reviews)) reviews = [reviews];
        // removing the firebase id from the review object
        reviews = reviews.map((review) => review[Object.keys(review)[0]]);
        dispatch({ type: SHOW_SINGLE_REVIEW, reviews: reviews });
      }
    });
  };
};
