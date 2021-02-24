import supertest from 'supertest';

import Server from 'src/interfaces/http/Server';

const server = new Server();
void server.bootstrap();
const request = supertest(server.app);

describe('Feature :: API :: Default Routes', () => {
  it('GET /test', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Node DDD Typescript Version');
  });

  it('404 - Not found', async () => {
    const response = await request.get('/foo');

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Not found');
  });
});
