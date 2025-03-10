# OpenAI Chat UI
<!-- markdown-link-check-disable -->
This project provides a web frontend for the OpenAI API and compatible alternatives. See [ORIGINAL README](README.md)

### Purpose

The original project was tightly coupled with OpenAI. Given the increasing number of backends offering compatible APIs, such as Google Gemni, Deekseek, Qwen, Ollama, llamacpp and etc. this project aims to provide a more flexible solution.

Furthermore, because the backend web server contains minimal logic, we can store configurations (such as API keys and model settings) in the browser's local storage. This eliminates the need for a server-side component, enabling cost-effective deployment via platforms like GitHub Pages.

### How to use
Configure the application using GitHub Pages: https://privapps.github.io/ai-chat-ui/conf.html

Sample of Gemini
```json
{
  "openapi_key": "...",
  "default_model": "models/gemini-2.0-flash-lite",
  "default_system_prompt": "You are a helpful assistant.",
  "openapi_url": "https://generativelanguage.googleapis.com/v1beta/openai"
}
```

These values will be stored in your browser's local storage, completing the setup process.