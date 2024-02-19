import AmericanFlag from '../../../../assets/icons/icon-american.png';
import TurkishFlag from '../../../../assets/icons/icon-turkish.png';

export default function LanguageComponent() {
    return <div className='flex rounded-full border-[3.5px] border-primary text-sm px-3 py-1 space-x-2'>
        <img src={AmericanFlag} alt="American Flag" />
        <p>En</p>
        <img src={TurkishFlag} alt="Turkish Flag" />
        <img src={TurkishFlag} alt="Turkish Flag" />
    </div>
}