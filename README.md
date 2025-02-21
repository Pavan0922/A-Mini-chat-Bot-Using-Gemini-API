# AI Chatbot with Gemini API

A simple web-based chatbot that uses Google's Gemini API to generate responses. This project serves as a learning resource for beginners to understand API integration, fetch requests, and basic web development concepts.

## Features

- Clean and responsive user interface
- Real-time textarea height adjustment
- Markdown support for bot responses
- Loading state indication
- Gradient background design
- Mobile-responsive layout

## Technologies Used

- HTML5
- CSS3 (with custom gradient background)
- JavaScript (vanilla)
- Google Gemini API
- Marked.js for Markdown parsing

## Prerequisites

Before you begin, ensure you have:
- A modern web browser
- A Google Cloud account
- A Gemini API key

## Getting Started

1. Clone the repository or download the source code
2. Replace `YOUR_API_KEY` in `script.js` with your actual Gemini API key
3. Open `index.html` in a web browser

## Project Structure

```
├── index.html         # Main HTML file
├── styles.css         # CSS styling
└── script.js         # JavaScript functionality
```

## How It Works

1. **User Input**: The user types their message in the textarea at the bottom of the screen.

2. **API Request**: When the send button is clicked, the application:
   - Shows a loading message
   - Constructs a POST request to the Gemini API
   - Sends the user's input as the prompt

3. **Response Handling**: The application:
   - Receives the API response
   - Parses the markdown content
   - Displays the formatted response in the output area

## Key Code Concepts

### API Integration
```javascript
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

fetch(URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        contents: [{
            parts: [{
                text: prompt
            }]
        }]
    })
})
```

### Dynamic Textarea
```javascript
textArea.addEventListener("keyup", (e) => {
    textArea.style.height = "auto";
    let height_value = e.target.scrollHeight;
    textArea.style.height = `${height_value}px`;
});
```

## Learning Points

1. **API Basics**:
   - Understanding HTTP methods (POST)
   - Working with API endpoints
   - Handling API keys securely
   - Processing JSON responses

2. **JavaScript Concepts**:
   - Fetch API usage
   - Promise handling
   - Event listeners
   - DOM manipulation
   - Error handling

3. **CSS Skills**:
   - Gradient backgrounds
   - Flexible layouts
   - Responsive design
   - Scroll management
   - Input styling

## Common Issues and Solutions

1. **API Key Issues**:
   - Ensure your API key is valid
   - Check for proper API key placement in the code
   - Verify API quota limits

2. **CORS Issues**:
   - Use appropriate headers
   - Ensure API permissions are set correctly

3. **Response Formatting**:
   - Check markdown syntax in responses
   - Verify the response structure matches expected format

## Future Improvements

1. Add conversation history
2. Implement user authentication
3. Add support for different AI models
4. Include message timestamps
5. Add typing indicators
6. Implement error recovery mechanisms

## Security Notes

- Never commit your API key to version control
- Consider implementing rate limiting
- Validate user input before sending to API
- Use environment variables for sensitive data

## Contributing

Feel free to fork this project and submit pull requests. Ideas for contributions:
- Additional features
- Bug fixes
- Documentation improvements
- UI enhancements

## License

This project is available under the MIT License.