// this is wired up to reducers/ind  ex.js
// this is a reducer function
export default (state = [], action) => {
   switch (action.type) {
      case 'FETCH_POSTS':
         return action.payload;
      default:
         return state;
   }
};