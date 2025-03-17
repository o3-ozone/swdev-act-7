'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Rating } from '@mui/material';

// Define interface for Card props
interface Venue {
  id: number | string;
  name: string;
  description: string;
  image: string;
}

interface CardProps {
  venue: Venue;
  rating: number;
  onRatingChange: (newRating: number, e: React.MouseEvent) => void;
}

export default function Card({ venue, rating, onRatingChange }: CardProps) {
  if (!venue) {
    return <div>Loading...</div>;
  }

  const handleRatingChange = (event: React.SyntheticEvent, newValue: number | null) => {
    if (newValue !== null) {
      // Get the original MouseEvent
      const mouseEvent = event.nativeEvent as MouseEvent;
      // Convert to React.MouseEvent
      const reactMouseEvent = event as unknown as React.MouseEvent;
      
      // Call the parent's onRatingChange with the new rating and the event
      onRatingChange(newValue, reactMouseEvent);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-64">
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{venue.name}</h3>
        <p className="text-gray-700 mb-4">{venue.description}</p>
        
        <div className="flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
          <Rating
            id={`${venue.name} Rating`}
            name={`${venue.name} Rating`}
            data-testid={`${venue.name} Rating`}
            value={rating}
            precision={1}
            onChange={handleRatingChange}
          />
        </div>
      </div>
    </div>
  );
}