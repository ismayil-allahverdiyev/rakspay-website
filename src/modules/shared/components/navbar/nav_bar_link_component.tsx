import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface NavbarLinkComponentProps {
    style?: string;
}

export default function NavbarLinkComponent(props: NavbarLinkComponentProps) {
    var t = useTranslation("global").t;

    return <div className={`flex space-x-16 font-semibold ${props.style}`}>
        <Link to={"/"}>{t("nav.about")}</Link>
        <Link to={"/transaction"}>{t("nav.transaction")}</Link>
        <Link to={"/reviews"}>{t("nav.reviews")}</Link>
    </div>
}