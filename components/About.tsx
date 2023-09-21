import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
        >
            <SectionTitle title="About Me" titleNo="" />
            <div className="flex flex-col lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                    <p>
                        {'Hello there!'} <br /> {'My name is Ricky Darmawan Widjanarko. Has two years experience in creating website-based applications.'}
                    </p>
                    <p>
                        {'I have completed my'} <span className="text-textOrange">{'Bachelors degree'}</span>{'in the field of'}<span className="text-textOrange">{'Informatics Engineering'}</span> {'in'} <span className="text-textOrange">{'2023.'}</span> {'Throughout my education, I have also been working at an educational foundation in'} <span className="text-textOrange">{'Malang-East Java'}</span>{', up to the present.'}
                    </p>
                    <p>{'Here are a few technologies I have been working with recently:'}</p>
                    <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">                         <li className="flex items-center gap-2">
                        <span className="text-textOrange">
                            <AiFillThunderbolt />
                        </span>
                        PHP
                    </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textOrange">
                                <AiFillThunderbolt />
                            </span>
                            {'Bootstrap'}
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textOrange">
                                <AiFillThunderbolt />
                            </span>
                            {'HTML'}
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textOrange">
                                <AiFillThunderbolt />
                            </span>
                            {'CodeIgniter'}
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textOrange">
                                <AiFillThunderbolt />
                            </span>
                            {'CSS'}
                        </li>
                        <li className="flex items-center gap-2">
                            <span
                                className="text-textOrange">
                                <AiFillThunderbolt />
                            </span>
                            {'MySQL'}
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textOrange">
                                <AiFillThunderbolt />
                            </span>
                            {'Javascript'}
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textOrange">
                                <AiFillThunderbolt />
                            </span>
                            {'Wordpress'}
                        </li>
                        <li
                            className="flex items-center gap-2">
                            <span className="text-textOrange">
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="w-full lgl:w-1/3 h-80 relative group">
                    <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
                        <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                            <Image
                                className="rounded-lg h-full object-cover"
                                src={profileImg}
                                alt="profileImg"
                            />
                            {/* <div className="hidden lgl:inline-block absolute w-full h-80 bg-textOrange/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div> */}
                        </div>
                    </div>
                    {/* <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textOrange rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div> */}
                </div>
            </div>
        </section>
    );
};

export default About;
