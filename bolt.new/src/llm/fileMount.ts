export const mountStructure = ({projects}) => {
    const directoryArray = projects.directories;

    //Directory creation
    for(dir in directoryArray){
        await webcontainerInstance.fs.mkdir(dir, { recursive: true });
    }

    //File mounting 
    const fileArray = projects.files;

    //File Creation
    for(file in fileArray){
        const {code, order, path, name, lang} = file;
        await webcontainerInstance.fs.writeFile(path, code);
    }

}
