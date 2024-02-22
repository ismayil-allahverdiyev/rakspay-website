import DetailsBoxComponent from "./details_box_component";
import IconTime from "../../../assets/icons/icon-time.svg";

export default function DetailsBoxStartComponent() {
    return <div className="space-y-2 w-1/3">
        <DetailsBoxComponent height="2xl:h-32 xl:h-28 lg:h-24 md:h-20 sm:h-16 h-12" />
        <DetailsBoxComponent icon={IconTime} title={<p className="z-10">2 years<br />of<br />experience</p>} height="2xl:h-48 xl:h-42 lg:h-36 md:h-32 sm:h-28 h-24" position="lg:-bottom-[50%] -bottom-[60%] lg:-right-[20%] -right-[30%]" />
        <DetailsBoxComponent height="2xl:h-32 xl:h-28 lg:h-24 md:h-20 sm:h-16 h-12" />
    </div>
}