export interface IFooter{

}

const Footer: React.FC<IFooter> = () => {
  return (
    <footer className="bottom-0 w-full bg-gray-200 text-zinc-800 text-center py-4 font-bold">
      Made by Milos I. 2023 ©
    </footer>
  );
};

export default Footer;
