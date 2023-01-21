import React from "react";
import Link from "next/link";

export const Header = (): JSX.Element => {
    const navItems = [
        {
            text: "test page",
            path: "/test",
        },
        {
            text: "link 2",
            path: "/",
        },
        {
            text: "link 3",
            path: "/",
        },
        {
            text: "link 4",
            path: "/",
        },
    ];

    return (
        <header
            data-testid="section--header"
            className="header bg-white border-b"
        >
            <div className="container flex flex-1 justify-between items-center h-full w-full max-w-full px-4">
                <nav>
                    <ul className="flex items-center">
                        {navItems.map((item, index) => (
                            <li key={index} className="px-4">
                                <Link href={item.path}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
