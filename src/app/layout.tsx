import './globals.css';
import { FavoriteProvider } from '../context/FavoriteContext';
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
      </body>
    </html>
  );
}
