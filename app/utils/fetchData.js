// exerciseOptions and youtubeOptions with headers for API requests

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "8cf1d14a85msh9227ab8218f3575p1addc9jsn0bcb8d4975e3", // Ensure this environment variable is set correctly
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "8cf1d14a85msh9227ab8218f3575p1addc9jsn0bcb8d4975e3",
  },
};

// Function to fetch data with improved error handling and logging
export const fetchData = async (url, options) => {
  try {
    // Append the limit query parameter to the URL
    const urlWithLimit = `${url}?limit=250`;

    console.log("Fetching data from URL:", urlWithLimit);
    console.log("With options:", options);

    const response = await fetch(urlWithLimit, options);

    if (!response.ok) {
      // Read and log the response text for detailed error information
      const errorDetails = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorDetails}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch data error:", error.message);
    throw error; // Rethrow the error after logging it
  }
};
