import { useState } from "react";
import SectionTitle from "./SectionTitle";
import YPIM from "./works/YPIM";
import Indomaigoo from "./works/Indomaigoo";
import Kupu from "./works/Kupu";


const Experience = () => {
    const [workYPIM, setworkYPIM] = useState(true);
    const [workIndomaigoo, setworkIndomaigoo] = useState(false);
    const [workKupu, setworkKupu] = useState(false);


    const handleYPIM = () => {
        setworkYPIM(true);
        setworkIndomaigoo(false);
        setworkKupu(false);
    };
    const handleIndomaigoo = () => {
        setworkYPIM(false);
        setworkIndomaigoo(true);
        setworkKupu(false);
    };
    const handleKupu = () => {
        setworkYPIM(false);
        setworkIndomaigoo(false);
        setworkKupu(true);
    };
    return (
        <section
            id="experience"
            className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
        >
            <SectionTitle title="Work Experience" titleNo="" />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-32 flex flex-col">
                    <li
                        onClick={handleYPIM}
                        className={`${workYPIM
                            ? "border-l-textOrange text-textOrange"
                            : "border-l-hoverColor text-textDark"
                            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
                    >
                        YPIM
                    </li>
                    <li
                        onClick={handleIndomaigoo}
                        className={`${workIndomaigoo
                            ? "border-l-textOrange text-textOrange"
                            : "border-l-hoverColor text-textDark"
                            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
                    >
                        PT. Indo Mai Goo
                    </li>
                    <li
                        onClick={handleKupu}
                        className={`${workKupu
                            ? "border-l-textOrange text-textOrange"
                            : "border-l-hoverColor text-textDark"
                            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
                    >
                        CV. Kupu Digital
                    </li>
                </ul>
                {workYPIM && <YPIM />}
                {workIndomaigoo && <Indomaigoo />}
                {workKupu && <Kupu />}
            </div>
        </section>
    );
};

export default Experience;
