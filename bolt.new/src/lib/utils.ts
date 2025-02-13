import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function startDevEnvironment() {
  const webcontainer = useWebContainer();
  try {
    const [url, setUrl] = useRecoilState(websiteUrlState);
    await webcontainer?.spawn("npm", ["install"]);
    await webcontainer?.spawn("npm", ["run", "dependency"]);
    await webcontainer?.spawn("npm", ["run", "dev"]);

    webcontainer.on("server-ready", (port, url) => {
      setUrl(url);
    });
  } catch (error) {
    console.error("Error in starting dev environment:", error);
  }
}
