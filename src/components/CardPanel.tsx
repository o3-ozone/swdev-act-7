'use client'

import { useReducer } from 'react';
import Link from 'next/link';
import Card from './Card';

// Make sure this matches the type expected by Card component
interface Venue {
  id: string; 
  name: string;
  description: string;
  image: string;
}

type RatingAction = 
  | { type: 'set_rating'; venue: string; rating: number }
  | { type: 'remove_rating'; venue: string };

function ratingReducer(state: Map<string, number>, action: RatingAction): Map<string, number> {
  const newState = new Map(state);
  
  switch (action.type) {
    case 'set_rating':
      newState.set(action.venue, action.rating);
      return newState;
    case 'remove_rating':
      newState.delete(action.venue);
      return newState;
    default:
      return state;
  }
}

export default function CardPanel() {
  const venues: Venue[] = [
    { 
      id: "001",
      name: 'The Bloom Pavilion', 
      description: 'A stunning garden venue surrounded by exotic flowers and greenery, perfect for spring and summer weddings.',
      image: '/img/bloom.jpg' 
    },
    { 
      id: "002",
      name: 'Spark Space', 
      description: 'An industrial-chic loft with exposed brick walls and modern amenities, ideal for contemporary celebrations.',
      image: '/img/sparkspace.jpg' 
    },
    { 
      id: "003",
      name: 'The Grand Table', 
      description: 'A rooftop venue offering panoramic city views, perfect for memorable ceremonies and photographs.',
      image: '/img/grandtable.jpg' 
    }
  ];

  const initialRatings = new Map<string, number>();
  venues.forEach(venue => initialRatings.set(venue.name, 0));
  
  const [ratings, dispatch] = useReducer(ratingReducer, initialRatings);

  const handleRatingChange = (venue: string, newRating: number) => {
    dispatch({ type: 'set_rating', venue, rating: newRating });
  };

  const handleRemoveRating = (venue: string) => {
    dispatch({ type: 'remove_rating', venue });
  };

  return (
    <div className="container mx-auto px-4">
      {/* Venue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {venues.map((venue) => (
          <div key={venue.id} className="relative">
            <Link 
              href={`/venue/${venue.id}`}
              className="block"
            >
              <Card 
                venue={venue} 
                rating={ratings.get(venue.name) || 0}
                onRatingChange={(newRating: number) => handleRatingChange(venue.name, newRating)}
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Ratings List */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Venue Ratings</h2>
        <div className="space-y-2">
          {Array.from(ratings.entries()).map(([venue, rating]) => (
            rating > 0 && (
              <div 
                key={venue}
                data-testid={venue}
                className="p-3 bg-gray-100 rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-200"
                onClick={() => handleRemoveRating(venue)}
              >
                <span>{venue}</span>
                <span>Rating: {rating}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}