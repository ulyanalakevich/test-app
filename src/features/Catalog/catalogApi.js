export async function getNations() {
  try {
    const apiUrl =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data from the API.");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error occurred while fetching nation catalog:", error);
    return [];
  }
}
