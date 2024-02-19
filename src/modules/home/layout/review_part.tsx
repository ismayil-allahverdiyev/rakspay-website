import ReviewGreyTriangle from '../../../assets/images/review-grey-triangle.svg';
import GreenTriangle from '../../../assets/images/green-triangle.svg';
import ReviewComponent from "../features/review_component";
import CustomButtonComponent from '../../shared/components/general/custom_button_component';

export default function ReviewPart() {
    return <div className='relative overflow-clip'>
        <img src={ReviewGreyTriangle} alt="" className='rotate-[10deg] absolute -right-[10%] top-[0%]' />
        <img src={GreenTriangle} alt="" className='rotate-[-10deg] absolute -left-[12%] bottom-[2%] z-0' />
        <div className="flex justify-center items-center mx-[5%] my-[3%] text-white">
            <div className="w-[60%]">
                <ReviewComponent />

                <p className="my-4 mb-8 text-9xl text-primary text-center font-title font-extrabold tracking-[1.5rem] drop-shadow-[8px_4px_var(--tw-shadow-color)] shadow-gray-500">
                    Why us?
                </p>
                <ReviewComponent style="mx-auto" />
            </div>
            <div className="w-[30%]">
                <ReviewComponent style="w-full" />
            </div>
        </div>
        <CustomButtonComponent title="More reviews" style='absolute bottom-24 right-12' />
    </div>
}