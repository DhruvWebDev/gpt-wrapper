import {PROMPT} from "@/llm/prompt"
import { NextApiRequest, NextApiResponse } from 'next';
import { getCodeFromLlm } from "@/lib/codeFromLLM";

export async function GET(req: NextApiRequest) {
  // Create a URL object from the request URL
  const url = new URL(req.url!, `http://${req.headers.host}`);
  
  // Access the search parameters
  const prompt = url.searchParams.get('prompt');

  if (!prompt) {
    return new Response(JSON.stringify({ error: 'Prompt query parameter is required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const projects = await getCodeFromLlm(prompt); // Use the prompt as needed
    console.log(projects);
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