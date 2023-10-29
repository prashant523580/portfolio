
import { motion } from "framer-motion"
import { styles } from '../style'
import { staggerContainer } from '../utils/motion'
function SectionWrapper(Component: any, idName: any) {
    return function HOC() {

        return (
            <motion.section
                variants={staggerContainer("","")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0 `}
            >
                <span className='hash-span mt-10' id={idName}>
                    &nbsp;
                    <Component />
                </span>
            </motion.section>
        )
    }
}

export default SectionWrapper