//2. Network Requests (Asynchronous):

import * as http from 'http';

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        resolve(data);
      });

      response.on('error', (err) => {
        reject(err);
      });
    });
  });
}

async function processRequest() {
  try {
    const result = await makeRequest('http://example.com');
    console.log(result); // Process data from the successful response
  } catch (err) {
    console.error('Request error:', err);
  }
}

processRequest();
