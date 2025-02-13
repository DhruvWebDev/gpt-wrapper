import { selectedFileState } from "@/state/atom";
import { useSetRecoilState } from "recoil";

export function FileNode({ file }) {
    // Recoil setter for updating the selectedFileState
    const setSelectedFile = useSetRecoilState(selectedFileState);

    const handleFileClick = () => {
        // Set the Recoil state when a file is clicked
        setSelectedFile(file);
    };

    const {name} = file;

    return (
        <div 
            onClick={handleFileClick}  // Corrected onClick syntax
            style={{ cursor: "pointer" }}  // Optional: Add pointer cursor for better const firsi        >
        >
            {name}
        </div>
    );
}
