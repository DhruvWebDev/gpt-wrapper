# gpt-wrapper

const array = jsonData.files;

// Traversing through the files array
array.forEach(file => {
  console.log('File Name:', file.name);
  console.log('File Path:', file.path);
  console.log('File Conte{nt:', file.content);
  console.log('--------------------------------------');
});
"{
  "files": [
    {
      "name": "package.json",
      "path": "./package.json",
      "content": "{\n  \"name\": \"my-react-app\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"start\": \"react-scripts start\",\n    \"build\": \"react-scripts build\",\n    \"test\": \"react-scripts test\",\n    \"eject\": \"react-scripts eject\"\n  },\n  \"dependencies\": {\n    \"react\": \"^18.0.0\",\n    \"react-dom\": \"^18.0.0\",\n    \"react-scripts\": \"^5.0.0\",\n    \"@shadcn/ui\": \"latest\"\n  },\n  \"devDependencies\": {\n    \"eslint\": \"^8.0.0\",\n    \"prettier\": \"^2.0.0\"\n  }\n}"
    },
    {
      "name": "index.html",
      "path": "public/index.html",
      "content": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>React App</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n  </body>\n</html>"
    },
    {
      "name": "index.js",
      "path": "src/index.js",
      "content": "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport './index.css';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);"
    },
    {
      "name": "App.js",
      "path": "src/App.js",
      "content": "import React from 'react';\nimport { Button } from '@shadcn/ui';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <Button variant=\"primary\">Hello, ShadCN UI</Button>\n    </div>\n  );\n}\n\nexport default App;"
    },
    {
      "name": "App.css",
      "path": "src/App.css",
      "content": ".App {\n  text-align: center;\n}\n\nbutton {\n  margin-top: 20px;\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n}"
    },
    {
      "name": "index.css",
      "path": "src/index.css",
      "content": "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: #f4f4f4;\n}\n"
    }
  ]
}"
