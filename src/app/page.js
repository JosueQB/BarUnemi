"use client";
import Image from 'next/image';
import Link from 'next/link'

export default function Home() {

  return (
    <main className="flex min-h-screen justify-center items-center p-24">
      <div>
      <Image src="/ibarWrite.png" alt="Vercel Logo" width={372} height={16} />
        <Link href={'pages/inicio'}>
          <button
            className="ml-2 bg-yellow-500 text-blue-950 px-4 py-2 rounded-lg text-2xl font-extrabold content-center"
            type="submit"
          >
            VER &rarr;
          </button>
        </Link>
      </div>
    </main>
  );
}
