import ReviewGreyTriangle from '../../../assets/images/review-grey-triangle.svg';
import GreenTriangle from '../../../assets/images/green-triangle.svg';
import ReviewFeature from "../features/review_feature";
import CustomButtonComponent from '../../shared/components/general/custom_button_component';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { AppDispatch, getSelectedReviews, useAppSelector } from '../store';
import { useDispatch } from 'react-redux';

export default function ReviewPart() {
    var dispatch = useDispatch<AppDispatch>();

    var reviewList = useAppSelector((state) => state.SelectedReview.reviewList);

    useEffect(() => {
        dispatch(getSelectedReviews(dispatch));
    }, [dispatch]);

    return <div className='relative overflow-clip pb-6'>
        <img src={ReviewGreyTriangle} alt="" className='rotate-[10deg] absolute -right-[10%] top-[0%]' />
        <img src={GreenTriangle} alt="" className='rotate-[-10deg] absolute -left-[12%] bottom-[2%] z-0' />
        <div className="flex justify-center items-center lg:mx-[5%] mx-4 my-[3%] text-white md:flex-row flex-col">
            <div className="w-full">
                <WhyUsPart style='md:hidden block' />
                <ReviewFeature style="md:mx-0 md:my-0 ml-8 my-4" description={reviewList.length < 3 ? "" : reviewList[0].description} from={reviewList.length < 3 ? "" : reviewList[0].from} name={reviewList.length < 3 ? "" : reviewList[0].name} />
                <WhyUsPart style='md:block hidden' />
                <ReviewFeature style="md:mx-auto ml-auto mr-8 md:my-0 my-4" description={reviewList.length < 3 ? "" : reviewList[1].description} from={reviewList.length < 3 ? "" : reviewList[1].from} name={reviewList.length < 3 ? "" : reviewList[1].name} />
            </div>
            <div className="2xl:w-[30%] xl:w-[39%]">
                <ReviewFeature style="md:my-0 mb-4" description={reviewList.length < 3 ? "" : reviewList[2].description} from={reviewList.length < 3 ? "" : reviewList[2].from} name={reviewList.length < 3 ? "" : reviewList[2].name} />
            </div>
        </div>
        <CustomButtonComponent title="More reviews" style='absolute md:bottom-24 nd:right-12 bottom-4 right-8' url='/reviews' />
    </div>
}

interface WhyUsPartProps {
    style?: string;
}

function WhyUsPart(props: WhyUsPartProps) {
    const t = useTranslation("global").t;

    return <p className={`my-4 mb-8 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-primary text-center font-title font-extrabold tracking-[1.5rem] drop-shadow-[8px_4px_var(--tw-shadow-color)] shadow-gray-500 ${props.style}`}>
        {t("home.why_us")}
    </p>
}