import Image from 'next/image';
import backgroundImage from '../app/asserts/close-up-engraving-art-tools.webp';
import logoImage from '../app/asserts/art_logo_finel-removebg-preview.png';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: '300' });
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <div
      className="h-[100vh] bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >

      <header className="flex justify-between items-center px-8 py-3 bg-slate-100 opacity-75  text-black">
        <div className="text-2xl  tracking-widest px-2">
          <Image src={logoImage} width={150} height={100} alt='logo'>

          </Image>
        </div>
        <nav className="space-x-6 text-lg">
          <a href="#" className="hover:underline">
            Blog
          </a>
          <button className="bg-[#8D8271] text-white px-3 py-3 text-sm">BOOK A CALL</button>

        </nav>
      </header>


      <div className="flex-grow flex flex-col justify-center items-center gap-7">
        <div
          className="flex  border-none flex-col justify-center items-center gap-7  p-8 bg-black bg-opacity-20"
          style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8))" }}
        >
          <p
            className={`text-[72px] leading-[64px] tracking-widest text-black ${cormorant.className}`}
            style={{ textShadow: "0 0 8px rgba(255,255,255,0.4)" }}          >
            <span>LUXURIOUS</span>
            <br />
            <span>ARTIFACTS</span>
          </p>


          <h2
            className="text-5xl font-extralight"
            style={{ textShadow: "0 0 8px rgba(255,255,255,0.4)" }}          >
            TAILORED TO ELEVATE YOUR SPACE
          </h2>
          <div className='w-96'>
            <button className='bg-white w-[500px] py-3 px-3 flex justify-between items-center group relative '>
              <div>
                <input type='email' className='border-0 outline-none' placeholder='Enter Email'></input>
              </div>
              <div className='flex justify-center items-center'>
                <span>Email Us</span>
                <IoIosArrowRoundForward
                  size={30}
                  className="opacity-0  group-hover:opacity-100 group-hover:translate-x-0  translate-x-2 transition-all duration-300"
                />
              </div>
            </button>
          </div>        </div>
      </div>

    </div>
  );
}
