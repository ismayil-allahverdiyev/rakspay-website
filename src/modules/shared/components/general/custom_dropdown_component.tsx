import IconMenuDown from "../../../../assets/icons/icon-menu-down.svg";

interface ICustomDropdownComponentProps {
    title: string;
    placeholder: string;
    values: string[];
    selectedValue?: string;
}

export default function CustomDropdownComponent(props: ICustomDropdownComponentProps) {
    return <div className="md:w-[45%] w-full font-bold relative  text-black">
        <div>
            <p className="ml-3 mb-1 font-semibold text-white">
                {props.title}
            </p>
            <div className="flex justify-between px-2 py-4 bg-white rounded-lg">
                <p>{props.selectedValue ?? props.placeholder}</p>
                <img src={IconMenuDown} alt="" />
            </div>
            {/* <div className="w-full bg-white mt-2 rounded-lg absolute">
                {props.values.map((value, index) => {
                    return <p key={index} className="px-2 py-2 hover:bg-[#F2F2F2] cursor-pointer rounded-lg">{value}</p>
                })}
            </div> */}
        </div>
    </div>
}