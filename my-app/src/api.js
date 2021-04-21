const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts/';


const request = async(url) => {
  const response = await fetch(url);

  if(!response.ok) {
    throw new Error(
      `${response.status} - ${response.statusText}`,
    );
  }

  return response.json();
};

export const getPosts = async() => {
  const posts = await request(POSTS_URL);
  return posts;
}
