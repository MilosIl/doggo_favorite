import FavoriteList from '@/Components/FavoriteList/FavoriteList';
import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';

export default function breedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className='container mx-auto'>
        <Navbar/>
        <div className="flex  p-8 gap-8 ">
          <FavoriteList isVisible />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
