"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();
    const isMainContentPage = pathname === "/mainContent";

    return (
        <div className="h-[40px] bg-white shadow-lg flex">
            <div className={"w-1/3 h-full bg-red-500"}>
                {isMainContentPage ? "Адаптивная страница" : "Обычная страница"}
            </div>
            <div className={"w-1/3 h-full bg-green-500"}></div>
            <div className={"w-1/3 h-full bg-blue-500"}></div>
        </div>
    );
};

export default Header;
