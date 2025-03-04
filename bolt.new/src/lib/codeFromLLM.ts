import { createTogetherAI } from '@ai-sdk/togetherai';
import { generateText } from 'ai'; 
import { togetherAIModel } from "@/llm/model";
import { PROMPT } from '@/llm/prompt';

export async function getCodeFromLlm(prompt: string) {
  const userPrompt = await PROMPT({prompt});
  const togetheraiInstance = createTogetherAI({
    apiKey: process.env.TOGETHER_API_KEY,
  });

  try {
    const { text } = await generateText({
      model: togetheraiInstance(togetherAIModel()),
      prompt: userPrompt
    });
    return text;
  } catch (error) {
    console.error("Error generating text:", error);
    throw error; // Rethrow or handle the error as needed
  }
}

