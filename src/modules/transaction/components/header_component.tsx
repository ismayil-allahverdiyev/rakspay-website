import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"

export default function HeaderComponent() {
    var t = useTranslation("global").t;

    var fadeInVariations = {
        initial: {
            opacity: 0,
            y: -20,
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    };

    return <motion.p
        initial="initial"
        whileInView="animate"
        variants={fadeInVariations}
        transition={{ duration: 1.5 }}
        className="font-title md:text-6xl sm:text-5xl text-4xl font-semibold mx-auto text-center py-8">
        <span className="text-primary">{t("transaction.title.part_1")}</span>{t("transaction.title.part_2")}<br />{t("transaction.title.part_3")}<span className="text-primary">{t("transaction.title.part_4")}</span>
    </motion.p>
}