// pages/menu.js
"use client";
import Image from 'next/image';
import Navbar from '../../../../../components/navbar';
import { useState } from 'react';
import MenuCard from '../../../../../components/MenuCard';

const menus = [
  { id: 1, title: 'Pescado a la plancha', price: 10, image: '/fish.jpg', bar: 'Bar de la nena' },
  { id: 2, title: 'Postre de vainilla', price: 12, image: '/postre.jpg', bar: 'Unibar' },
  { id: 3, title: 'Tacos de carne', price: 8, image: '/tacos.jpg', bar: 'Bar de la nena' },
  { id: 4, title: 'Hamburguesa de lomo', price: 15, image: '/hamburguesa.jpg', bar: 'Bar Polideportivo' },
  // Añadir más platillos
];

const Menu = () => {
  const [filter, setFilter] = useState('');

  const filteredMenus = menus.filter((menu) =>
    filter ? menu.bar === filter : true
  );

  return (
    <div className="flex justify-between">
      <Navbar />
      <main className="flex flex-1 p-2 min-h-screen flex-col items-center pt-14">

        <div className="container mx-auto px-4 ">
          <h1 className="flex flex-row text-9xl font-bold p-5 items-center justify-center">
            <Image src="/logoIbar.png" alt="Ibar Logo" height={5} width={120} />
            <a className="text-yellow-500 font-extrabold " href="">
              Menú
            </a>
          </h1>

          {/* Filtro por bar */}
          <div className="mb-4">
            <label htmlFor="filter" className="mr-2">Filtrar por Bar:</label>
            <select
              id="filter"
              className="p-2 border rounded-lg bg-black"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="Bar de la nena">Bar de la nena</option>
              <option value="Unibar">Unibar</option>
              <option value="Bar Polideportivo">Polideportivo</option>
            </select>
          </div>

          {/* Menú listado */}
          <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMenus.map((menu) => (
              <MenuCard
                key={menu.id}
                image={menu.image}
                title={menu.title}
                price={menu.price}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
