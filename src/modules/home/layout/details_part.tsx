import LargeLogoComponent from "../../shared/components/general/large_logo_component";
import DetailsBoxFeature from "../features/details_box_feature";

export default function DetailsPart() {
    return <div className="">
        <div className="flex items-center mx-[5%] mt-[2%]">
            <p className="text-4xl font-bold w-[35%]">
                Rakspay assures swift, secure financial transactions, backed by years of expertise.
            </p>
            <DetailsBoxFeature />
        </div>
        <LargeLogoComponent />
    </div>
}