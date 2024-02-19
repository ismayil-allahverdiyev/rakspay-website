import LogoComponent from "../components/general/logo_component";
import LanguageComponent from "../components/navbar/language_component";
import NavbarLinkComponent from "../components/navbar/nav_bar_link_component";

export default function Navbar() {
    return <div className='flex justify-between text-2xl px-24 py-8'>
        <LogoComponent />
        <NavbarLinkComponent />
        <LanguageComponent />
    </div >
}