import RatingComponent from "../components/rating_component";
import ReviewBodyComponent from "../components/review_body_component";

interface ReviewFeatureProps {
    style?: string;
}

export default function ReviewFeature(props: ReviewFeatureProps) {
    return <div className={`xl:w-[32rem] lg:w-[28rem] md:w-[24rem] w-[22rem] bg-black rounded-2xl relative overflow-clip lg:pl-8 pl-4 ${props.style} 2xl:text-2xl xl:text-xl lg:text-lg text-sm`}>
        <div className="lg:w-20 w-14 lg:h-16 h-12 bg-[#E3F7AB] rounded-bl-full rounded-tl-3xl rounded-tr-2xl border-2 border-white absolute top-0 right-0" />
        <ReviewBodyComponent />
        <RatingComponent />
    </div>
}