export default async function getBreed(breedId: string) {
  const URL = `https://api.thedogapi.com/v1/breeds/${breedId}`;
  const res = await fetch(URL);
  if (!res.ok) throw new Error('failed to fetch data');
  return res.json();
}
