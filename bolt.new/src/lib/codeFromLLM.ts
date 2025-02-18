import { PROMPT } from "@/llm/prompt";
import axios from "axios";
import { createTogetherAI } from '@ai-sdk/togetherai';
import { wrapLanguageModel, generateText, extractReasoningMiddleware } from 'ai'; 


export async function getCodeFromLlm(prompt: string) {
  const userPrompt = await PROMPT({prompt})
  const togetheraiInstance = createTogetherAI({
    apiKey: '5889ff72512443a834c55c5ac06f6d818183587c25efa490b3dbd15f4293d783',
  });

  try {
    const { text } = await generateText({
      model: togetheraiInstance('meta-llama/Llama-3.3-70B-Instruct-Turbo-Free'),
      prompt: userPrompt,
    });
    console.log("text res",text);
    return text;
  } catch (error) {
    console.error("Error generating text:", error);
    throw error; // Rethrow or handle the error as needed
  }
}

