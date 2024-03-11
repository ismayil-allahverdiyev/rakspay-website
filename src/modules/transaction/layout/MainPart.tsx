import { Provider } from "react-redux";
import Navbar from "../../shared/features/navbar_feature";
import HeaderComponent from "../components/header_component";
import DescriptionBackground from "../features/description_background";
import MainTransactionFeature from "../features/main_transaction_feature";
import { TransactionStore } from "../store";

export default function MainPageLayout() {
    return <DescriptionBackground>
        <Navbar />
        <Provider store={TransactionStore}>
            <HeaderComponent />
            <MainTransactionFeature />
        </Provider>
    </DescriptionBackground >
}