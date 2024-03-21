import DetailsBoxComponent from "./details_box_component";
import IconTime from "../../../assets/icons/icon-time.svg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function DetailsBoxStartComponent() {
    const t = useTranslation("global").t;

    var fadeInVariations = {
        initial: {
            opacity: 0,
            y: -150,
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    };

    return <motion.div
        initial="initial"
        whileInView="animate"
        variants={fadeInVariations}
        transition={{ duration: 1.8 }}
        className="space-y-2 w-1/3">
        <DetailsBoxComponent height="2xl:h-32 xl:h-28 lg:h-24 md:h-20 sm:h-16 h-12" />
        <DetailsBoxComponent icon={IconTime} title={<p className="z-10">{t("home.details.detail_1_1")}<br />{t("home.details.detail_1_2")}<br />{t("home.details.detail_1_3")}</p>} height="2xl:h-48 xl:h-42 lg:h-36 md:h-32 sm:h-28 h-24" position="lg:-bottom-[50%] -bottom-[60%] lg:-right-[20%] -right-[30%]" />
        <DetailsBoxComponent height="2xl:h-32 xl:h-28 lg:h-24 md:h-20 sm:h-16 h-12" />
    </motion.div>
}