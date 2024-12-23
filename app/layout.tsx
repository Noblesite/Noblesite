import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Noble\'s Portfolio',
  description: 'Showcasing my front-end abilities and personal interests.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-blue-400 to-purple-500 text-gray-800">
        <div className="flex flex-col min-h-screen">
          <Navbar /> {/* Ensure this line is present */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
