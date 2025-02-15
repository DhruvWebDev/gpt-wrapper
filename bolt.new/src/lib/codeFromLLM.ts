import { PROMPT } from "@/llm/prompt";
import axios from "axios";

export async function getCodeFromLlm(prompt: string) {
  const userPrompt = await PROMPT({ prompt });
  console.log("user prompt", userPrompt);
  const options = {
    method: 'GET',
    url: 'https://free-chatgpt-api.p.rapidapi.com/chat-completion-one',
    params: {prompt: userPrompt},
    headers: {
      'x-rapidapi-key': '3c27a85d92msh0004e2185ea65e2p1236ffjsne9d67133a337',
      'x-rapidapi-host': 'free-chatgpt-api.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log("Parsed data",JSON.parse(response.data.response));
  } catch (error) {
    console.error(error);
  }

}