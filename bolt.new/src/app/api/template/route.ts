import { NextRequest } from 'next/server';
import { getCodeFromLlm } from "@/lib/codeFromLLM";

export async function GET(req: NextRequest) {
  // Create a URL object from the request URL
  const { searchParams } = req.nextUrl;
  
  // Access the search parameters
  const prompt: string | null = searchParams.get('prompt');
  
  if (!prompt) {
    return new Response(JSON.stringify({ error: 'Prompt query parameter is required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const decodedPrompt = decodeURIComponent(prompt);

  try {
    const projects = await getCodeFromLlm(decodedPrompt);
    console.log("Projects:",projects);
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
    
    } catch (error) {
    console.error(error);
    
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } 
}