export interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <footer className="bottom-0 w-full bg-gray-200 text-zinc-800 text-center py-4 font-bold">
      Made by <a className="no-underline hover:cursor-pointer" href="www.mines-dev.com">Mines-dev</a> 2023 © 
    </footer>
  );
};

export default Footer;
