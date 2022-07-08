import axios from 'axios';
export default function getData(){
    return axios
      .get("http://localhost:8000/BooksInfo")
      .then((response) => {
        const data = response.data;
      })
}

