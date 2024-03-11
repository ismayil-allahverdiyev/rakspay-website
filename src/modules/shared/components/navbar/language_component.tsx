import { useDispatch } from 'react-redux';
import AmericanFlag from '../../../../assets/icons/icon-american.png';
import TurkishFlag from '../../../../assets/icons/icon-turkish.png';
import { AppDispatch, changeLanguage, useAppSelector } from '../../store';
import { useTranslation } from 'react-i18next';

export default function LanguageComponent() {

    const dispatch = useDispatch<AppDispatch>();
    const selectedLanguage = useAppSelector((state) => state.translation.selectedLanguage);

    const i18n = useTranslation("global").i18n;

    return <div className='flex rounded-full border-[3.5px] border-primary text-sm px-3 py-1 space-x-2'>
        <button className='flex space-x-2' onClick={() => changeLanguage("en", dispatch, i18n)}>
            <img src={AmericanFlag} alt="American Flag" />
            <p className={selectedLanguage == "en" ? "" : "hidden"}>En</p>
        </button>
        <button className='flex space-x-2' onClick={() => changeLanguage("tr", dispatch, i18n)}>
            <img src={TurkishFlag} alt="Turkish Flag" />
            <p className={selectedLanguage == "tr" ? "" : "hidden"}>Tr</p>
        </button>
        <button className='flex space-x-2' onClick={() => changeLanguage("zl", dispatch, i18n)}>
            <img src={TurkishFlag} alt="Turkish Flag" />
            <p className={selectedLanguage == "az" ? "" : "hidden"}>Az</p>
        </button>
    </div>
}