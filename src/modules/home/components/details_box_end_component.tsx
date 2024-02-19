import DetailsBoxComponent from "./details_box_component";
import IconLargeStar from "../../../assets/icons/icon-large-star.svg";

export default function DetailsBoxEndComponent() {
    return <div className="space-y-2 mt-12">
        <DetailsBoxComponent height="h-32" />
        <DetailsBoxComponent icon={IconLargeStar} title={<p className="z-10">1 hour<br />response time</p>} height="h-48" position="-top-[30%] -right-[15%]" />
        <DetailsBoxComponent height="h-16" />
    </div>;
}