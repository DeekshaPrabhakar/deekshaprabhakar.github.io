"use client";

import React from "react";
import Image from "next/image";

export default function Header() {
    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id);
        element?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    };
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <header className="bg-white text-cyan-500 fixed top-0 z-10 w-full sm:flex sm:justify-between sm:items-center sm:px-1 sm:py-3 shadow-md">
            <div className="flex items-center justify-between px-1">
                <div className="flex items-center px-1 py-1 sm:p-0">
                    <Image
                        src="/clover.svg"
                        alt="Four leaf clover image"
                        width={0}
                        height={0}
                        sizes="(max-width: 640px) 100vw, 640px"
                        className="h-12 w-12"
                    />
                    <span>
                        <h1 className="text-2xl">Deeksha Prabhakar</h1>
                        <h3 className="text-lg text-cyan-300">
                            Ideas to Reality
                        </h3>
                    </span>
                </div>
                <div className="sm:hidden">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="block hover:text-cyan-400 focus:text-cyan-400 focus:outline-none px-2 py-3"
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                        >
                            {isOpen && (
                                <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            )}
                            {!isOpen && (
                                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            <nav className={`${isOpen ? "block" : "hidden"} sm:block`}>
                <ul className="px-2 pt-2 pb-4 sm:flex sm:p-0">
                    <li className="block px-2 py-1 font-semibold rounded hover:bg-cyan-200">
                        <a onClick={() => scrolltoHash("about")}>About</a>
                    </li>
                    <li className="mt-1 block px-2 py-1 font-semibold rounded hover:bg-cyan-200 sm:mt-0 sm:ml-2">
                        <a onClick={() => scrolltoHash("experience")}>Experience</a>
                    </li>
                    <li className="mt-1 block px-2 py-1 font-semibold rounded hover:bg-cyan-200 sm:mt-0 sm:ml-2">
                        <a onClick={() => scrolltoHash("projects")}>Projects</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
