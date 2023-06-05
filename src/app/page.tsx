import SearchBar from '../Components/SearchBar/SearchBar';

export default function Home() {
  return (
    <div className="w-fit flex flex-col items-center mx-auto">
      <h1 className="text-2xl font-extrabold  text-zinc-800">
        Welcome to Doggo site
      </h1>
      <p className="mt-2 mb-6 pl-4 uppercase text-lg font-bold  text-zinc-800">
        find information about breed of dogs
      </p>
      <main>
        <SearchBar />
      </main>
    </div>
  );
}
