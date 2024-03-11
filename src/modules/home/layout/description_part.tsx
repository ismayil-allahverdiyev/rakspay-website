import CustomButtonComponent from "../../shared/components/general/custom_button_component";
import Navbar from "../../shared/features/navbar_feature";
import DescriptionBackground from "../features/description_background";
import AboutImage from '../../../assets/images/about_image.png';
import { useTranslation } from "react-i18next";

export default function DescriptionPart() {

    const t = useTranslation("global").t;

    return <DescriptionBackground>
        <Navbar />
        <div className='2xl:w-[55%] xl:w-[65%] lg:w-[70%] md:w-[80%] w-[90%] text-white font-title font-semibold sm:pl-24 pl-12 z-10 relative select-none'>
            <p className="2xl:text-7xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl sm:mt-32 mt-12">
                {t("home.about_title")}
            </p>
            <p className="md:text-xl sm:text-lg text-lg mr-[20%] mt-6 mb-8">
                {t("home.about_body")}
            </p>
            <CustomButtonComponent title={t("buttons.send_now")} url="/transaction" />
        </div>
        <img src={AboutImage} alt="" className='absolute right-0 bottom-0 2xl:h-[90%] xl:h-[70%] lg:h-[65%] md:h-[60%] sm:h-[55%] h-[50%] z-0 select-none' />

    </DescriptionBackground>
}