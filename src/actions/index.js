import React from 'react';

// making fetchPosts the named export default
// this is an action creator/generator and it always returns an action object with type and payload properties.
export const fetchPosts = () => {
   return { 
      type: 'FETCH_POSTS'
   };
}