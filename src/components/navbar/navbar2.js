// components/Menu.js
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const MenuItem = ( { label, submenus, isOpen, toggleMenu } ) => (
    <div className="relative inline-block p-3  text-center">
        <button className="bg-white text-black  " onClick={toggleMenu}>
            {label}
        </button>

        {isOpen && (
            <div className="absolute mt-2 bg-white border text-black border-gray-300 rounded shadow">
                <ul>
                    {submenus.map( ( submenu, index ) => (
                        <li key={index} className="p-2">
                            <Link href={`/${ submenu.replace( /\s+/g, '-' ).toLowerCase() }`} passHref>
                                <div>{submenu}</div>
                            </Link>
                        </li>
                    ) )}
                </ul>
            </div>
        )}
    </div>
);

const Menu = () => {
    const [ openMenuIndex, setOpenMenuIndex ] = useState( null );

    const toggleMenu = ( index ) => {
        setOpenMenuIndex( ( prevIndex ) => ( prevIndex === index ? null : index ) );
    };

    const menus = [
        { label: 'SEO', submenus: [ 'SEO SERVICE', 'Submenu 1.2', 'Submenu 1.3' ] },
        { label: 'APP OPTIMIZATION', submenus: [ 'Submenu 2.1', 'Submenu 2.2', 'Submenu 2.3' ] },
        { label: 'CONTENT MARKETING ', submenus: [ 'Submenu 3.1', 'Submenu 3.2', 'Submenu 3.3' ] },
        { label: 'PAID MARKETING', submenus: [ 'Submenu 4.1', 'Submenu 4.2', 'Submenu 4.3' ] },
        { label: 'DESIGN & DEVELOPMENT', submenus: [ 'Submenu 5.1', 'Submenu 5.2', 'Submenu 5.3' ] },
    ];

    return (
        <div className=" hidden lg:flex justify-center items-center">
            {menus.map( ( menu, index ) => (
                <MenuItem
                    key={index}
                    label={menu.label}
                    submenus={menu.submenus}
                    isOpen={openMenuIndex === index}
                    toggleMenu={() => toggleMenu( index )}
                />
            ) )}
        </div>
    );
};

export default Menu;
