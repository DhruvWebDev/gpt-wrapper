"use client"; // Add this directive at the top of the file
import { useWebContainer } from "@/hooks/useWebContainer";

export const mountStructure = async ({ projects }) => {
    const WebContainer = useWebContainer();
    const directoryArray = projects.directories;

    //Directory creation
    projects.directories.map(async (dir, index) => {
        await WebContainer?.fs.mkdir(dir, { recursive: true });
    }); // Log the files array to the console
    

    //File mounting 
    projects.files.map(async (file, index) => {
        const {path, code} = file;
        await WebContainer?.fs.writeFile(path, code);
    }); // Log the files array to the console

    
}
