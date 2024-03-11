import { useTranslation } from "react-i18next";
import CustomDropdownComponent from "../../shared/components/general/custom_dropdown_component";
import { useAppSelector } from "../store";

export default function CountrySelectorFeature() {

    const countryList = useAppSelector((state) => state.transaction.listOfCountries);

    const selectedFromCountry = useAppSelector((state) => state.transaction.selectedFromCountry);
    const selectedToCountry = useAppSelector((state) => state.transaction.selectedToCountry);

    const t = useTranslation("global").t;

    return <div className="flex justify-between w-full md:flex-row md:space-y-0 space-y-2 flex-col">
        <CustomDropdownComponent placeholder={t("transaction.select_country")} title={t("transaction.from")} values={countryList} selectedValue={selectedFromCountry} id={0} />
        <CustomDropdownComponent placeholder={t("transaction.select_country")} title={t("transaction.to")} values={countryList} selectedValue={selectedToCountry} id={1} />
    </div>;
}