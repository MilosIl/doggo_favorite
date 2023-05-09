const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 container bg-gray-200 text-zinc-800 text-center py-4 font-bold">
      Made by{' '}
      <a
        className="no-underline hover:cursor-pointer hover:underline hover:underline-offset-2 "
        href="www.mines-dev.com"
      >
        Mines-dev
      </a>{' '}
      2023 ©
    </footer>
  );
};

export default Footer;
