import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://chatgpt-4-01.p.rapidapi.com/ask',
  params: {
    question: 'hey give me json object for each and every file that is requird for making a react app, object should include code name path, i only want object no other word or so no quoatation and apostofi'
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