import DetailsBoxComponent from "./details_box_component";
import IconLargeStar from "../../../assets/icons/icon-large-star.svg";

export default function DetailsBoxEndComponent() {
    return <div className="space-y-2 mt-12 w-1/3">
        <DetailsBoxComponent height="2xl:h-32 xl:h-28 lg:h-24 md:h-20 sm:h-16 h-12" />
        <DetailsBoxComponent icon={IconLargeStar} title={<p className="z-10">1 hour<br />response time</p>} height="2xl:h-48 xl:h-42 lg:h-36 md:h-32 sm:h-28 h-24" position="lg:-top-[30%] -top-[45%] lg:-right-[15%] -right-[25%]" />
        <DetailsBoxComponent height="2xl:h-32 xl:h-28 lg:h-24 md:h-20 sm:h-16 h-12" />
    </div>;
}