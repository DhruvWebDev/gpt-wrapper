import { useState } from 'react';  // Import useState hook
import { FileNode } from "./fileNode";  // Import the FileNode component

export function FileTree({ projects }) {  // Make sure the component is a normal function (no async)
    const { files } = projects;  // Destructure the 'files' from the 'projects' prop
    const [file, setFile] = useState(files);  // Initialize the state with the files from the project

    return (
        <div className="space-y-1">
            {files.map((f, index) => (
                <FileNode 
                    key={index}  // Add a unique key for each FileNode
                    file={f} 
                />
            ))}
        </div>
    );
}