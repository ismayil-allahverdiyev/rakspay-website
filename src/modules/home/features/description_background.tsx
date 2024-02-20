import GreyTriangle from '../../../assets/images/grey-triangle.svg';
import GreenTriangle from '../../../assets/images/green-triangle.svg';
import SwipeDownComponent from '../components/swipe_down_component';

export default function DescriptionBackground({ children }: any) {
    return <div className="h-screen w-full bg-black text-white relative overflow-hidden">
        <img src={GreyTriangle} alt="" className='rotate-[5deg] absolute -left-[20%] -top-[35%]' />
        <img src={GreenTriangle} alt="" className='rotate-[60deg] absolute -right-[10%] bottom-[20%]' />
        <div className="h-screen w-full bg-black backdrop-blur-xl bg-opacity-25 relative">
            {children}
        </div>
        <SwipeDownComponent />
    </div>
}