import DetailsBoxStartComponent from "../components/details_box_start_component";
import DefaultBoxMiddleComponent from "../components/details_box_middle_component";
import DetailsBoxEndComponent from "../components/details_box_end_component";

export default function DetailsBoxFeature() {
    return <div className="flex flex-row space-x-2">
        <DetailsBoxStartComponent />
        <DefaultBoxMiddleComponent />
        <DetailsBoxEndComponent />
    </div>
}