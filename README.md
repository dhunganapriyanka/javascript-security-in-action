# JavaScript Security in Action - Project 2

This project demonstrates JavaScript security vulnerabilities, including code injection through web applications (XSS) and dynamic code execution using `eval()`. It also shows how to prevent these vulnerabilities using secure coding techniques and Content Security Policy (CSP).

## Features

- **Cross-Site Scripting (XSS):** Demonstrates JavaScript injection using `innerHTML` and prevents it using `textContent`.
- **Dynamic Code Execution:** Shows the risks of `eval()` and uses `JSON.parse()` as a safer alternative for JSON data.
- **Content Security Policy (CSP):** Restricts unauthorized script execution.

## Technologies Used

HTML, CSS, JavaScript, and Node.js.

## How to Run

Run the following command in GitHub Codespaces:

```bash
npm start
```

It start local host on port **3000** . Open it in your browser.

## Testing

Compare the vulnerable and secure pages to see how the security fixes prevent unsafe JavaScript execution.