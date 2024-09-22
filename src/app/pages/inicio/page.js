import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center  w-full flex-1 text-center">
        <h1 className="flex flex-row text-9xl font-bold p-5">
          <Image src="/logoIbar.png" alt="Ibar Logo" height={5} width={120} />
          <a className="text-yellow-500 font-extrabold " href="">
            iBAR
          </a>
        </h1>
        <div className='flex justify-center py-5'>
          <button
            className="text-3xl ml-2 font-extrabold font-League Gothic bg-gray-50 text-slate-900 px-20 py-2 rounded-lg"
          >
            ¿Que hay para hoy?
          </button>
          <Link href={'chatbot'}>
            <button
              className="text-3xl ml-2 font-extrabold font-League Gothic bg-gray-50 text-slate-900 px-10 py-2 rounded-lg"
            >
              Entrar
            </button>
          </Link>

        </div>
{/* empieza la parte de las tarjetas de bares existentes */}
        <div className="flex items-center justify-around max-w-full mt-6 sm:w-full  bg-black p-4">

          {/* bloque 1 de tarjeta */}
          <div className='flex flex-col p-4'>
            <a
              href=""
              className="p-6 mt-6 text-left border w-96 rounded-xl  focus:text-blue-600"
            >
              {/* Titulo de bares existentes */}

              <h3 className="text-2xl font-bold text-center hover:text-yellow-600">Bar de la nena &rarr;</h3>
              
              {/* parrafo de bares existentes */}

              <p className="mt-4 text-xl">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
              </p>
            </a>

            {/* boton de ver menus */}
            <br />
            <Link href={'users/principal'}>
              <button className="text-2xl ml-2 font-extrabold bg-gray-50 text-slate-900 px-20 py-2 rounded-lg"
              >
                Ver menú
              </button>
            </Link>

          </div>
          {/* bloque 2 de tarjeta */}
          <div className='flex flex-col p-4'>
            <a
              href=""
              className="p-6 mt-6 text-left border w-96 rounded-xl  focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold text-center hover:text-yellow-600">Unibar &rarr;</h3>
              <p className="mt-4 text-xl">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
              </p>

            </a>
            <br />
            <Link href={'users/principal'}>
              <button className="text-2xl ml-2 font-extrabold bg-gray-50 text-slate-900 px-20 py-2 rounded-lg"
              >
                Ver menú
              </button>
            </Link>
          </div>
          {/* bloque 3 de tarjeta */}
          <div className='flex flex-col  p-4'>
            <a
              href=""
              className="p-6 mt-6 text-left border w-96 rounded-xl  focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold text-center hover:text-yellow-600">Polideportivo &rarr;</h3>
              <p className="mt-4 text-xl">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
              </p>

            </a>
            <br />
            <Link href={'users/principal'}>
              <button className="text-2xl ml-2 font-extrabold bg-gray-50 text-slate-900 px-20 py-2 rounded-lg"
              >
                Ver menú
              </button>
            </Link>
          </div>
        </div>
{/* Termina la parte de las tarjetas de bares existentes */}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <div>
          <a
            className="flex items-center justify-center"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/ibarWrite.png" alt="Vercel Logo" width={72} height={16} />
          </a>
          ©Desarrolladores Josue Quijije & Esau Gamboa {' '}
        </div>
      </footer>
    </div>
  );
}
