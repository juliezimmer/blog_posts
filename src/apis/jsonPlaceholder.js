 import axios from 'axios';

 // this is a preconfigured axios instance that can be used to make requests to the jsonplaceholder api.
export default axios.create({
   baseURL: "https://jsonplaceholder.typicode.com"
});