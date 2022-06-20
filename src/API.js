const url = 'https://api.tvmaze.com/shows/';

const getData = async (id) => {
  const response = await fetch(url + id, { mode: 'cors' });
  if (!response.ok) {
    throw new Error(`Error to get API: ${response.status}`);
  }
  const userData = await response.json();
  return userData;
};

export default getData;