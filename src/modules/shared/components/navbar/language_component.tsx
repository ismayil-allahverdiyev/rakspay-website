import AmericanFlag from '../../../../assets/icons/icon-american.png';
import TurkishFlag from '../../../../assets/icons/icon-turkish.png';
import { useTranslation } from 'react-i18next';

export default function LanguageComponent() {

    const i18n = useTranslation("global").i18n;

    return <div className='flex rounded-full border-[3.5px] border-primary text-sm px-3 py-1 space-x-2'>
        <button className='flex space-x-2' onClick={() => i18n.changeLanguage("en")}>
            <img src={AmericanFlag} alt="American Flag" />
            <p className={i18n.language == "en" ? "" : "hidden"}>En</p>
        </button>
        <button className='flex space-x-2' onClick={() => i18n.changeLanguage("tr")}>
            <img src={TurkishFlag} alt="Turkish Flag" />
            <p className={i18n.language == "tr" ? "" : "hidden"}>Tr</p>
        </button>
        {/* <button className='flex space-x-2' onClick={() => i18n.changeLanguage("az")}>
            <img src={TurkishFlag} alt="Turkish Flag" />
            <p className={i18n.language == "az" ? "" : "hidden"}>Az</p>
        </button> */}
    </div>
}