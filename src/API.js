import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org";

//   Tranding

export const getMovies = async (page) => {
  const url = "https://api.themoviedb.org/3/trending/movie/day";
  const options = {
    params: {
      page: page,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmU4NzQ1ZGY4YWM0Y2Q3Nzc2MmZiNTlhNGNjYWE1OCIsIm5iZiI6MTcyMjM4MTI1MC45NzY1MDEsInN1YiI6IjY2YTk3MDFhYjAyMjIyZjYyMGUzYWNkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fM-qTNTQyBpdAq7B8XZMwrutUxW-qwU_Er3PegE5yU8",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Search-movies

export const searchMovies = async (query, page) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          query: query,
          page: page,
        },
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmU4NzQ1ZGY4YWM0Y2Q3Nzc2MmZiNTlhNGNjYWE1OCIsIm5iZiI6MTcyMjM4MTI1MC45NzY1MDEsInN1YiI6IjY2YTk3MDFhYjAyMjIyZjYyMGUzYWNkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fM-qTNTQyBpdAq7B8XZMwrutUxW-qwU_Er3PegE5yU8",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Details

export const movieDetail = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmU4NzQ1ZGY4YWM0Y2Q3Nzc2MmZiNTlhNGNjYWE1OCIsIm5iZiI6MTcyMjM4MTI1MC45NzY1MDEsInN1YiI6IjY2YTk3MDFhYjAyMjIyZjYyMGUzYWNkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fM-qTNTQyBpdAq7B8XZMwrutUxW-qwU_Er3PegE5yU8",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Credits

export const movieCredits = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmU4NzQ1ZGY4YWM0Y2Q3Nzc2MmZiNTlhNGNjYWE1OCIsIm5iZiI6MTcyMjM4MTI1MC45NzY1MDEsInN1YiI6IjY2YTk3MDFhYjAyMjIyZjYyMGUzYWNkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fM-qTNTQyBpdAq7B8XZMwrutUxW-qwU_Er3PegE5yU8",
        },
      }
    );
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Reviews

export const movieReviews = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmU4NzQ1ZGY4YWM0Y2Q3Nzc2MmZiNTlhNGNjYWE1OCIsIm5iZiI6MTcyMjM4MTI1MC45NzY1MDEsInN1YiI6IjY2YTk3MDFhYjAyMjIyZjYyMGUzYWNkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fM-qTNTQyBpdAq7B8XZMwrutUxW-qwU_Er3PegE5yU8",
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
