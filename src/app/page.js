'use client';

import { useState } from 'react';
import backgroundImage from '../app/asserts/close-up-engraving-art-tools.webp';
import { Cormorant_Garamond } from 'next/font/google';
import { IoIosArrowRoundForward } from "react-icons/io";

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: '300' });

export default function Home() {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = async () => {
    if (!email || !email.includes('@')) {
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('https://demigodhouse.com/api/user/send/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert( 'Email submitted successfully!');
        setEmail('');
        
      } else {
        setStatusMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setStatusMessage('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-[100vh] bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <header className="flex justify-between items-center px-8 py-3 bg-slate-100 opacity-75 text-black">
        <div className="text-2xl tracking-widest px-2">
          <img
            src='/art_logo_finel-removebg-preview.png'
            width={200}
            height={100}
            alt="Logo"
            className='px-2'
          />
        </div>
      </header>

      <div className="flex-grow flex flex-col justify-center items-center gap-7">
        <div
          className="flex border-none flex-col justify-center items-center gap-7 p-8 bg-black bg-opacity-20"
          style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8))" }}
        >
          <p
            className={`text-[72px] leading-[64px] tracking-widest text-black ${cormorant.className}`}
            style={{ textShadow: "0 0 8px rgba(255,255,255,0.4)" }}
          >
            <span>LUXURIOUS</span><br /><span>ARTIFACTS</span>
          </p>

          <h2
            className="text-5xl font-extralight"
            style={{ textShadow: "0 0 8px rgba(255,255,255,0.4)" }}
          >
            TAILORED TO ELEVATE YOUR SPACE
          </h2>

          <div className="w-96">
            <div className="bg-white w-full py-3 px-3 flex justify-between items-center group relative">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-0 outline-none"
                  placeholder="Enter Email"
                />
              </div>
              <button
                onClick={handleEmailSubmit}
                disabled={loading}
                className="flex items-center gap-1 ml-2"
              >
                <span>{loading ? 'Sending...' : 'Email Us'}</span>
                <IoIosArrowRoundForward
                  size={30}
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300"
                />
              </button>
            </div>
            {/* {statusMessage && (
              <p className="text-sm mt-2 text-white bg-black bg-opacity-40 p-2 rounded">
                {statusMessage}
              </p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
