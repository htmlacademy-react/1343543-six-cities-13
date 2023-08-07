import { TReview } from "../../types/review";
import ReviewItem from "../ReviewItem/ReviewItem"

type ReviewListProps = {
  reviews: TReview[];
}

function ReviewsList({reviews}: ReviewListProps) {
  const generateReviewsList = (): JSX.Element[] => {
    return reviews.map((review) => {
      return <ReviewItem key={review.id} review={review} />
    })
  }
  
  return (
    <ul className="reviews__list">
      {generateReviewsList()}
    </ul>
  )
}

export default ReviewsList