import Banner from '@/components/Banner';

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to Venue Finder</h1>
        <p className="mb-4">Find the perfect venue for your next event. We offer a wide range of venues for all types of occasions.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Create Your Event</h2>
            <p>Plan your event with ease using our intuitive event planning tools.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Discover Venues</h2>
            <p>Browse through our curated list of venues for your next event.</p>
          </div>
        </div>
      </div>
    </main>
  );
}