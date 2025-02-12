import { useWebContainer } from "@/hooks/useWebContainer";


export async function startDevEnvironment({webcontainer}) {
    const [url, setUrl] = useState("");
    await webcontainer?.spawn('npm', ['install']);
    await webcontainer?.spawn('npm', ['run', 'dev']);

    webcontainer.on('server-ready', (port, url) => {
        setUrl(url);

      });
      if(url){
        return url;
      }
}
  export async function PreviewFrame(){
    const webcontainer = useWebContainer();
    const url = startDevEnvironment({webcontainer});
    return (
        <div className="h-full flex items-center justify-center text-gray-400">
          {!url && <div className="text-center">
            <p className="mb-2">Loading...</p>
          </div>}
          {url && <iframe width={"100%"} height={"100%"} src={url} />}
        </div>
      );
  }