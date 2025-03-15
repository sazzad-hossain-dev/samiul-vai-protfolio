import React from "react";
import Profile from "./Profile";

const Hero = () => {
    return (
        <div className="container mx-auto px-3 min-h-screen flex flex-col-reverse md:flex-row gap-6">
            <div className="min-h-screen bg-light-button w-full"></div>
            <Profile />
        </div>
    );
};

export default Hero;
