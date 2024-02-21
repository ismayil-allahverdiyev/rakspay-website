import Navbar from "../../shared/features/navbar_feature";
import HeaderComponent from "../components/header_component";
import DescriptionBackground from "../features/description_background";
import ReviewsFeature from "../features/reviews_feature";

export default function MainPart() {
    return <DescriptionBackground>
        <Navbar />
        <HeaderComponent />
        <ReviewsFeature />
    </DescriptionBackground >
}