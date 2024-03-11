import { useTranslation } from "react-i18next";
import LogoComponent from "../../shared/components/general/logo_component";

export default function TitleComponent() {
    var t = useTranslation("global").t;

    return <div className="flex justify-between text-2xl mt-6 mb-2">
        <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-title font-bold">{t("transaction.transaction_details")}</p>
        <LogoComponent />
    </div>
}