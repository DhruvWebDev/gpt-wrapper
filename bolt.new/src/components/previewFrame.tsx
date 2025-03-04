import React, { useEffect, useState } from 'react';


export function PreviewFrame({ webContainer }) {
  // In a real implementation, this would compile and render the preview
  const [url, setUrl] = useState("");

  async function main() {
    const installProcess = await webContainer?.spawn('npm', ['install']);
    console.log("npm install completed");
    
    await webContainer.spawn('npm', ['run', 'dev']);
    console.log("control reached here below the dev process")
    // Wait for `server-ready` event
    webContainer.on('server-ready', (port, url) => {
      // Force the server to run on a specific port (e.g., 3000)
    
      console.log("Server is ready");
      console.log(`Running on port: ${port}`);
      console.log(`Access the app at: ${fixedUrl}`);
    
      // Update the URL state (if using React state)
      setUrl(fixedUrl);
    });

  }
  console.log("control reached here before true")
  useEffect(() => {
    main()
  }, [])

  return (
    <div className="h-full flex items-center justify-center text-gray-400">
      {!url && <div className="text-center">
        <p className="mb-2">Loading...</p>
      </div>}
      
      {url && <iframe width={"100%"} height={"100%"} src={url} />}
    </div>
  );
}