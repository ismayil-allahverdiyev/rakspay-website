import { Provider } from 'react-redux';
import FooterFeature from '../shared/features/footer_feature';
import DescriptionPart from './layout/description_part';
import DetailsPart from './layout/details_part';
import ReviewPart from './layout/review_part';
import { SelectedReviewStore } from './store';

export function HomePageView() {
    return <div>
        <DescriptionPart />
        <DetailsPart />
        <Provider store={SelectedReviewStore}>
            <ReviewPart />
        </Provider>
        <FooterFeature />
    </div>;
}