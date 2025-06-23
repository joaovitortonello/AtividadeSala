import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Dashboard Computadores',
  description: 'Cadastro e gerenciamento de computadores',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 p-8 bg-gray-100 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
