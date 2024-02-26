import LogoComponent from "../components/general/logo_component";
import LanguageComponent from "../components/navbar/language_component";
import NavbarLinkComponent from "../components/navbar/nav_bar_link_component";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
    return <div className='flex justify-between items-center text-2xl lg:px-24 px-12 py-8'>
        <IoMenu className="lg:hidden block scale-125" />
        <LogoComponent style="lg:block hidden" />
        <NavbarLinkComponent style="lg:block hidden" />
        <LanguageComponent />
    </div >
}