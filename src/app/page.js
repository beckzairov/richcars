import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-[#1D1F21] text-white min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>My Taplink Page</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </Head>

      <main className="container max-w-3xl mx-auto p-4">
        <img src="/images/logo-horizontal.png" alt="Logo" className="w-64 mb-8 text-[#F9D607]" />
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">Bizning ijtimoiy tarmoqlar</h1>
        <p className="text-lg mb-6 italic text-center border-l-4 border-[#F9D607] pl-4">Life is too short to drive slow.</p>
        <ul className="flex flex-col items-center space-y-16 md:flex-row md:justify-between md:space-y-0 w-full mx-auto">
          <li className='hover:cursor-pointer text-[#F9D607] border-[#F9D607] border px-28 py-2 rounded-md hover:text-white hover:bg-[#F9D607] transition duration-300'>
            <a
              href="#"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
          </li>
          <li className="hover:cursor-pointer text-[#F9D607] border-[#F9D607] border px-28 py-2 rounded-md hover:text-white hover:bg-[#F9D607] transition duration-300">
            <a 
              href="#" 
            >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
            </a>
          </li>
          <li className="hover:cursor-pointer text-[#F9D607] border-[#F9D607] border px-28 py-2 rounded-md hover:text-white hover:bg-[#F9D607] transition duration-300">
            <a 
              href="#" 
            >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg>
            </a>
          </li>
          <li className="hover:cursor-pointer border-[#F9D607] border px-28 py-2 rounded-md text-[#F9D607] hover:text-white hover:bg-[#F9D607] transition duration-300">
            <a 
              href="#" 
            >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
            </a>
          </li>
        </ul>
        <section className="services mt-8"> {/* Add margin-top for spacing */}
          <h2 className="text-2xl font-bold mb-4">Xizmatlar</h2>
          <ul className="list-disc pl-6"> {/* Use list-disc for default markers, adjust pl-6 for left padding */}
            <li>Tanirovka</li>
            <li>Rangli Qoplamalar</li>
            <li>Akvaprint</li>
            <li>Branirovka Kuzov</li>
            <li>Chexol Polik</li>
            <li>Shumo Izolyatsiya</li>
            <li>Keramika</li>
          </ul>
        </section>

        <section className='my-8'>
          <h2 className="text-2xl font-bold mb-4 text-center text-[#F9D607]">Filiallar</h2>
          <ul className='my-8'>
            <li className='text-xl font-bold text-center'>
             Chilonzor
            </li>
            <li className="mb-2 hover:cursor-pointer border-[#F9D607] border px-28 py-2 rounded-md text-[#F9D607] hover:text-white hover:bg-[#F9D607] transition duration-300">
              Yandex
            </li>
            <li className="mt-2 hover:cursor-pointer border-[#F9D607] border px-28 py-2 rounded-md text-[#F9D607] hover:text-white hover:bg-[#F9D607] transition duration-300">
              Google Maps
            </li>
          </ul>
          <ul className='my-8'>
            <li className='text-xl font-bold text-center'>
             Chilonzor
            </li>
            <li className="mb-2 hover:cursor-pointer border-[#F9D607] border px-28 py-2 rounded-md text-[#F9D607] hover:text-white hover:bg-[#F9D607] transition duration-300">
              Yandex
            </li>
            <li className="mt-2 hover:cursor-pointer border-[#F9D607] border px-28 py-2 rounded-md text-[#F9D607] hover:text-white hover:bg-[#F9D607] transition duration-300">
              Google Maps
            </li>
          </ul>
          <ul className='my-8'>
            <li className='text-xl font-bold text-center'>
             Chilonzor
            </li>
            <li className="mb-2 hover:cursor-pointer border-[#F9D607] border px-28 py-2 rounded-md text-[#F9D607] hover:text-white hover:bg-[#F9D607] transition duration-300">
              Yandex
            </li>
            <li className="mt-2 hover:cursor-pointer border-[#F9D607] border px-28 py-2 rounded-md text-[#F9D607] hover:text-white hover:bg-[#F9D607] transition duration-300">
              Google Maps
            </li>
          </ul>
          <ul className='my-8'>
            <li className='text-xl font-bold text-center'>
             Chilonzor
            </li>
            <li className="mb-2 hover:cursor-pointer border-[#F9D607] border px-28 py-2 rounded-md text-[#F9D607] hover:text-white hover:bg-[#F9D607] transition duration-300">
              Yandex
            </li>
            <li className="mt-2 hover:cursor-pointer border-[#F9D607] border px-28 py-2 rounded-md text-[#F9D607] hover:text-white hover:bg-[#F9D607] transition duration-300">
              Google Maps
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
