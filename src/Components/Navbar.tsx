import Link from 'next/link';


const Navbar = ({ toggleSidebar }: any) => {
  return (
    <nav className="mb-2 p-4 border-b-2 border-b-green-700 flex justify-end items-center">
      <ul className="font-medium flex justify-end items-start list-none gap-4">
        <li className="  hover:underline hover:underline-offset-4">
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
