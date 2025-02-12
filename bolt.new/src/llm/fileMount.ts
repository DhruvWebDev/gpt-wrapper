export const mountStructure = (projects) => {
    const directoryArray = projects.directories;

    //Directory creation
    for(d in directoryArray){
        await webcontainerInstance.fs.mkdir('d', { recursive: true });
    }

    //File mounting 
    const fileArray = projects.files;

    //File Creation
    for(file in fileArray){
        const {code, order, path, name} = file;
        await webcontainerInstance.fs.writeFile(path, code);
    }

}