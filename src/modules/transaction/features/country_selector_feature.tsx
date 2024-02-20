import CustomDropdownComponent from "../../shared/components/general/custom_dropdown_component";

export default function CountrySelectorFeature() {
    return <div className="flex justify-between w-full">
        <CustomDropdownComponent placeholder="Select country" title="From" values={["Turkey", "Somalia"]} />
        <CustomDropdownComponent placeholder="Select country" title="To" values={["Turkey", "Somalia"]} />
    </div>;
}