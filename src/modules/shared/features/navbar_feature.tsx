import LogoComponent from "../components/general/logo_component";
import LanguageComponent from "../components/navbar/language_component";
import NavbarLinkComponent from "../components/navbar/nav_bar_link_component";
import { IoMenu } from "react-icons/io5";
import { AppDispatch, menuActions, useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    var isOpen = useAppSelector((state) => state.menu.isMenuOn);
    var dispatch = useDispatch<AppDispatch>();

    function openCloseMenu() {
        dispatch(menuActions.closeOpenMenu());
    }

    function linkClick() {
        window.scrollTo(0, 0);
        openCloseMenu();
    }

    var t = useTranslation("global").t;

    return <div className='flex justify-between items-center text-2xl lg:px-24 px-12 py-8 select-none'>
        <IoMenu className="lg:hidden block scale-125" onClick={() => openCloseMenu()} />
        <div className={!isOpen ? "fixed left-[-100%]" : "flex fixed left-0 top-0 w-full h-full items-center ease-in-out duration-300 z-50 "}>
            <div className="w-[60%] h-full bg-black px-8 py-8 border-r-4 border-r-primary">
                <div className="flex items-center justify-between mb-8">
                    <LogoComponent />
                    <IoIosCloseCircle onClick={() => openCloseMenu()} />
                </div>
                <div className="flex flex-col w-full lg:text-2xl sm:text-xl text-lg space-y-2 font-medium">
                    <Link to="/" onClick={() => linkClick()}>{t("nav.about")}</Link>
                    <div className="h-[1px] w-full bg-custom-grey" />
                    <Link to="/transaction" onClick={() => linkClick()}>{t("nav.transaction")}</Link>
                    <div className="h-[1px] w-full bg-custom-grey" />
                    <Link to="/reviews" onClick={() => linkClick()}>{t("nav.reviews")}</Link>
                </div>
            </div>
            <div className="w-[40%] h-full bg-black bg-opacity-30">

            </div>
        </div>
        <LogoComponent style="lg:block hidden" />
        <NavbarLinkComponent style="lg:block hidden" />
        <LanguageComponent />
    </div >
}