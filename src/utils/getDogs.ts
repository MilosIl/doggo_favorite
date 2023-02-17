import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {

  // da se proveri sta se menja u url, kada se menjaju rase pasa

  const URL =
    'https://api.thedogapi.com/v1/breeds?api_key=live_YXejSYT0lmejDsPBw4qk6YVyRbGnP8HIGe489tK26eJkzKOAi7gmnMPhGLzlwQ3o';
  const res = await fetch(URL);
  const dogs = await res.json();
  return {
    props: {
      dogs,
    },
  };
};
