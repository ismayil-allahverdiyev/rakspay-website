import GreyTriangle from '../../../assets/images/grey-triangle.svg';
import GreenTriangle from '../../../assets/images/green-triangle.svg';

export default function DescriptionBackground({ children }: any) {
    return <div className="h-screen w-full bg-black text-white relative overflow-hidden">
        <img src={GreyTriangle} alt="" className='rotate-[5deg] absolute -right-[5%] -bottom-[1%]' />
        <img src={GreenTriangle} alt="" className='rotate-[-5deg] scale-150 absolute left-[5%] -top-[20%]' />
        <div className="h-screen w-full bg-black backdrop-blur-xl bg-opacity-25 relative">
            {children}
        </div>
    </div>
}