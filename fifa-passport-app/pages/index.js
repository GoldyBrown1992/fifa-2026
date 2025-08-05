import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-skyblue min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">FIFA Passport 2026</h1>
      <p className="mb-6">Explore Toronto. Collect Stamps. Unlock Exclusive Cool Cat Drops.</p>
      <div className="space-x-4">
        <Link href="/map" className="bg-green-500 text-white px-4 py-2 rounded">Start Exploring</Link>
        <Link href="/passport" className="bg-yellow-500 text-black px-4 py-2 rounded">View Passport</Link>
        <Link href="/leaderboard" className="bg-pastelpink text-black px-4 py-2 rounded">Leaderboard</Link>
      </div>
    </div>
  );
}
