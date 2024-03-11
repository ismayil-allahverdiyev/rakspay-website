import { useTranslation } from "react-i18next";

export default function ExplanationComponent() {
    var t = useTranslation("global").t;

    return <p className="pt-2">{t("transaction.message")}</p>
}