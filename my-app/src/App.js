import React, { useState, useEffect } from 'react';
import { getPosts } from './api';
import './App.css';
import ImageCarousel from './components/ImageCarousel';
import { CarouselData } from './components/CarouselData';
import { PostsList } from './components/PostsList/index';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((postsData) => {
      setPosts(postsData);
    });
  }, [])


  return (
    posts.length > 0
    ? (
      <>
        <PostsList />
        <ImageCarousel slides={CarouselData} />
      </>
    )
    : null
  );
}

export default App;
