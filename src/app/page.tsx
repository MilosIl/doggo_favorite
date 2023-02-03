"use client"
import './globals.css';
import SearchBar from '../Components/SearchBar/SearchBar';
import SearchBar1 from '../Components/SearchBar/SearchBar1';
import FavoriteList from '../Components/FavoriteList/FavoriteList';
import Footer from '../Components/Footer/Footer';

import DogCard from '../Components/DogCard/DogCard';
import {mockDogCardProps} from '../Components/DogCard/DogCard.mock'

import {FavoriteContext} from '../context/FavoriteContext'



export default function Home() {

  return (
    <FavoriteContext.Provider value={[FavoriteContext]}>
      <div className="min-h-screen">
        <FavoriteList  />
        <div className="flex flex-col justify-center items-center mx-auto">
          <h1 className="text-2xl font-extrabold  text-zinc-800">
            Welcome to Doggo site
          </h1>
          <p className="mt-2 mb-6 uppercase text-lg font-bold  text-zinc-800">
            find information about breed of dogs
          </p>
          <main>
            {/* <SearchBar /> */}
            <SearchBar1 />
            <DogCard {...mockDogCardProps.base}/>
          </main>
        </div>
      </div>
      <Footer />
    </FavoriteContext.Provider>
  );
}
