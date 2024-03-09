import { useEffect } from "react";
import PhoneCodeComponent from "../components/phone_code_component";
import { useAppSelector } from "../store";

interface IContactInfoFeatureProps {
    numberRef: React.RefObject<HTMLInputElement>;
    emailRef: React.RefObject<HTMLInputElement>;
}

export default function ContactInfoFeature(props: IContactInfoFeatureProps) {

    var email = useAppSelector((state) => state.transaction.email);

    useEffect(() => {
        props.emailRef.current!.value = email;
    }, [email])

    return <div className="flex md:flex-row flex-col mt-2 items-end">
        <div className="md:w-[45%] w-full font-bold relative text-black md:mr-[10%]">
            <p className="ml-3 mb-1 font-semibold text-white">
                Whatsapp number
            </p>
            <PhoneCodeComponent numberRef={props.numberRef} />
        </div>
        <div className="flex flex-row md:w-[45%] w-full mt-2 items-end">
            <div className="w-full font-bold relative text-black">
                <p className="ml-3 mb-1 font-semibold text-white">
                    E-mail
                </p>
                <input ref={props.emailRef} type="email" className="w-full px-2 py-4 outline-none bg-white rounded-lg relative z-10" />
            </div>
        </div>
    </div>
}

