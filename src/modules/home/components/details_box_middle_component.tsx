import DetailsBoxComponent from "./details_box_component";
import IconPercentage from "../../../assets/icons/icon-percentage.svg";

export default function DefaultBoxMiddleComponent() {
    return <div className="space-y-2 mt-6">
        <DetailsBoxComponent icon={IconPercentage} title={<p className="z-10">1% - 4%<br />transaction<br />rate</p>} height="h-48" position="-bottom-[40%] left-[5%]" />
        <DetailsBoxComponent height="h-48" />
    </div>;
}