import { navLinks } from "@/data/constant";
import Link from "next/link";
import ModeToggle from "./ModeToggler";

const Header = () => {
    return (
        <div className="bg-light-bg w-full h-auto dark:bg-dark-bg py-4">
            <header className="flex justify-center items-center gap-4 bg-light-card dark:bg-dark-card w-fit mx-auto py-2 px-4 rounded-2xl">
                <nav className="flex text-[min(4vw,16px)]  justify-center items-center gap-4">
                    {navLinks.map((link) => (
                        <Link
                            className="text-light-text dark:text-dark-text font-inter font-semibold block"
                            key={link.url}
                            href={link.url}
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
                <ModeToggle />
            </header>
        </div>
    );
};

export default Header;
