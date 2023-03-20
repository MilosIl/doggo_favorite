import FavoriteList from '@/Components/FavoriteList/FavoriteList';

export default function breedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <>
          <div className="flex container mx-auto">
            <FavoriteList />
            <main>{children}</main>
          </div>
        </>
      </body>
    </html>
  );
}
