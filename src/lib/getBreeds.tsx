export default async function getBreeds() {
  const URL =
    'https://api.thedogapi.com/v1/breeds?api_key=live_YXejSYT0lmejDsPBw4qk6YVyRbGnP8HIGe489tK26eJkzKOAi7gmnMPhGLzlwQ3o';
  const res = await fetch(URL);
  if (!res.ok) throw new Error('failed to fetch data');
  return res.json();
}
