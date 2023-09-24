const request = require('request');
require('dotenv').config({ path: './api/config/config.env' });
// Replace 'localhost:8085' with the actual URL of your server
const baseUrl = `http://localhost:${process.env.PORT || 8085}`;

// Sample data to send in the request
const taskData = [
  {
    description: 'Criar Login',
    responsable: 'bruno',
    status: 'done',
  },
  {
    description: 'Criar Menu',
    responsable: 'bruno',
    status: 'doing',
  },
  {
    description: 'Criar tela de perfil',
    responsable: 'bruno',
    status: 'todo',
  },
];

describe('E2E Tests for /insert-tasks endpoint', () => {
  // Use beforeAll to start your server or perform any setup
  beforeAll(() => {
    // Start your server here if needed
  });

  // Use afterAll to stop your server or perform any cleanup
  afterAll(() => {
    // Stop your server here if needed
  });

  it('should insert tasks successfully', (done) => {
    const options = {
      method: 'POST',
      uri: `${baseUrl}/insert-tasks`,
      body: JSON.stringify(taskData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Send the request
    request(options, (error, response, body) => {
      if (error) {
        // Handle request error
        done(error);
      } else {
        // Check the response status code (you may need to adjust this based on your server's response)
        expect(response.statusCode).toBe(200);
        done();
      }
    });
  });
});

describe('E2E Tests for /get-tasks endpoint', () => {
    it('should retrieve tasks successfully', (done) => {
      const options = {
        method: 'GET',
        uri: `${baseUrl}/get-tasks`,
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      // Send the request
      request(options, (error, response, body) => {
        if (error) {
          // Handle request error
          done(error);
        } else {
          // Check the response status code (adjust based on your server's response)
          expect(response.statusCode).toBe(200);
  
          // Optionally, you can assert on the response body or structure
          // For example, if your server responds with JSON data:
          const responseBody = JSON.parse(body);
          expect(Array.isArray(responseBody)).toBe(true);
  
          done();
        }
      });
    });
  });
  