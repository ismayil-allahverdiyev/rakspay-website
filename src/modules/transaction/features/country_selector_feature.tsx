import CustomDropdownComponent from "../../shared/components/general/custom_dropdown_component";
import { useAppSelector } from "../store";

export default function CountrySelectorFeature() {

    const countryList = useAppSelector((state) => state.transaction.listOfCountries);

    const selectedFromCountry = useAppSelector((state) => state.transaction.selectedFromCountry);
    const selectedToCountry = useAppSelector((state) => state.transaction.selectedToCountry);

    return <div className="flex justify-between w-full md:flex-row md:space-y-0 space-y-2 flex-col">
        <CustomDropdownComponent placeholder="Select country" title="From" values={countryList} selectedValue={selectedFromCountry} />
        <CustomDropdownComponent placeholder="Select country" title="To" values={countryList} selectedValue={selectedToCountry} />
    </div>;
}