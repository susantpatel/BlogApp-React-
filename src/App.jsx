import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchPosts from './redux/actions';

const MainComponent = function () {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);

  useEffect(() => {
    const data = async () => {
      await dispatch(fetchPosts());
    };
    data();
  }, []);

  // if (!data) {
  //   return <h1>Loading</h1>;
  // }

  return (
    <div className='ui container'>
      <div className='ui relaxed divided list'>
        {posts.map((post) => (
          <div className='item' key={post.id}>
            <i className='large middle aligned icon user' />
            <div className='content'>
              <div className='description'>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
