import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 container bg-green-100 text-zinc-800 text-center py-4 font-bold">
      Made by{' '}
      <Link
        target="_blank"
        className="no-underline hover:cursor-pointer hover:underline hover:underline-offset-2 "
        href="https://www.mines-dev.com"
      >
        Mines-dev
      </Link>{' '}
      2023 ©
    </footer>
  );
};

export default Footer;
