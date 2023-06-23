import axios from "axios";

const aw = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4Y2M0YzQwY2FjMmZiNjdhODMyYzc1ZjVjNDI0OCIsInN1YiI6IjY0ODk4OGI0ZTM3NWMwMDBhY2M3ODhjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZPSgXIhSbTuBvnDn9KT_89ZyeGnXwwHudXIkzp-MLBI",
      accept: "application/json",
    },
  });
};

export { aw };
