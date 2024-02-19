import Navbar from "../../shared/features/navbar_feature";
import DescriptionBackground from "../features/description_background";

export default function MainPageLayout() {
    return <DescriptionBackground>
        <Navbar />
        <p className="font-title text-6xl font-semibold mx-auto text-center"><span className="text-primary">Money</span> transaction<br />made <span className="text-primary">easy!</span></p>
    </DescriptionBackground>
}