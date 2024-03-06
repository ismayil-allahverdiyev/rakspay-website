import CustomDropdownComponent from "../../shared/components/general/custom_dropdown_component";
import { useAppSelector } from "../store";

export default function AmountFeature() {

    const selectedCurrency = useAppSelector((state) => state.transaction.selectedCurrency);

    return <div className="flex flex-row w-[40%] mt-2 items-end">
        <div className="w-[50%] font-bold relative text-black mr-8">
            <p className="ml-3 mb-1 font-semibold text-white">
                Amount
            </p>
            <input type="number" className="px-2 py-4 outline-none bg-white rounded-lg" />
        </div>
        <CustomDropdownComponent placeholder="TL" title="" values={["TL", "USD",]} selectedValue={selectedCurrency} />
    </div>
}