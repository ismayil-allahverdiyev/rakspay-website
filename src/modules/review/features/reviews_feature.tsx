import { useDispatch, useSelector } from "react-redux";
import ReviewComponent from "../components/review_component";
import { AppDispatch, IReview, IReviewState, getReviews, useAppSelector } from "../store";
import { useEffect } from "react";

export default function ReviewsFeature() {

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getReviews(dispatch));
    }, [dispatch]);


    const reviews = useAppSelector((state) => state.review.reviewList);

    return <div className="flex pb-20 w-full overflow-x-auto no-scrollbar lg:pl-16 pl-12 pt-12 -space-x-4 lg:min-h-[28rem] sm:min-h-[24rem] min-h-[20rem]">
        {reviews.map((review, index) => <ReviewComponent key={index} review={review.description} main={review.main} title={review.title} index={index} />)}
    </div>
}