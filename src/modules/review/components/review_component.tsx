import SmallGreyTriangle from "../../../assets/images/small-grey-triangle.svg";
import SmallGreenTriangle from "../../../assets/images/small-green-triangle.svg";

interface ReviewComponentProps {
    review: string;
    title: string;
    main: string;
    index: number;
    image: string;
}

export default function ReviewComponent(props: ReviewComponentProps) {
    return <div className={`flex flex-col justify-between items-end lg:min-w-[28rem] sm:min-w-[24rem] min-w-[20rem] lg:min-h-[28rem] sm:min-h-[24rem] min-h-[20rem] ${props.index % 4 === 1 ? "text-white" : ""} ${props.index % 4 === 1 ? "bg-[#2F2F2F]" : props.index % 4 == 3 ? "bg-primary" : "bg-white"} rounded-[4rem] p-8 lg:text-2xl sm:text-xl text-md text-black font-medium relative overflow-clip ${(props.index % 4 === 0) ? "mt-16" : props.index % 4 === 1 ? "mt-0 mb-16" : props.index % 4 === 2 ? "mt-14 mb-2" : "mb-16"} ${(props.index % 4 === 0) ? "rotate-[-14deg]" : props.index % 4 === 1 ? "rotate-[2deg]" : props.index % 4 === 2 ? "rotate-[-8deg]" : props.index % 4 === 3 ? "rotate-[20deg]" : "rotate-[-12deg]"}`}>
        <div className="z-10">
            <p className="font-semibold lg:text-2xl text-xl">
                <span className={`${props.index % 4 == 3 ? "text-custom-grey" : "text-[#94BF1E]"} font-semibold`}>{props.main + " "}</span>{props.title}
            </p>
            <p className="mt-2">
                {props.review}
            </p>
        </div>
        <img src={props.image} className="rounded-full w-[5rem] h-[5rem] bg-custom-grey object-cover" />
        <img src={SmallGreyTriangle} alt="" className="absolute -left-4 bottom-[10%] rotate-[-10deg] z-0" />
        <img src={SmallGreenTriangle} alt="" className="absolute left-[10%] -bottom-2 rotate-[-110deg] z-0" />
    </div>
}