import { useTranslation } from "react-i18next";
import LargeLogoComponent from "../../shared/components/general/large_logo_component";
import DetailsBoxFeature from "../features/details_box_feature";
import { motion } from "framer-motion";

export default function DetailsPart() {
    const t = useTranslation("global").t;

    var fadeInVariations = {
        initial: {
            opacity: 0,
            x: -80,
        },
        animate: {
            opacity: 1,
            x: 0,
        }
    };

    return <>
        <div className="flex items-center mx-[5%] mt-[2%] md:flex-row flex-col">
            <motion.div
                initial="initial"
                whileInView="animate"
                variants={fadeInVariations}
                transition={{ duration: 1.8 }}
                className="font-bold md:w-[35%] w-[65%] xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg md:text-left text-center md:my-0 my-8">
                {t("home.details.title")}
            </motion.div>
            <DetailsBoxFeature />
        </div>
        <LargeLogoComponent />
    </>
}