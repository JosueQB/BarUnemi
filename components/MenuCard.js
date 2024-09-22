// components/MenuCard.js
import Image from 'next/image';

const MenuCard = ({ image, title, price }) => {
  return (
    <div className=" grid bg-white p-4 border rounded-lg shadow-md">
      <div className='grid-1 p-10'>
        <Image src={image} alt={title} className="w-full h-40 object-cover rounded-lg" width={500} height={100} />
        <div className='flex'>
          <h1 className='flex text-xl'>🍴</h1>
          <h1 className="flex text-lg text-blue-950 mt-2 font-bold">{title}</h1>
        </div>
      </div>
      <div className='grid-1 p-5'>
        <h3 className='text-blue-950 font-extrabold'>Descripcion</h3>
        <p className="text-blue-950">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MenuCard;
