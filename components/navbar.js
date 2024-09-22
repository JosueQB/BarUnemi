import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="bg-gray-50 w-64 h-screen p-4 ">
            <div className="flex flex-col items-center justify-center">
                <div className='flex'>
                    <a className="text-yellow-500 font-extrabold " href="/pages/inicio">
                        <Image src="/ibar.png" alt="Ibar Logo" height={10} width={150} />
                    </a>
                    
                </div>
                {/* Puedes agregar más elementos al navbar aquí si lo deseas */}
            </div>
        </nav>
    );
}


