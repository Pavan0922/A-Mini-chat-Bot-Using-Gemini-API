const button = document.querySelector("button");
const textArea = document.querySelector("textarea");
textArea.addEventListener("keyup", (e) => {
  textArea.style.height = "auto";
  let height_value = e.target.scrollHeight;
  textArea.style.height = `${height_value}px`;
});

button.addEventListener("click", () => {
  const output = document.querySelector(".output");
  const userInput = document.querySelector("#input");
  output.innerHTML = "<p>Loading response...</p>"; 
  const prompt = userInput.value;
  const apiKey = "YOUR_API_KEY";
  const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `${prompt}`,
            },
          ],
        },
      ],
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      userInput.value = "";
      let respoce_data = data.candidates[0].content.parts[0].text;
      const htmloutput = marked.parse(respoce_data);
      output.innerHTML = htmloutput;
    })
    .catch((err) => {
      console.log(err);
    });
});
