// components/Menu.js
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const MenuItem = ({ label, submenus, isOpen, toggleMenu }) => (
  <div className="relative inline-block">
    <button className="bg-gray-500 text-white px-4 py-2" onClick={toggleMenu}>
      {label}
    </button>

    {isOpen && (
      <div className="absolute mt-2 bg-white border text-black border-gray-300 rounded shadow">
        <ul>
          {submenus.map((submenu, index) => (
            <li key={index} className="p-2">
             <Link href={`/page/${submenu.replace(/\s+/g, '-').toLowerCase()}`} passHref>
  <div>{submenu}</div>
</Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const Menu = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const menus = [
    { label: 'Menu 1', submenus: ['Submenu 1.1', 'Submenu 1.2', 'Submenu 1.3'] },
    { label: 'Menu 2', submenus: ['Submenu 2.1', 'Submenu 2.2', 'Submenu 2.3'] },
    { label: 'Menu 3', submenus: ['Submenu 3.1', 'Submenu 3.2', 'Submenu 3.3'] },
    { label: 'Menu 4', submenus: ['Submenu 4.1', 'Submenu 4.2', 'Submenu 4.3'] },
    { label: 'Menu 5', submenus: ['Submenu 5.1', 'Submenu 5.2', 'Submenu 5.3'] },
  ];

  return (
    <div>
      {menus.map((menu, index) => (
        <MenuItem
          key={index}
          label={menu.label}
          submenus={menu.submenus}
          isOpen={openMenuIndex === index}
          toggleMenu={() => toggleMenu(index)}
        />
      ))}
    </div>
  );
};

export default Menu;
