import './globals.css';
import SearchBar from '../Components/SearchBar/SearchBar';
import DogCard from '../Components/DogCard/DogCard';
import Footer from '../Components/Footer/Footer';
import { mockDogCardProps } from '../Components/DogCard/DogCard.mock';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center mx-auto">
      <h1 className="text-2xl font-extrabold  text-zinc-800">
        Welcome to Doggo site
      </h1>
      <p className="mt-2 mb-6 uppercase text-lg font-bold  text-zinc-800">
        find information about breed of dogs
      </p>
      <main>
        <SearchBar />
        <DogCard {...mockDogCardProps.base }/>
      </main>
      <Footer/>
    </div>
  );
}
