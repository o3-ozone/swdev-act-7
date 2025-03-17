import Image from 'next/image';
import Link from 'next/link';

type Params = {
  params: {
    vid: string;
  };
};

export default function VenueDetails({ params }: Params) {
  const { vid } = params;
  
  const venueData = new Map([
    ['001', { 
      id: '001', 
      name: 'The Bloom Pavilion', 
      image: '/img/bloom.jpg',
      description: 'A beautiful venue with modern amenities perfect for wedding ceremonies and receptions.'
    }],
    ['002', { 
      id: '002', 
      name: 'Spark Space', 
      location: 'Business District', 
      image: '/img/sparkspace.jpg',
      description: 'A versatile space ideal for corporate events and business meetings.'
    }],
    ['003', { 
      id: '003', 
      name: 'The Grand Table', 
      image: '/img/grandtable.jpg',
      description: 'An intimate venue with a rustic feel, perfect for dinner parties and small gatherings.'
    }],
  ]);
  
  const venue = venueData.get(vid);
  
  if (!venue) {
    return <div>Venue not found</div>;
  }
  
  return (
    <div className="container mx-auto p-4">
      <Link href="/venue" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
        ← Back to Venues
      </Link>
      <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <Image 
              src={venue.image} 
              alt={venue.name} 
              width={500} 
              height={300} 
              className="rounded-lg w-full h-auto"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">{venue.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}