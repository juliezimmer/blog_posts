import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
   const response = await jsonPlaceholder.get('/posts');
   
   dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// this is set up as a function that returns a function 
export const fetchUser = (id) => async dispatch => {
   const response = await jsonPlaceholder.get(`/users/${id}`);

   dispatch({ type: 'FETCH_USER', payload: response.data })
};