import GreyTriangle from '../../../assets/images/grey-triangle.svg';
import GreenTriangle from '../../../assets/images/green-triangle.svg';

export default function DescriptionBackground({ children }: any) {
    return <div className="h-screen w-full bg-black text-white relative overflow-hidden">
        <img src={GreyTriangle} alt="" className='rotate-[-10deg] absolute -left-[10%] -bottom-[5%]' />
        <img src={GreenTriangle} alt="" className='rotate-[-10deg] scale-[2] absolute -right-[2%] bottom-[20%]' />
        <div className="h-screen w-full bg-black backdrop-blur-xl bg-opacity-65 relative">
            {children}
        </div>
    </div>
}