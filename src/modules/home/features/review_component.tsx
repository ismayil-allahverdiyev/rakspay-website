import RatingComponent from "../components/rating_component";
import ReviewBodyComponent from "../components/review_body_component";

interface ReviewComponentProps {
    style?: string;
}

export default function ReviewComponent(props: ReviewComponentProps) {
    return <div className={`w-[50%] bg-black rounded-2xl relative overflow-clip pl-8 ${props.style}`}>
        <div className="w-20 h-20 bg-[#E3F7AB] rounded-bl-full rounded-tl-3xl rounded-tr-2xl border-2 border-white absolute top-0 right-0" />
        <ReviewBodyComponent />
        <RatingComponent />
    </div>
}