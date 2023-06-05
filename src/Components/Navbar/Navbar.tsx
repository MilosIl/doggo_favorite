import Link from 'next/link';
import FavoriteListHead from '../FavoriteListHead/FavoriteListHead';

const Navbar = ({ toggleSidebar }: any) => {
  return (
    <nav className="mb-2 p-2 border-b-2 border-b-green-700 flex justify-between items-center">
      <FavoriteListHead />
      <ul className="flex justify-end items-start list-none gap-4">
        <li className="hover:underline hover:underline-offset-4">
          <Link href={'/'}>Home</Link>
        </li>
        <li
          onClick={toggleSidebar}
          className="cursor-pointer hover:underline hover:underline-offset-4"
        >
          Show favorites
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
