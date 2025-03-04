import { aceternityUIComponents, shadcnComponents } from "@/lib/utils";

export async function PROMPT({ prompt }: { prompt: string }) {
  const userPrompt = `
  You are a skilled full-stack developer. Your task is to provide implementation details for a Next.js application using the App Router architecture. 
  
  Return only a JSON object with the required structure, without any additional text.

  USER PROMPT: ${prompt}

  IMPORTANT REQUIREMENTS:
  1. Create a complete Next.js application structure with all necessary files
  2. Include configuration files like .eslintrc.json, .gitignore
  3. Shadcn UI setup commands should be handled internally

  Example Response Format:
  {
    "directories": [
      "src/app/components/ui",
      "src/app/lib",
      "src/app/api",
      "public",
      "src/app/(routes)"
    ],
    "files": [
      {
        "name": "package.json",
        "type": "file",
        "code": "{\"name\":\"my-next-app\",\"version\":\"0.1.0\",\"private\":true,\"scripts\":{\"dev\":\"npx shadcn@latest init && npx shadcn@latest add button card && npx shadcn@latest add https://ui.aceternity.com/registry/3d-card.json && -d next dev\",\"build\":\"next build\",\"start\":\"next start\",\"lint\":\"next lint\"},\"dependencies\":{\"next\":\"14.1.0\",\"react\":\"^18.2.0\",\"react-dom\":\"^18.2.0\"},\"devDependencies\":{\"typescript\":\"^5.3.0\",\"tailwindcss\":\"^3.4.0\"}}",
        "lang": "json"
      },
      {
        "name": ".gitignore",
        "type": "file",
        "code": "node_modules/\n.next/\nout/\n.DS_Store\n.env.local\n.env.development.local\n.env.test.local\n.env.production.local",
        "lang": "plaintext"
      },
      {
        "name": "src/app/layout.tsx",
        "type": "file",
        "code": "import type { Metadata } from 'next'; import './globals.css'; export const metadata: Metadata = { title: 'My Next.js App', description: 'A Next.js application with App Router and Shadcn UI' }; export default function RootLayout({ children, }: { children: React.ReactNode; }) { return ( <html lang=\"en\"> <body>{children}</body> </html> ); }",
        "lang": "typescript"
      },
      {
        "name": "src/app/page.tsx",
        "type": "file",
        "code": "export default function Home() { return ( <main> <h1>Welcome to My Next.js App</h1> <p>This is a Next.js project with Shadcn UI setup.</p> </main> ); }",
        "lang": "typescript"
      },
      {
        "name": "tailwind.config.js",
        "type": "file",
        "code": "/** @type {import('tailwindcss').Config} */ module.exports = { content: [\"./src/**/*.{js,ts,jsx,tsx,mdx}\"], theme: { extend: {}, }, plugins: [], };",
        "lang": "javascript"
      },
      {
        "name": "next.config.js",
        "type": "file",
        "code": "/** @type {import('next').NextConfig} */ const nextConfig = { reactStrictMode: true, }; module.exports = nextConfig;",
        "lang": "javascript"
      }
    ],
    "scripts": [
      "npm install",
      "npm run dev"
    ],
    "description": "A Next.js application structure with App Router and Shadcn UI components",
    "steps": [
      {
        "order": 1,
        "path": "package.json"
      },
      {
        "order": 2,
        "path": ".gitignore"
      },
      {
        "order": 3,
        "path": "tsconfig.json"
      },
      {
        "order": 4,
        "path": "next.config.js"
      },
      {
        "order": 5,
        "path": "tailwind.config.js"
      },
      {
        "order": 6,
        "path": "src/app/layout.tsx"
      },
      {
        "order": 7,
        "path": "src/app/page.tsx"
      }
    ]
  }

  IMPORTANT --> ENSURE THAT YOU DONT RETURN THE EXAMPLE COMMENT AS IT IS IN THE CODE, PLEASE RETURN THE LITERAL CODE THAT I ALS WOULD AHVE WRITTEN TO BUILD THAT APP...

  Available Shadcn UI components can be installed using: npx shadcn-ui@latest add [component-name]

  If Acernity UI components are requested:
  1. First set up Shadcn UI
  2. Install required Shadcn components
  3. Install Acernity UI components using the Shadcn registry

  ENSURE:
  1. All file paths in steps match the actual files created
  2. Files array contains all necessary files with correct content
  3. Directories array includes all required directories
  4. Steps list every file created in order

  AVAILABLE SHADNUI COMPONENTS COMMANDS TO INSTALL THESE COMPONENTS ARE:
    ${JSON.stringify(shadcnComponents)}
  AVAILABLE ACERNITYUI COMPONENTS COMMANDS TO INSTALL THESE COMPONENTS ARE:
      ${JSON.stringify(aceternityUIComponents)}

  IMPORTANT --> JUST RETURN THE JSON OBJECT NOTHING LIKE \`\`\`json\`\`\`  OBOVE IT ELSE MY CODE WILL BREAK
  `;
  return userPrompt;
}