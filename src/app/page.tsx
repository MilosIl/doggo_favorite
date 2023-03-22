// import SearchBar from '../Components/SearchBar/SearchBar';
import SearchBar from '../Components/SearchBar/SearchBar';
import FavoriteList from '../Components/FavoriteList/FavoriteList';
import Footer from '../Components/Footer/Footer';

// import {FavoriteContext} from '../context/FavoriteContext'

export default function Home() {
  return (
    <div className="container mx-auto ">
      <div className="flex overflow-y-hidden ">
        <FavoriteList />
        <div className="flex flex-col items-center mx-auto min-h-screen">
          <h1 className="text-2xl font-extrabold  text-zinc-800">
            Welcome to Doggo site
          </h1>
          <p className="mt-2 mb-6 uppercase text-lg font-bold  text-zinc-800">
            find information about breed of dogs
          </p>
          <main>
            <SearchBar />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
