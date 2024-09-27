"use client";

import React from "react";
import {
    FaHouse,
    FaArrowRightArrowLeft,
    FaMoneyBill,
    FaCalculator,
} from "react-icons/fa6";

import Link from "next/link";
import {usePathname} from "next/navigation";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
} from "@/components/ui/sheet";
import {RiBillLine} from "react-icons/ri";

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
    const pathname = usePathname();

    const links1 = [
        {
            name: "Inicio",
            url: "/",
            icon: <FaHouse/>,
        },
        {
            name: "Cuentas",
            url: "/cuentas",
            icon: <FaMoneyBill/>,
        },
        {
            name: "Transferencias",
            url: "/transferencias",
            icon: <FaArrowRightArrowLeft/>,
        },
        {
            name: "Conversor",
            url: "/conversor",
            icon: <FaCalculator/>,
        },
        {
            name: "Pago de servicios",
            url: "/pago-de-servicios",
            icon: <RiBillLine />,
        },
    ];

    const links2 = [
        /* {
          name: "Configuración",
          url: "/configuracion",
          icon: <IoMdSettings />,
        }, */
    ];

    return (
        <>
            <aside
                className="hidden md:block md:w-[220px] lg:w-[300px] fixed bg-gray-200 mt-14 h-[calc(100vh-56px)] p-3">
                <nav className="flex flex-col justify-between h-full">
                    <NavLinks
                        links1={links1}
                        links2={links2}
                        pathname={pathname}
                        setSidebarOpen={setSidebarOpen}
                    />
                </nav>
            </aside>
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetContent side="left" className="pt-12">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <img className="w-12" src="/logo.webp" alt="Rossum Logo"/>
                    <div className="pt-4 flex flex-col justify-between h-[calc(100%-30px)]">
                        <NavLinks
                            links1={links1}
                            links2={links2}
                            pathname={pathname}
                            setSidebarOpen={setSidebarOpen}
                        />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};

const NavLinks = ({links1, links2, pathname, setSidebarOpen}) => {
    return (
        <>
            <div className="flex flex-col gap-1.5">
                {links1.map((link, index) => (
                    <Link key={index} href={link.url}>
                        <div
                            onClick={() => {
                                setSidebarOpen(false);
                            }}
                            className={`${
                                pathname === link.url
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-gray-300"
                            } rounded-lg py-0.5 px-3 w-full flex items-center gap-1.5`}
                        >
                            {link.icon}
                            {link.name}
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex flex-col gap-1.5">
                {links2.map((link, index) => (
                    <Link
                        onClick={(e) => {
                            setSidebarOpen(false);
                        }}
                        key={index}
                        href={link.url}
                    >
                        <div
                            className={`${
                                pathname === link.url
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-gray-300"
                            } rounded-lg py-0.5 px-3 w-full flex items-center gap-1.5`}
                        >
                            {link.icon}
                            {link.name}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Sidebar;
