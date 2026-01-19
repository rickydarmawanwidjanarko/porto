import React from "react";
import { ppdbImg, esuratImg, dailyImg, livingstoneImg } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
    return (
        <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
            <SectionTitle title="Some Projects" titleNo="" />
            {/* PPDB */}
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6">
                    <a
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="#"
                        target="_blank"
                    >
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={ppdbImg}
                                alt="ppdbImg"
                            />
                            <div className="absolute w-full h-full bg-textOrange/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                        <div>
                            <p className="font-titleFont text-textOrange text-sm tracking-wide">
                                Project 1
                            </p>
                            <h3 className="text-2xl font-bold">PPDB SMK PIM</h3>
                        </div>
                        <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                            The application is intended for the registration of new students at  <span className="text-textOrange">SMK PIM</span> and is web-based.{" "}
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                            <li>CodeIgniter 4</li>
                            <li>MySQL</li>
                            <li>Bootstrap 4</li>
                        </ul>
                    </div>
                </div>
                {/* End PPDB */}

                {/* E-Surat */}
                <div className="flex flex-col xl:flex-row-reverse gap-6">
                    <a
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="#"
                        target="_blank"
                    >
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={esuratImg}
                                alt="esuratImg"
                            />
                            <div className="absolute w-full h-full bg-textOrange/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
                        <div>
                            <p className="font-titleFont text-textOrange text-sm tracking-wide">
                                Project 2
                            </p>
                            <h3 className="text-2xl font-bold">E-Surat YPIM</h3>
                        </div>
                        <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                            The letter management application is intended for <span className="text-textOrange">Yayasan Putera Indonesia Malang</span> and is web-based.{" "}
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                            <li>CodeIgniter 4</li>
                            <li>MySQL</li>
                            <li>Bootstrap 4</li>
                            <li>Signature Pad</li>
                        </ul>
                    </div>
                </div>
                {/* End E-Surat */}

                {/* Daily */}
                <div className="flex flex-col xl:flex-row gap-6">
                    <a
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="#"
                        target="_blank"
                    >
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={dailyImg}
                                alt="dailyImg"
                            />
                            <div className="absolute w-full h-full bg-textOrange/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
                        <div>
                            <p className="font-titleFont text-textOrange text-sm tracking-wide">
                                Project 3
                            </p>
                            <h3 className="text-2xl font-bold">Daily-PIM</h3>
                        </div>
                        <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                            The daily employee activity management application is intended for <span className="text-textOrange">Yayasan Putera Indonesia Malang</span> and is web-based.{" "}
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                            <li>CodeIgniter 4</li>
                            <li>MySQL</li>
                            <li>Bootstrap 4</li>
                        </ul>
                    </div>
                </div>
                {/* End Daily */}
                {/* Livingstone */}
                <div className="flex flex-col xl:flex-row-reverse gap-6">
                    <a
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="#"
                        target="_blank"
                    >
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={livingstoneImg}
                                alt="livingstoneImg"
                            />
                            <div className="absolute w-full h-full bg-textOrange/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
                        <div>
                            <p className="font-titleFont text-textOrange text-sm tracking-wide">
                                Project 4
                            </p>
                            <h3 className="text-2xl font-bold">Livingstone | Upper room</h3>
                        </div>
                        <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                            Company Profile for <span className="text-textOrange">Livingstone | Upper room</span> and is web-based.{" "}
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                            <li>Wordpress</li>
                        </ul>
                    </div>
                </div>
                {/* End Livingstone */}
            </div>
        </section>
    );
};

export default Projects;
