import LargeLogoComponent from "../../shared/components/general/large_logo_component";
import DetailsBoxFeature from "../features/details_box_feature";

export default function DetailsPart() {
    return <div className="">
        <div className="flex items-center mx-[5%] mt-[2%] md:flex-row flex-col">
            <p className="font-bold md:w-[35%] w-[65%] xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg md:text-left text-center md:my-0 my-8">
                Rakspay assures swift, secure financial transactions, backed by years of expertise.
            </p>
            <DetailsBoxFeature />
        </div>
        <LargeLogoComponent />
    </div>
}