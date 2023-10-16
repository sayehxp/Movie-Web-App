//____________INSTANCE________________
import axios from "axios";

//__________________________






const options = {
baseURL: "https://api.themoviedb.org/3/",
method: 'GET',
headers: {
accept: 'application/json',
Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzg3NDY1MmQ4MzZlZmNkYmYxMzM5MzAzODIyM2E0NiIsInN1YiI6IjY1MTJhZDc4ZTFmYWVkMDBjNjE4NDczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.luHkfk5_LyoFtZiXCX3C0hfpj14bCRf_YF1DmOsh5_0'
}
}

const Instance = axios.create(options);

export default Instance