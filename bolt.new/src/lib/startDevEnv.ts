"use client";

export function StartDevEnvironment({ webcontainer }: { webcontainer?: any }) {
  // Synchronous method to start development environment
  if (webcontainer) {
    try {
      console.log("Starting dev environment...");
      // Run npm install
      const installProcess = webcontainer.spawn("npm", ["install"]);
      installProcess?.exit?.then(() => {
        console.log("npm install completed");
        // Run npm run dev after install completes
        const devProcess = webcontainer.spawn("npm", ["run", "dev"]);
        console.log("control reached here below the dev process")
        // Set up server-ready event listener

        webcontainer.on("port", (port:number) => {
          console.log("Server is ready");
          console.log(port);
        });
      }).catch((error: Error) => {
        console.error("Error during npm install:", error);
      });
    } catch (error) {
      console.error("Error starting dev environment:", error);
    }
  } else {
    console.error("webcontainer is not defined");
  }
  console.log("control reached here before true")
  // Return a dummy element or null
  return true
}