export const testQuestion = async (answer: string) => {
  try {
    const executionResult = await fetch(
      "http://127.0.0.1:5000/api/pytorch/answer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer }),
      }
    );

    if (!executionResult.ok) {
      const errorInfo = await executionResult.json(); // Assuming server sends JSON error info
      console.error("Error info:", errorInfo);
      throw new Error(
        `Failed to execute the answer. Status: ${executionResult.status}`
      );
    }

    const data = await executionResult.json();
    console.log(data); // Log the response data to debug
    return data;
  } catch (error) {
    console.error(error);
    return "hello action"; // Consider returning or handling the error differently
  }
};
