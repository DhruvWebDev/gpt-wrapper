import { useWebContainer } from "@/hooks/useWebContainer";


export async function PreviewFrame() {
  
  const url = useRecoilValue(websiteUrlState);
  return (
    <div className="h-full flex items-center justify-center text-gray-400">
      {!url && (
        <div className="text-center">
          <p className="mb-2">Loading...</p>
        </div>
      )}
      {url && <iframe width={"100%"} height={"100%"} src={url} />}
    </div>
  );
}

