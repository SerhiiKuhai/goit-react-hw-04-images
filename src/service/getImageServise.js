const BASE_URL = `https://pixabay.com/api/`;
const KEY = '35734098-001978243a4da1dc94d78ecd1';
const perPage = 12;

export async function getImagesServise(query, page) {
  const response = await fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  const data = response.json();
  return data;
}
