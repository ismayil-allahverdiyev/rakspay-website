import DetailsBoxComponent from "./details_box_component";
import IconPercentage from "../../../assets/icons/icon-percentage.svg";

export default function DefaultBoxMiddleComponent() {
    return <div className="space-y-2 mt-6  w-1/3">
        <DetailsBoxComponent icon={IconPercentage} title={<p className="z-10">1% - 4%<br />transaction<br />rate</p>} height="2xl:h-48 xl:h-42 lg:h-36 md:h-32 sm:h-28 h-24" position="lg:-bottom-[40%] -bottom-[60%] lg:left-[5%] left-[10%]" />
        <DetailsBoxComponent height="2xl:h-32 xl:h-28 lg:h-24 md:h-20 sm:h-16 h-12" />
    </div>;
}