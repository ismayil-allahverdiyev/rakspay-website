import CustomButtonComponent from "../../shared/components/general/custom_button_component";

export default function HeaderComponent() {
    return <div className="flex p-[7%] space-x-14">
        <p className="whitespace-pre text-8xl tracking-widest font-title font-extrabold">
            CUSTOMER <span className="text-primary">TRUST</span><br />      <span className="text-custom-grey">CRUCIAL</span> FOR<br />    MONEY <span className="text-primary">SERVICES</span>
        </p>
        <div className="flex flex-col justify-end items-end space-y-12">
            <p className="text-xl">
                Backed by extensive international user feedback, our services offer a secure and dependable avenue for monetary transactions.
            </p>
            <CustomButtonComponent title="More" style="text-xl" />
        </div>
    </div>;
}