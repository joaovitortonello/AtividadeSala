import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <nav className="flex flex-col gap-4">
        <Link href="/" className="hover:bg-gray-800 p-2 rounded">Home</Link>
        <Link href="/computadores" className="hover:bg-gray-800 p-2 rounded">Computadores</Link>
        <Link href="/sobre" className="hover:bg-gray-800 p-2 rounded">Sobre</Link>
      </nav>
    </aside>
  );
}
