export const loginAPI = async (username, password) => {
    try {
      const response = await fetch("https://playground.tesonet.lt/v1/tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
  
      const data = await response.json();
      return data.token;
    } catch (error) {
      throw error.message || "An error occurred during login.";
    }
  };