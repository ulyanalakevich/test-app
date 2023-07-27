export async function getUniversities () {
    try {
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=United+States"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data from the API.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error occurred while fetching universities:", error);
      return [];
    }
  }
  