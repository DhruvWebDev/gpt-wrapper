import axios from 'axios';
import {PROMPT} from "@/llm/prompt"

export async function getCodeFromLlm(prompt){

const options = {
  method: 'GET',
  url: 'https://chatgpt-4-01.p.rapidapi.com/ask',
  params: {
    question: PROMPT({prompt}),
  },
  headers: {
    'x-rapidapi-key': '3c27a85d92msh0004e2185ea65e2p1236ffjsne9d67133a337',
    'x-rapidapi-host': 'chatgpt-4-01.p.rapidapi.com'
  }
 };

 try {
	const response = await axios.request(options);
	console.log(response.data);
 } catch (error) {
	console.error(error);
 }
}

export async function GET(){
  const {prompt} = req.query;

 try {
    const projects  = getCodeFromLlm(prompt)
  } catch (error) {
    
  } 
}
