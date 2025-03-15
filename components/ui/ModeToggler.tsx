"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { LuMoonStar } from "react-icons/lu";

const ModeToggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    return (
        <div className="relative overflow-visible ">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg cursor-pointer"
            >
                {theme === "dark" && <LuMoonStar color="#0EA5E9" />}
                {theme === "light" && <FiSun color="#0EA5E9" />}
                {theme === "system" && <LuMoonStar color="#B0B0B0" />}
            </button>

            {isOpen && (
                <div className="absolute font-inter z-50 font-semibold bg-light-card dark:bg-dark-card top-12 left-[1px] -translate-x-1/2 md:right-[-38px] md:left-auto py-2 rounded-xl shadow-lg min-w-36 w-auto">
                    <button
                        onClick={() => {
                            setTheme("light");
                            setIsOpen(false);
                        }}
                        className={`w-full py-2 px-4 flex items-center gap-3 rounded-lg transition-colors ${
                            theme === "light"
                                ? "bg-dark-hover text-[#0EA5E9]"
                                : "hover:bg-gray-200 dark:hover:bg-gray-700 text-light-text dark:text-dark-text"
                        }`}
                    >
                        <FiSun />
                        Light
                    </button>

                    <button
                        onClick={() => {
                            setTheme("dark");
                            setIsOpen(false);
                        }}
                        className={`w-full py-2 px-4 flex items-center gap-3 rounded-lg transition-colors ${
                            theme === "dark"
                                ? "bg-dark-hover text-[#0EA5E9]"
                                : "hover:bg-gray-200 dark:hover:bg-gray-700 text-light-text dark:text-dark-text"
                        }`}
                    >
                        <LuMoonStar />
                        Dark
                    </button>

                    <button
                        onClick={() => {
                            setTheme("system");
                            setIsOpen(false);
                        }}
                        className={`w-full py-2 px-4 flex items-center gap-3 rounded-lg transition-colors ${
                            theme === "system"
                                ? "bg-dark-hover text-[#0EA5E9]"
                                : "hover:bg-gray-200 dark:hover:bg-gray-700 text-light-text dark:text-dark-text"
                        }`}
                    >
                        <HiMiniComputerDesktop />
                        System
                    </button>
                </div>
            )}
        </div>
    );
};

export default ModeToggle;
