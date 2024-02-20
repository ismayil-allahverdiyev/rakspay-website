import Navbar from "../../shared/features/navbar_feature";
import HeaderComponent from "../components/header_component";
import DescriptionBackground from "../features/description_background";
import MainTransactionFeeature from "../features/main_transaction_feature";

export default function MainPageLayout() {
    return <DescriptionBackground>
        <Navbar />
        <HeaderComponent />
        <MainTransactionFeeature />
    </DescriptionBackground >
}