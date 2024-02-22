import ReviewComponent from "../components/review_component";

export default function ReviewsFeature() {
    var reviews = [
        {
            main: "Fastest",
            title: " money transaction from Somali to Turkey...",
            description: "I've been using this platform for several months now, and I must say, I'm thoroughly impressed. Not only is it incredibly user-friendly, but the security measures in place give me peace of mind when conducting transactions."
        },
        {
            main: "Fastest",
            title: " money transaction from Somali to Turkey...",
            description: "I've been using this platform for several months now, and I must say, I'm thoroughly impressed. Not only is it incredibly user-friendly, but the security measures in place give me peace of mind when conducting transactions."
        },
        {
            main: "Fastest",
            title: " money transaction from Somali to Turkey...",
            description: "I've been using this platform for several months now, and I must say, I'm thoroughly impressed. Not only is it incredibly user-friendly, but the security measures in place give me peace of mind when conducting transactions."
        },
        {
            main: "Fastest",
            title: " money transaction from Somali to Turkey...",
            description: "I've been using this platform for several months now, and I must say, I'm thoroughly impressed. Not only is it incredibly user-friendly, but the security measures in place give me peace of mind when conducting transactions."
        },
        {
            main: "Fastest",
            title: " money transaction from Somali to Turkey...",
            description: "I've been using this platform for several months now, and I must say, I'm thoroughly impressed. Not only is it incredibly user-friendly, but the security measures in place give me peace of mind when conducting transactions."
        },
        {
            main: "Fastest",
            title: " money transaction from Somali to Turkey...",
            description: "I've been using this platform for several months now, and I must say, I'm thoroughly impressed. Not only is it incredibly user-friendly, but the security measures in place give me peace of mind when conducting transactions."
        },
        {
            main: "Fastest",
            title: " money transaction from Somali to Turkey...",
            description: "I've been using this platform for several months now, and I must say, I'm thoroughly impressed. Not only is it incredibly user-friendly, but the security measures in place give me peace of mind when conducting transactions."
        },
        {
            main: "Fastest",
            title: " money transaction from Somali to Turkey...",
            description: "I've been using this platform for several months now, and I must say, I'm thoroughly impressed. Not only is it incredibly user-friendly, but the security measures in place give me peace of mind when conducting transactions."
        },

    ]
    return <div className="flex pb-20 w-full overflow-x-auto no-scrollbar lg:pl-16 pl-12 pt-12 -space-x-4">
        {reviews.map((review, index) => <ReviewComponent key={index} review={review.description} main={review.main} title={review.title} index={index} />)}
    </div>
}