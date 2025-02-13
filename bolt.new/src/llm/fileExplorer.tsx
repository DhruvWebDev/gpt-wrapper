
import { useState } from 'react';  // Import useState hook
import { FileNode } from "./fileNode";  // Import the FileNode component

export function FileTree({ projects }) {
    const [file, setFile]  = useState({})  // Make sure the component is a normal function (no async)
    async function main(){
        const fileArray = projects.files.sort((a, b) => a.order - b.order);
        setFile(fileArray);
    }
    useEffect(() => {
        main()
    }, [])
    return (
        <div className="space-y-2 p-4 bg-gray-50 rounded-lg shadow-md border border-gray-200 max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Files</h2>
            <div className="space-y-2">
                {files.map((file, index) => (
                    <FileNode
                        key={index}  // Add a unique key for each FileNode
                        file={file}
                    />
                ))}
            </div>
        </div>
    );
}

