import DetailsBoxComponent from "./details_box_component";
import IconTime from "../../../assets/icons/icon-time.svg";

export default function DetailsBoxStartComponent() {
    return <div className="space-y-2">
        <DetailsBoxComponent height="h-32" />
        <DetailsBoxComponent icon={IconTime} title={<p className="z-10">2 years<br />of<br />experience</p>} height="h-48" position="-bottom-[50%] -right-[20%]" />
        <DetailsBoxComponent height="h-16" />
    </div>
}