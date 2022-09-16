const request = require('supertest')
const app = require('../server')
describe('Bootcamp Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/v1/bootcamps')
      .send({
        id: 1
      })
    expect(res.statusCode).toEqual(201)
    console.log(res.body)
    expect(res.body).toEqual({success: true, msg: 'Create new bootcamp'})
  });

  it('should fetch a single bootcamp', async () => {
    const postId = 1;
    const res = await request(app).get(`/api/v1/bootcamps/${postId}`);
    expect(res.statusCode).toEqual(200);
    // expect(res.body).toHaveProperty('post');
  });

  it('should fetch all bootcamps', async () => {
    const res = await request(app).get('/api/v1/bootcamps/');
    expect(res.statusCode).toEqual(200);
    // expect(res.body).toHaveProperty('posts');
    // expect(res.body.posts).toHaveLength(1);
  });

  it('should update a bootcamp', async () => {
    const res = await request(app)
      .put('/api/v1/bootcamps/1')
      .send({
        id: 1
      });

      expect(res.statusCode).toEqual(200);
    });

  it('should delete a boootcamp', async () => {
    const res = await request(app).delete('/api/v1/bootcamps/1');
    expect(res.statusCode).toEqual(204);
    });  

//   it('should respond with status code 404 if resource is not found', async () => {
//     const postId = 1;
//     const res = await request(app).get(`/api/posts/${postId}`);
//     expect(res.statusCode).toEqual(404);
//   });

// it('should return status code 500 if db constraint is violated', async () => {
//     const res = await request(app)
//       .post('/api/posts')
//       .send({
//         title: 'test is cool',
//         content: 'Lorem ipsum',
//       });
//     expect(res.statusCode).toEqual(500);
//     expect(res.body).toHaveProperty('error');
//   });

});
  

