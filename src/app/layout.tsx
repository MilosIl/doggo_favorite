import './globals.css';
import { FavoriteProvider } from '../context/FavoriteContext';
import Footer from '../Components/Footer/Footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <FavoriteProvider>{children}</FavoriteProvider>
        <Footer/>
      </body>
    </html>
  );
}
