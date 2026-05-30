import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Noble\'s Portfolio',
  description: 'Enterprise mobility, automation, AI tooling, and 3D printing projects by Jonathon Poe.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <div className="flex flex-col min-h-screen">
          <Navbar /> {/* Ensure this line is present */}
          <main className="flex-grow bg-gray-100">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
