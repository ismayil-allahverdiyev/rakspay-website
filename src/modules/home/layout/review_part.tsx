import ReviewGreyTriangle from '../../../assets/images/review-grey-triangle.svg';
import GreenTriangle from '../../../assets/images/green-triangle.svg';
import ReviewFeature from "../features/review_feature";
import CustomButtonComponent from '../../shared/components/general/custom_button_component';

export default function ReviewPart() {
    return <div className='relative overflow-clip pb-6'>
        <img src={ReviewGreyTriangle} alt="" className='rotate-[10deg] absolute -right-[10%] top-[0%]' />
        <img src={GreenTriangle} alt="" className='rotate-[-10deg] absolute -left-[12%] bottom-[2%] z-0' />
        <div className="flex justify-center items-center lg:mx-[5%] mx-4 my-[3%] text-white md:flex-row flex-col">
            <div className="w-full">
                <WhyUsPart style='md:hidden block' />
                <ReviewFeature style="md:mx-0 md:my-0 ml-8 my-4" />
                <WhyUsPart style='md:block hidden' />
                <ReviewFeature style="md:mx-auto ml-auto mr-8 md:my-0 my-4" />
            </div>
            <div className="2xl:w-[30%] xl:w-[39%]">
                <ReviewFeature style="md:my-0 mb-4" />
            </div>
        </div>
        <CustomButtonComponent title="More reviews" style='absolute md:bottom-24 nd:right-12 bottom-4 right-8' url='/reviews' />
    </div>
}

interface WhyUsPartProps {
    style?: string;
}

function WhyUsPart(props: WhyUsPartProps) {
    return <p className={`my-4 mb-8 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-primary text-center font-title font-extrabold tracking-[1.5rem] drop-shadow-[8px_4px_var(--tw-shadow-color)] shadow-gray-500 ${props.style}`}>
        WHY US?
    </p>
}