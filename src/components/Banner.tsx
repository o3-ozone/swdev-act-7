'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Banner() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const bannerImages = [
    '/img/cover.jpg',
    '/img/cover2.jpg',
    '/img/cover3.jpg',
    '/img/cover4.jpg'
  ];
  
  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };
  
  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    router.push('/venue');
  };
  
  return (
    <div 
      className="relative w-full h-96 mb-8 cursor-pointer" 
      onClick={handleImageClick}
    >
      <Image 
        src={bannerImages[currentImageIndex]} 
        alt="Event Banner" 
        fill 
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h1 className="text-4xl font-bold mb-4">where every event finds its venue</h1>
          <p className="text-xl mb-8">Discover amazing spaces for your next event</p>
        </div>
      </div>
      <button 
        onClick={handleButtonClick}
        className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition"
      >
        Select Venue
      </button>
    </div>
  );
}