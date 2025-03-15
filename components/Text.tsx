"use client";
import React from "react";
import { Sun, Moon } from "lucide-react"; // Importing icons
import { useTheme } from "next-themes"; // To toggle themes

const ModeToggles = () => {
    const { theme, setTheme } = useTheme(); // Hook to access and set the theme

    // Function to handle theme toggle
    const handleThemeToggle = () => {
        if (theme === "dark") setTheme("light"); // Switch to light mode
        else if (theme === "light") setTheme("dark"); // Switch to dark mode
        else setTheme("system"); // Switch to system theme
    };

    return (
        <div className="relative">
            {/* Toggle Button */}
            <button
                onClick={handleThemeToggle}
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300"
            >
                {/* Sun Icon (Light Mode) */}
                <Sun
                    className={`absolute h-6 w-6 text-yellow-500 transition-all duration-300 ${
                        theme === "dark" ? "opacity-0" : "opacity-100"
                    }`}
                />
                {/* Moon Icon (Dark Mode) */}
                <Moon
                    className={`absolute h-6 w-6 text-gray-300 transition-all duration-300 ${
                        theme === "light" ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span className="sr-only">Toggle Theme</span>
            </button>

            {/* Dropdown Menu for theme options */}
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <button
                    onClick={() => setTheme("light")}
                    className="block text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    Light Mode
                </button>
                <button
                    onClick={() => setTheme("dark")}
                    className="block text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    Dark Mode
                </button>
                <button
                    onClick={() => setTheme("system")}
                    className="block text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    System Default
                </button>
            </div>
        </div>
    );
};

export default ModeToggles;
