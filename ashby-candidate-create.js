const fetch = require('node-fetch');

const API_KEY = '7c6fb4aadb97542cf8ab2b92ddd8cca221d42ceeab2d4b77fbaa419feac0b824';
const endpoint = 'https://api.ashbyhq.com/candidate.create';

// Convert API key to Basic Auth format: base64("API_KEY:")
const basicAuth = 'Basic ' + Buffer.from(`${API_KEY}:`).toString('base64');

const payload = {
  name: 'Rebecca Lynn',
  email: 'test@ashby.com',
  phoneNumber: '555-555-5555',
  linkedInUrl: 'https://linkedin.com/in/user',
  githubUrl: 'https://github.com/user',
  website: 'https://twitter.com/user',
};

(async () => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: basicAuth,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Candidate created successfully.');
      console.log('Response:', data);
    } else {
      console.log('Failed to create candidate.');
      console.log('Status:', response.status);
      console.log('Response:', data);
    }
  } catch (error) {
    console.error('Error calling Ashby API:', error.message);
  }
})();

