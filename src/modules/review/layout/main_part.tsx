import { Provider } from "react-redux";
import Navbar from "../../shared/features/navbar_feature";
import HeaderComponent from "../components/header_component";
import DescriptionBackground from "../features/description_background";
import ReviewsFeature from "../features/reviews_feature";
import { ReviewStore } from "../store";

export default function MainPart() {
    return <DescriptionBackground>
        <Navbar />
        <Provider store={ReviewStore}>
            <HeaderComponent />
            <ReviewsFeature />
        </Provider>
    </DescriptionBackground >
}