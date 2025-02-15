const data = {
    directories: ['src/app/components/ui', 'src/app/lib'],
    files: [
        { name: 'app', type: 'folder', children: [] },
        { name: '.eslintrc.json', type: 'file', code: '{}', lang: 'json' },
        { 
            name: '.gitignore',
            type: 'file',
            code: 'node_modules/\n' +
                '.next/\n' +
                'out/\n' +
                '.DS_Store\n' +
                '.env.local\n' +
                '.env.development.local\n' +
                '.env.test.local\n' +
                '.env.production.local',
            lang: 'plaintext'
        }
    ],
    scripts: [['npm install'], ['npm run dev']],
    description: 'A simple Next.js application structure with essential configuration files and directories setcation.',
    steps: [{ order: 1, path: 'app/layout.tsx' }]
};

data.directories.map((dir, index) => {
    console.log(dir); // Log each directory to the console
}); // Log the files array to the console

data.files.map((dir, index) => {
    console.log(dir.name); // Log each directory to the console
}); // Log the files array to the console

data.scripts.map((script, index) => {
    console.log(script[0]); // Log only the first command from each script array
}); // Log the files array to the console

console.log(data.description);