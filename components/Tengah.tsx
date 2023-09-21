import { motion } from "framer-motion";
import TypingText from '../components/TypingText';

const Tengah = () => {
    return (
        <section
            id='home'
            className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
        >
            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='text-lg font-titleFont tracking-wide text-textLight'
            ><span className="text-textOrange font-semibold">Hallo</span>, My Name is :
            </motion.h3>
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-4xl lgl:txt-6xl font-titleFont font-semibold flex flex-col text-textOrange"
            >
                <TypingText text="Ricky Darmawan Widjanarko." />
                <span className="text-textLight mt-2 lgl:mt-4">
                    <TypingText text="Web Developer" />
                </span>
            </motion.h1>
            <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-base md:max-w-[650px] text-textDark font-medium"
            >
                I am a web developer with 2 years of experience in PHP. I have a strong foundation in web application development using the PHP programming language. <br /><br />
                <a href="" target="_blank">
                    {" "}
                    <span className="text-textOrange inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
                        Learn More
                        <span className="absolute w-full h-[1px] bg-textOrange left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500">
                        </span>
                    </span>
                </a>
            </motion.p>
            <a href="#project" target="_blank"></a>
            <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="w-52 h-14 text-sm font-titleFont border border-textOrange rounded-md text-textOrange 
            tracking-wide hover:bg-hoverColor duration-300">
                My Project
            </motion.button>
        </section>
    )
}

export default Tengah