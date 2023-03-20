import FavoriteList from '@/Components/FavoriteList/FavoriteList';
import Footer from '@/Components/Footer/Footer';

export default function breedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
          <div className="flex container mx-auto p-8 gap-8 ">
            <FavoriteList />
            <main>{children}</main>
            <Footer/>
          </div>
      </body>
    </html>
  );
}
