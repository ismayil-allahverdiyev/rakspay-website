import CustomButtonComponent from "../../shared/components/general/custom_button_component";

export default function HeaderComponent() {
    return <div className={`flex pt-[7%] lg:pb-[3%] w-[84%] mx-auto space-x-14 lg:flex-row flex-col`}>
        <p className="whitespace-pre 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-widest font-title font-extrabold">
            CUSTOMER <span className="text-primary">TRUST</span><br />      <span className="text-custom-grey">CRUCIAL</span> FOR<br />    MONEY <span className="text-primary">SERVICES</span>
        </p>
        <div className="flex flex-col justify-end items-end space-y-12">
            <p className="xl:text-2xl lg:text-xl md:text-lg lg:block hidden">
                Backed by extensive international user feedback, our services offer a secure and dependable avenue for monetary transactions.
            </p>
            <CustomButtonComponent title="More" style="lg:text-xl text-md" />
        </div>
    </div>;
}