"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { socialLinks } from "@/data/constant";
import Link from "next/link";
const Profile = () => {
    return (
        <div className="bg-light-card  text-center rounded-md  dark:bg-dark-card px-6 py-4 w-[min(100%,570px)]">
            <Image
                src={`/assets/profile.jpg`}
                alt="ProfileImage"
                className="rounded-md"
                height={350}
                width={500}
            />
            <h2 className="seconderyHeading">Samiul Alam Khan</h2>
            <p className="profileDescription">Founder & CEO, XZ Enterprises</p>
            <p className="profileDescription ">
                <Typewriter
                    words={["E-commerce", "Trading", "Business Consulting"]}
                    loop={Infinity}
                    cursor
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </p>

            <p className="profileDescription">Sirajganj, Bangladesh</p>
            <div className="flex justify-center items-center gap-8 py-3">
                {socialLinks.map(({ url, Icon }) => (
                    <Link
                        className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-light-hover hover:text-[#0EA5E9] dark:hover:bg-dark-hover p-3 rounded-full"
                        key={url}
                        href={url}
                    >
                        <Icon size={26} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Profile;
