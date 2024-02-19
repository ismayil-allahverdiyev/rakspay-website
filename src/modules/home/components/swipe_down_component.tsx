import SwipeDown from '../../../assets/images/swipe-down.svg';

export default function SwipeDownComponent() {
    return <div className='absolute bottom-16 left-24' >
        <img src={SwipeDown} alt="" />
        <p className='absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-3/4 text-center text-custom-grey font-extrabold'>Swipe down</p>
    </div>
}