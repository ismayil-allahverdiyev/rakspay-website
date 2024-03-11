import { useTranslation } from "react-i18next";
import CustomButtonComponent from "../../shared/components/general/custom_button_component";

export default function HeaderComponent() {
    var t = useTranslation("global").t;

    return <div className={`flex pt-[7%] lg:pb-[3%] w-[84%] mx-auto space-x-14 lg:flex-row flex-col`}>
        <p className="whitespace-pre 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-widest font-title font-extrabold">
            {t("reviews.title.part_1")}<span className="text-primary">{t("reviews.title.part_2")}</span><br />      <span className="text-custom-grey">{t("reviews.title.part_3")}</span>{t("reviews.title.part_4")}<br />{t("reviews.title.part_5")}<span className="text-primary">{t("reviews.title.part_6")}</span>
        </p>
        <div className="flex flex-col justify-end items-end space-y-12">
            <p className="xl:text-2xl lg:text-xl md:text-lg lg:block hidden">
                {t("reviews.title.body")}
            </p>
            <CustomButtonComponent title={t("reviews.more")} style="lg:text-xl text-md" url="/" />
        </div>
    </div>;
}