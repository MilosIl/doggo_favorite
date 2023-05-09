import Link from 'next/link';

const Navbar = ({ toggleSidebar }: any) => {
  return (
    <nav className="m-2 p-2">
      <ul className="flex justify-end list-none gap-4">
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
